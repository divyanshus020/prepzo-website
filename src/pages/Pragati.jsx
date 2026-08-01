import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Hexagon, ChevronRight } from 'lucide-react'
import Seo, { breadcrumbLd } from '../components/Seo'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260729_102822_0e6c87e8-c141-4744-bf32-ad30db296371.mp4'

const PORTRAIT =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260728_050334_5b076e26-0ce7-4898-b432-d764190e448f.png&w=1280&q=85'

/* --------------------------------------------------- scroll-scrub video --- */

/**
 * Fixed full-bleed background whose playhead is driven by page scroll.
 * Poster → <video> → <canvas>: the canvas takes over once a frame cache of
 * decoded ImageBitmaps exists, because seeking a <video> per frame stutters.
 */
function ScrollVideo() {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const framesRef = useRef([])
  const [hasFrame, setHasFrame] = useState(false)
  const [cacheReady, setCacheReady] = useState(false)

  // Build the frame cache from an offscreen copy of the same file.
  useEffect(() => {
    let cancelled = false
    const visible = videoRef.current
    if (!visible) return

    const start = () => {
      const off = document.createElement('video')
      off.src = HERO_VIDEO
      off.crossOrigin = 'anonymous'
      off.muted = true
      off.playsInline = true
      off.preload = 'auto'

      off.addEventListener('loadeddata', async () => {
        if (cancelled) return
        const duration = off.duration
        if (!Number.isFinite(duration) || duration <= 0) return

        const count = Math.min(90, Math.max(24, Math.round(duration * 12)))
        const scale = Math.min(1, 960 / (off.videoWidth || 960))
        const w = Math.round((off.videoWidth || 960) * scale)
        const h = Math.round((off.videoHeight || 540) * scale)
        const scratch = document.createElement('canvas')
        scratch.width = w
        scratch.height = h
        const sctx = scratch.getContext('2d')
        const frames = []

        for (let i = 0; i < count; i++) {
          if (cancelled) return
          const t = (i / (count - 1)) * (duration - 0.05)
          // eslint-disable-next-line no-await-in-loop
          const ok = await new Promise((resolve) => {
            // A seek to the position the video already holds fires no 'seeked'
            // event, so the timeout keeps extraction from stalling on frame 0.
            const timer = setTimeout(() => finish(true), 400)
            const finish = (v) => {
              clearTimeout(timer)
              off.removeEventListener('seeked', onSeeked)
              resolve(v)
            }
            const onSeeked = () => finish(true)
            off.addEventListener('seeked', onSeeked)
            try {
              off.currentTime = t
            } catch {
              finish(false)
            }
          })
          if (!ok) return
          sctx.drawImage(off, 0, 0, w, h)
          try {
            // eslint-disable-next-line no-await-in-loop
            frames.push(await createImageBitmap(scratch))
          } catch {
            // Canvas tainted (no CORS headers on the CDN) — keep the
            // <video>-seek fallback instead of a half-built cache.
            return
          }
        }

        if (cancelled) return
        framesRef.current = frames
        setCacheReady(true)
      })
    }

    // Give the visible video a head start before competing for bandwidth.
    const kick = () => setTimeout(start, 300)
    if (visible.readyState >= 2) kick()
    else visible.addEventListener('loadeddata', kick, { once: true })

    return () => {
      cancelled = true
      framesRef.current.forEach((f) => f.close?.())
      framesRef.current = []
    }
  }, [])

  // Always enter the page at scroll 0 so the scrub starts at frame 0 — a
  // restored scroll position drops the visitor into the middle of the video.
  useEffect(() => {
    const prev = window.history.scrollRestoration
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
    return () => {
      if ('scrollRestoration' in window.history) window.history.scrollRestoration = prev || 'auto'
    }
  }, [])

  // Scroll → smoothed progress → canvas draw (or <video> seek as fallback).
  useEffect(() => {
    let raf
    let smoothed = 0
    let target = 0
    let seeded = false

    const readScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      target = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
    }

    const sizeCanvas = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(window.innerWidth * dpr)
      canvas.height = Math.round(window.innerHeight * dpr)
    }

    const drawCover = (src, sw, sh) => {
      const canvas = canvasRef.current
      if (!canvas || !sw || !sh) return
      const ctx = canvas.getContext('2d')
      const scale = Math.max(canvas.width / sw, canvas.height / sh)
      const w = sw * scale
      const h = sh * scale
      ctx.drawImage(src, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h)
    }

    const tick = () => {
      // First frame snaps to the real position; after that it eases, so the
      // playhead never sweeps the whole clip on load.
      if (!seeded) {
        smoothed = target
        seeded = true
      } else {
        smoothed += (target - smoothed) * 0.12
      }
      const frames = framesRef.current
      if (frames.length) {
        const i = Math.min(frames.length - 1, Math.round(smoothed * (frames.length - 1)))
        const f = frames[i]
        drawCover(f, f.width, f.height)
      } else {
        const v = videoRef.current
        if (v && Number.isFinite(v.duration) && v.duration > 0) {
          const t = smoothed * (v.duration - 0.05)
          if (Math.abs(v.currentTime - t) > 0.04) {
            try {
              v.currentTime = t
            } catch {
              /* seek not ready yet */
            }
          }
        }
      }
      raf = requestAnimationFrame(tick)
    }

    readScroll()
    sizeCanvas()
    raf = requestAnimationFrame(tick)
    window.addEventListener('scroll', readScroll, { passive: true })
    window.addEventListener('resize', () => {
      readScroll()
      sizeCanvas()
    })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', readScroll)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#0a0a0a] pointer-events-none">
      <video
        ref={videoRef}
        src={HERO_VIDEO}
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setHasFrame(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          hasFrame && !cacheReady ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
          cacheReady ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}

/* ------------------------------------------------------------- reveal --- */

/** Fade-up on first intersection, threshold 0.15, per-element delay in ms. */
function Reveal({ delay = 0, className = '', as: Tag = 'div', children }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, willChange: 'transform' }}
      className={`transition-all duration-700 ease-out ${
        shown ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      {children}
    </Tag>
  )
}

/** Left-accent frosted badge with a mono uppercase label. */
function Badge({ children }) {
  return (
    <span className="inline-block border-l-2 border-white bg-white/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-white backdrop-blur-md">
      {children}
    </span>
  )
}

/* --------------------------------------------------------------- data --- */

const SERVICES = ['/ VENTURE GENOME', '/ DETERMINISTIC FINANCIALS', '/ WEEKLY BOARD REVIEW']

const STEPS = [
  { n: '01', title: 'Apply', body: 'A 7-step application seeds ten genome strands — problem, ICP, unit economics, moat, traction.' },
  { n: '02', title: 'Interrogate', body: 'The Chair opens on your weakest strand and reduces every claim to unit level. One question at a time.' },
  { n: '03', title: 'Compute', body: 'Accept an assumption and a formula engine rebuilds 36 months of P&L, cash flow and 12 KPIs. The AI never does the arithmetic.' },
  { n: '04', title: 'Prove', body: 'Log an LOI, a pilot, real revenue. Evidence lifts confidence, and the weekly board review grades the delta.' },
]

const NUMBERS = [
  { value: '10', label: 'Genome strands' },
  { value: '30', label: 'Assumption keys' },
  { value: '36', label: 'Months modelled' },
  { value: '12', label: 'KPIs computed' },
]

const CAPABILITIES = [
  {
    n: '01',
    title: 'Venture Genome',
    body: 'Ten strands with confidence, provenance and decay — a guess and a signed LOI never look the same on screen.',
  },
  {
    n: '02',
    title: 'Deterministic financials',
    body: 'The model proposes assumptions from a closed vocabulary; a formula engine computes every figure.',
  },
  {
    n: '03',
    title: 'Weekly board review',
    body: 'A grade, the delta since last week, and three commitments you get held to.',
  },
]

/* --------------------------------------------------------------- page --- */

export default function Pragati() {
  return (
    <div className="relative bg-[#0a0a0a] font-sans text-white antialiased">
      <Seo
        title="Pragati AI by Prepzo — a system of record for your venture"
        description="Pragati AI holds a student venture in memory: a ten-strand genome with confidence and provenance, financials computed by a deterministic engine, and a weekly board review that holds founders to what they claimed."
        path="/pragati"
        keywords="Pragati AI, Prepzo, student startup, innovation lab, venture genome, deterministic financial engine, AI board review, IIC, NISP"
        jsonLd={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Pragati AI', path: '/pragati' },
        ])}
      />

      <ScrollVideo />

      <div className="relative z-10">
        {/* ================================================== Navbar ===== */}
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/15">
          <div className="flex items-center justify-between px-5 py-4 sm:px-8 md:px-12">
            <Reveal delay={0} as="div">
              <Link to="/" className="flex items-center gap-2" aria-label="Prepzo home">
                <Hexagon size={24} strokeWidth={1.5} />
                <span className="text-lg font-medium tracking-tight sm:text-xl">pragati</span>
              </Link>
            </Reveal>

            <div className="hidden items-center gap-8 md:flex lg:gap-10">
              {[
                { label: 'Genome', href: '#genome', sup: '10' },
                { label: 'For Universities', href: '/universities' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((l, i) => (
                <Reveal key={l.label} delay={100 + i * 100} as="div">
                  {l.href.startsWith('#') ? (
                    <a href={l.href} className="text-sm text-white/85 transition-colors duration-300 hover:text-white">
                      {l.label}
                      {l.sup && <sup className="ml-0.5 font-mono text-[10px] text-white/60">{l.sup}</sup>}
                    </a>
                  ) : (
                    <Link to={l.href} className="text-sm text-white/85 transition-colors duration-300 hover:text-white">
                      {l.label}
                    </Link>
                  )}
                </Reveal>
              ))}
            </div>

            <Reveal delay={500} as="div">
              <Link
                to="/contact?subject=Pragati AI"
                className="rounded-md border border-white/20 bg-white/15 px-4 py-2 text-xs backdrop-blur-md transition-colors duration-300 hover:bg-white/25 sm:px-5 sm:text-sm"
              >
                Get Free Consultation
              </Link>
            </Reveal>
          </div>
        </nav>

        <main>
          {/* =========================================== Section One ===== */}
          <section className="flex min-h-screen flex-col justify-between px-5 pt-24 pb-12 supports-[height:100svh]:min-h-[100svh] sm:px-8 sm:pt-28 md:px-12 md:pb-16">
            {/* Top row */}
            <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
              <div className="flex flex-col gap-2">
                {SERVICES.map((s, i) => (
                  <Reveal
                    key={s}
                    delay={150 + i * 120}
                    className="font-mono text-xs uppercase tracking-[0.15em] text-white/90 drop-shadow-md"
                  >
                    {s}
                  </Reveal>
                ))}
              </div>

              <Reveal
                delay={300}
                className="max-w-xs text-lg leading-relaxed text-white drop-shadow-md sm:text-right sm:text-xl"
              >
                We build the system of record for a student venture — memory, evidence and accountability a chat window
                cannot hold.
              </Reveal>
            </div>

            {/* Bottom row */}
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <Reveal delay={150} className="mb-5">
                  <Badge>An AI-run innovation lab</Badge>
                </Reveal>
                <Reveal
                  delay={280}
                  as="h1"
                  className="text-5xl font-normal leading-[1.05] tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl"
                >
                  Clear. Precise.
                  <br />
                  Accountable.
                </Reveal>
              </div>

              <Reveal delay={420}>
                <div className="flex items-center gap-4 rounded-xl bg-white/15 p-3 backdrop-blur-md">
                  <img
                    src={PORTRAIT}
                    alt="A Pragati AI programme lead"
                    className="h-24 w-20 rounded-lg object-cover"
                  />
                  <div className="flex flex-col gap-1.5 pr-2">
                    <span className="text-sm font-medium text-white">Talk with the team</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">
                      Pragati AI by Prepzo
                    </span>
                    <Link
                      to="/contact?subject=Pragati AI"
                      className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-colors duration-300 hover:bg-white/85"
                    >
                      Book 15-mins call <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Scrub room between the two sections */}
          <div className="h-[80vh]" aria-hidden="true" />

          {/* =========================================== Section Two ===== */}
          <section
            id="genome"
            className="flex min-h-screen flex-col justify-between px-5 pt-24 pb-12 supports-[height:100svh]:min-h-[100svh] sm:px-8 sm:pt-28 md:px-12 md:pb-16"
          >
            {/* Top row */}
            <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
              <Reveal delay={120}>
                <Badge>Proof On Demand</Badge>
              </Reveal>
              <Reveal
                delay={220}
                className="max-w-sm text-lg leading-relaxed text-white drop-shadow-md sm:text-right sm:text-xl"
              >
                Pragati doesn't just answer — it computes the number, names the assumption behind it, and shows what
                changed since last week.
              </Reveal>
            </div>

            {/* Bottom area */}
            <div className="flex flex-1 flex-col justify-end gap-12 md:flex-row md:items-end md:justify-between md:gap-16">
              <div className="max-w-xl">
                <Reveal
                  delay={180}
                  as="h2"
                  className="text-5xl font-normal leading-[1.05] tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl"
                >
                  Know what
                  <br />
                  actually moved.
                </Reveal>

                <Reveal
                  delay={320}
                  className="mt-6 max-w-md text-sm leading-relaxed text-white/80 drop-shadow-md sm:text-base"
                >
                  From the first claim to the final model, Pragati turns what a founder asserts into figures a dean or an
                  investor can audit — quietly, precisely, every week.
                </Reveal>

                <Reveal delay={420} className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://pragati.prepzo.space"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-white px-5 py-2.5 text-xs font-medium text-black transition-colors duration-300 hover:bg-white/85 sm:text-sm"
                  >
                    See the product <ChevronRight size={14} />
                  </a>
                  <Link
                    to="/contact?subject=Pragati AI"
                    className="rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-xs backdrop-blur-md transition-colors duration-300 hover:bg-white/20 sm:text-sm"
                  >
                    Free consultation
                  </Link>
                </Reveal>
              </div>

              {/* Frosted capability panel */}
              <div className="w-full max-w-md rounded-2xl border border-white/15 bg-white/10 px-5 backdrop-blur-md sm:px-6">
                {CAPABILITIES.map((c, i) => (
                  <Reveal
                    key={c.n}
                    delay={300 + i * 110}
                    className={`flex gap-5 py-5 ${i < CAPABILITIES.length - 1 ? 'border-b border-white/15' : ''}`}
                  >
                    <span className="font-mono text-[11px] tracking-[0.15em] text-white/55">{c.n}</span>
                    <div className="group flex-1">
                      <div className="flex items-center gap-2 text-base font-medium text-white sm:text-lg">
                        {c.title}
                        <ChevronRight
                          size={16}
                          className="text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white"
                        />
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/70">{c.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* More scrub room before the closing section */}
          <div className="h-[60vh]" aria-hidden="true" />

          {/* ========================================= Section Three ===== */}
          <section
            id="how"
            className="flex min-h-screen flex-col justify-between px-5 pt-24 pb-12 supports-[height:100svh]:min-h-[100svh] sm:px-8 sm:pt-28 md:px-12 md:pb-16"
          >
            <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
              <Reveal delay={120}>
                <Badge>The Loop</Badge>
              </Reveal>
              <Reveal
                delay={220}
                className="max-w-sm text-lg leading-relaxed text-white drop-shadow-md sm:text-right sm:text-xl"
              >
                Four moves a week. Each one leaves a record the next one is judged against.
              </Reveal>
            </div>

            <div className="flex flex-1 flex-col justify-end gap-12">
              <Reveal
                delay={180}
                as="h2"
                className="max-w-xl text-5xl font-normal leading-[1.05] tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl"
              >
                Claim. Compute.
                <br />
                Prove.
              </Reveal>

              {/* Four-step loop */}
              <div className="grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md md:grid-cols-4">
                {STEPS.map((s, i) => (
                  <Reveal
                    key={s.n}
                    delay={260 + i * 110}
                    className={`px-5 py-6 sm:px-6 ${
                      i < STEPS.length - 1 ? 'border-b border-white/15 md:border-b-0 md:border-r' : ''
                    }`}
                  >
                    <span className="font-mono text-[11px] tracking-[0.15em] text-white/55">{s.n}</span>
                    <h3 className="mt-2 text-base font-medium text-white sm:text-lg">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/70">{s.body}</p>
                  </Reveal>
                ))}
              </div>

              {/* What the system actually holds */}
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div className="flex flex-wrap gap-8 sm:gap-12">
                  {NUMBERS.map((n, i) => (
                    <Reveal key={n.label} delay={200 + i * 90}>
                      <div className="text-4xl font-normal tracking-tight text-white drop-shadow-lg sm:text-5xl">
                        {n.value}
                      </div>
                      <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">
                        {n.label}
                      </div>
                    </Reveal>
                  ))}
                </div>

                <Reveal delay={560} className="flex flex-wrap gap-3">
                  <Link
                    to="/contact?subject=Pragati AI"
                    className="inline-flex items-center gap-1 rounded-full bg-white px-5 py-2.5 text-xs font-medium text-black transition-colors duration-300 hover:bg-white/85 sm:text-sm"
                  >
                    Bring it to your campus <ChevronRight size={14} />
                  </Link>
                </Reveal>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
