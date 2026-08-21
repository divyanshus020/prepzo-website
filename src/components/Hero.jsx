import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './hero.css'

const NAV_ITEMS = [
  { label: 'Home', href: '/', active: true },
  { label: 'For Schools', href: '/schools' },
  { label: 'For Universities', href: '/universities' },
  { label: 'Pragati AI', href: '/pragati' },
]

const MENU_ITEMS = [
  ...NAV_ITEMS,
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

// Real Prepzo metrics (same source as the Features comparison strip).
const STATS = [
  { icon: '#', target: 120, suffix: 'B', decimals: 0, label: 'Model Parameters' },
  { icon: '*', target: 6, suffix: '', decimals: 0, label: 'Steps To Readiness' },
  { icon: '%', target: 35, suffix: 'K+', decimals: 0, label: 'Students, Jodhpur' },
  { icon: '<', target: 1, suffix: ' day', decimals: 0, label: 'Response Time' },
]

function StatValue({ target, suffix, decimals, index }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState((0).toFixed(decimals) + suffix)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const format = (n) => n.toFixed(decimals) + suffix
    let frameId = null
    let timeoutId = null

    const run = () => {
      if (reduceMotion) {
        setDisplay(format(target))
        return
      }
      const duration = 1500 + index * 80
      const startDelay = 480 + index * 90
      let startTime = null

      const frame = (now) => {
        if (startTime === null) startTime = now
        const t = Math.min((now - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
        setDisplay(format(target * eased))
        if (t < 1) frameId = requestAnimationFrame(frame)
        else setDisplay(format(target))
      }

      timeoutId = setTimeout(() => {
        frameId = requestAnimationFrame(frame)
      }, startDelay)
    }

    if (!('IntersectionObserver' in window)) {
      run()
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          io.unobserve(entry.target)
          run()
        })
      },
      { threshold: 0.25 }
    )
    io.observe(el)

    return () => {
      io.disconnect()
      if (frameId) cancelAnimationFrame(frameId)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [target, suffix, decimals, index])

  return <span ref={ref} className="pz-stat-value">{display}</span>
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return

    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth > 720) setMenuOpen(false)
    }

    document.body.classList.add('pz-menu-open')
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)

    return () => {
      document.body.classList.remove('pz-menu-open')
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  return (
    <section className="pz-hero">
      <div className="pz-bg">
        <video className="pz-bg-video" autoPlay muted loop playsInline>
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="pz-page">
        {/* Header */}
        <header className="pz-header">
          <Link className="pz-logo" to="/" aria-label="Prepzo home">
            <img src="/favicon.png" alt="" width="52" height="52" />
          </Link>

          <nav className="pz-nav" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`pz-nav-link${item.active ? ' is-active' : ''}`}
                aria-current={item.active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link className="pz-sign-in" to="/contact">Talk to us</Link>

          <button
            type="button"
            className="pz-burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="pz-mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </header>

        {/* Hero */}
        <div className="pz-hero-body">
          <div className="pz-trust pz-anim" style={{ '--d': '0.05s' }}>
            <span className="pz-avatar a1">
              <span className="pz-avatar-inner"><i className="fa-solid fa-school" /></span>
            </span>
            <span className="pz-avatar a2">
              <span className="pz-avatar-inner"><i className="fa-solid fa-building-columns" /></span>
            </span>
            <span className="pz-avatar a3">
              <span className="pz-avatar-inner"><i className="fa-solid fa-graduation-cap" /></span>
            </span>
            <span className="pz-trust-pill">Trusted by schools &amp; universities</span>
          </div>

          <h1 className="pz-headline pz-anim">
            <span style={{ '--d': '0.12s' }}>An AI counsellor</span>
            <span style={{ '--d': '0.3s' }}>for every classroom in India.</span>
          </h1>

          <p className="pz-subhead pz-anim" style={{ '--d': '0.28s' }}>
            Prepzo shows students the career paths they are genuinely built for, and gives teachers a real helping hand
            with their everyday work.
          </p>

          <Link className="pz-cta pz-anim" style={{ '--d': '0.4s' }} to="/contact">
            Book a Demo
          </Link>
        </div>

        {/* Stats */}
        <div className="pz-stats" aria-label="Prepzo in numbers">
          {STATS.map((s, i) => (
            <div key={s.label} className="pz-stat pz-anim" style={{ '--d': `${0.5 + i * 0.08}s` }}>
              <span className="pz-stat-icon">{s.icon}</span>
              <StatValue target={s.target} suffix={s.suffix} decimals={s.decimals} index={i} />
              <span className="pz-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <>
          <div className="pz-menu-overlay" onClick={() => setMenuOpen(false)} />
          <div className="pz-menu-sheet" id="pz-mobile-menu">
            {MENU_ITEMS.map((item, i) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMenuOpen(false)}
                className={`pz-menu-link${item.active ? ' is-active' : ''}`}
                style={{ '--d': `${0.06 + i * 0.04}s` }}
                aria-current={item.active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link className="pz-menu-cta" to="/contact" onClick={() => setMenuOpen(false)}>
              Talk to us
            </Link>
          </div>
        </>
      )}
    </section>
  )
}
