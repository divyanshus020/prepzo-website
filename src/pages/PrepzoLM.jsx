import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, BookOpen, ShieldCheck, Cpu, CheckCircle } from 'lucide-react'
import Seo, { breadcrumbLd } from '../components/Seo'

// Scroll-triggered counter component for numbers
function Counter({ value, suffix = '', duration = 1200 }) {
  const [count, setCount] = useState(0)
  const elementRef = useRef(null)
  const isInView = useInView(elementRef, { once: true, amount: 0.5 })
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (isInView && !started) {
      setStarted(true)
    }
  }, [isInView, started])

  useEffect(() => {
    if (!started) return
    let startTime = null
    const end = parseFloat(value)
    if (isNaN(end)) return

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeProgress = 1 - Math.pow(1 - progress, 3) // Cubic ease-out
      setCount((easeProgress * end).toFixed(1))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [started, value, duration])

  return (
    <span ref={elementRef}>
      {started ? count : '0.0'}
      {suffix}
    </span>
  )
}

// Word-by-word scroll opacity reveal for the quote
function QuoteReveal({ text }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 50%'],
  })

  const words = text.split(' ')

  return (
    <div ref={containerRef} className="flex flex-wrap justify-center text-3xl md:text-4xl lg:text-5xl font-display font-medium text-ink leading-snug tracking-tight text-center max-w-4xl mx-auto">
      {words.map((word, i) => {
        const start = i / words.length
        const end = (i + 1.5) / words.length
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1])

        return (
          <motion.span key={i} style={{ opacity }} className="mr-3 mb-2 select-none">
            {word}
          </motion.span>
        )
      })}
    </div>
  )
}

export default function PrepzoLM() {
  const heroRef = useRef(null)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // Parallax translation for the video and copy
  const heroTextY = useTransform(heroProgress, [0, 1], [0, -100])
  const heroOpacity = useTransform(heroProgress, [0, 0.6], [1, 0])
  const dashboardY = useTransform(heroProgress, [0, 1], [0, -30])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-cream pt-20 overflow-hidden font-body">
      <Seo
        title="PrepzoLM | Specialist Intelligence for Education & Healthcare"
        description="PrepzoLM is our 120B-parameter specialist language model pretrained on curated pedagogical and clinical corpora, offering FERPA & HIPAA compliance."
        path="/prepzolm"
        keywords="PrepzoLM, specialist LLM, education AI model, healthcare AI model, 120B parameter model, clinical AI, pedagogical pretraining, HIPAA compliant AI"
        jsonLd={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'PrepzoLM', path: '/prepzolm' },
        ])}
      />

      {/* Blueprint grid overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* ===== Hero Section ===== */}
      <section ref={heroRef} className="relative pt-12 md:pt-20 px-6 text-center z-10">
        <motion.div style={{ y: heroTextY, opacity: heroOpacity }} className="flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-[#0E1116]/10 rounded-full px-4 py-1.5 shadow-sm mb-6">
            <span className="bg-coral text-white rounded-full px-2 py-0.5 text-xs font-bold uppercase tracking-wider">New</span>
            <span className="text-xs sm:text-sm font-semibold text-[#0E1116]/60">Say hello to PrepzoLM 120B v1.0</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-800 text-[#0E1116] leading-[1.08] tracking-tight max-w-5xl mb-6">
            Specialist intelligence.<br />
            Education & <em className="text-coral">Healthcare.</em>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#0E1116]/80 max-w-2xl leading-relaxed mb-10">
            A 120B-parameter model pretrained only on curated pedagogical and clinical corpora.
            Every benchmark published, every number reproducible — MIT licensed.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-coral">
              Get API access <ArrowRight size={18} />
            </Link>
            <Link to="/contact?subject=Technical Report" className="btn-outline">
              Talk to our team
            </Link>
          </div>
        </motion.div>

        {/* Video & Dashboard Demo (Cinematic Area) */}
        <motion.div
          style={{ y: dashboardY }}
          className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden aspect-[16/9] mt-16 md:mt-20 border border-ink/10 shadow-lg-soft bg-ink"
        >
          {/* Background hero loop video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
          >
            <source src="/prepzolm_hero.mp4" type="video/mp4" />
          </video>

          {/* Cinematic wash */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-ink via-transparent to-ink/20" />

          {/* Dashboard overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
            <div className="w-[85%] md:w-[70%] aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group">
              <img
                src="/dashboard_shot.png"
                alt="PrepzoLM Performance Analytics Dashboard"
                className="w-full h-full object-cover mix-blend-luminosity filter saturate-150 brightness-110 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== Infinite Marquee Section ===== */}
      <div className="overflow-hidden border-t border-b border-ink/10 py-6 bg-white relative z-20">
        <div className="flex whitespace-nowrap overflow-x-hidden">
          <div className="flex gap-16 animate-marquee text-xs font-mono font-bold uppercase tracking-widest text-ink/60">
            {Array(4).fill([
              '120B Parameters',
              'MIT Licensed',
              '2.1T Domain Tokens',
              '128K Context Window',
              '46 Languages Supported',
              '13 Programming Languages',
              'HIPAA + FERPA Compliant'
            ]).flat().map((text, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span>{text}</span>
                <span className="text-coral">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Testimonial Quote Section ===== */}
      <section className="py-24 px-6 relative z-20 bg-cream-50 border-b border-ink/5">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
          <span className="font-serif italic text-7xl text-coral/80 line-height-none">“</span>
          
          <QuoteReveal text="The first model our clinical review board approved without a single escalation in the evaluation set." />

          <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
            <div className="w-14 h-14 rounded-full border-2 border-white overflow-hidden shadow-sm-soft">
              <img
                src="/testimonial_avatar.png"
                alt="Chief Medical Information Officer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <div className="font-display font-bold text-ink">Dr. Sarah Miller</div>
              <div className="text-sm text-ink/60 font-medium">Chief Medical Information Officer · [ Pilot Partner Hospital ]</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Benchmarks Section ===== */}
      <section id="benchmarks" className="py-24 px-6 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end flex-wrap gap-6 mb-16 border-b border-ink/10 pb-8">
            <div>
              <span className="kicker">The Proof</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-800 text-ink mt-2">
                Evaluations &amp; <em className="text-coral">Accuracy.</em>
              </h2>
            </div>
            <span className="text-xs font-mono font-bold tracking-widest text-ink/50 uppercase">
              DOMAIN-SPLIT EVALS · VS 175B GENERAL BASELINE
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education Intelligence */}
            <div className="bg-white border border-ink/5 rounded-3xl p-8 md:p-10 shadow-sm-soft hover:shadow-md-soft transition-all duration-300">
              <div className="flex justify-between items-center mb-8 border-b border-ink/5 pb-4">
                <h3 className="text-2xl font-display font-800 text-ink flex items-center gap-2">
                  <BookOpen className="text-coral" size={24} />
                  Education Intelligence
                </h3>
                <span className="text-xs font-mono font-bold text-coral bg-coral/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  Domain 01
                </span>
              </div>

              {/* Stat Numbers */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div>
                  <div className="text-3xl md:text-4xl font-display font-850 text-coral leading-none">
                    <Counter value="92.4" suffix="%" />
                  </div>
                  <div className="text-xs font-bold text-ink mt-2 leading-tight">Tutoring Helpfulness</div>
                  <div className="text-[10px] text-ink/50 mt-1">internal eval · +21.7</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-display font-850 text-coral leading-none">
                    <Counter value="89.7" suffix="%" />
                  </div>
                  <div className="text-xs font-bold text-ink mt-2 leading-tight">Curriculum Alignment</div>
                  <div className="text-[10px] text-ink/50 mt-1">question-gen · +18.2</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-display font-850 text-coral leading-none">
                    <Counter value="94.1" suffix="%" />
                  </div>
                  <div className="text-xs font-bold text-ink mt-2 leading-tight">Academic Summary</div>
                  <div className="text-[10px] text-ink/50 mt-1">rubric-scored · +12.9</div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                {[
                  { label: 'Personalized tutoring adapter', percent: '100%' },
                  { label: 'Assessment generation & mapping', percent: '100%' },
                  { label: 'Student feedback generation', percent: '100%' },
                  { label: 'Curriculum-grounded retrieval (RAG)', percent: '100%' },
                  { label: 'Learning analytics', percent: '80%' },
                  { label: 'Assignment evaluation', percent: '80%' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-sm font-medium text-ink">
                    <span className="text-ink/80">{item.label}</span>
                    <div className="flex gap-1.5">
                      {Array(5).fill(0).map((_, idx) => {
                        const stepVal = (idx + 1) * 20
                        const isFilled = stepVal <= parseInt(item.percent)
                        return (
                          <div
                            key={idx}
                            className={`w-6 h-2 rounded-sm transition-colors duration-1000 ${
                              isFilled ? 'bg-coral' : 'bg-coral-soft/30'
                            }`}
                          />
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Healthcare Intelligence */}
            <div className="bg-white border border-ink/5 rounded-3xl p-8 md:p-10 shadow-sm-soft hover:shadow-md-soft transition-all duration-300">
              <div className="flex justify-between items-center mb-8 border-b border-ink/5 pb-4">
                <h3 className="text-2xl font-display font-800 text-ink flex items-center gap-2">
                  <ShieldCheck className="text-coral-2" size={24} />
                  Healthcare Intelligence
                </h3>
                <span className="text-xs font-mono font-bold text-coral-2 bg-coral-2/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  Domain 02
                </span>
              </div>

              {/* Stat Numbers */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div>
                  <div className="text-3xl md:text-4xl font-display font-850 text-coral-2 leading-none">
                    <Counter value="61.4" suffix="%" />
                  </div>
                  <div className="text-xs font-bold text-ink mt-2 leading-tight">MedQA-USMLE</div>
                  <div className="text-[10px] text-ink/50 mt-1">baseline 47.8 · +13.6</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-display font-850 text-coral-2 leading-none">
                    <Counter value="76.2" suffix="%" />
                  </div>
                  <div className="text-xs font-bold text-ink mt-2 leading-tight">PubMedQA</div>
                  <div className="text-[10px] text-ink/50 mt-1">reasoning-req · +9.4</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-display font-850 text-coral-2 leading-none">
                    <Counter value="93.8" suffix="%" />
                  </div>
                  <div className="text-xs font-bold text-ink mt-2 leading-tight">Clinical Summary</div>
                  <div className="text-[10px] text-ink/50 mt-1">clinician-scored · +15.1</div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                {[
                  { label: 'SOAP / discharge documentation drafting', percent: '100%' },
                  { label: 'Clinical note summarization', percent: '100%' },
                  { label: 'Biomedical literature search', percent: '100%' },
                  { label: 'Patient education material translation', percent: '100%' },
                  { label: 'Medical question answering', percent: '80%' },
                  { label: 'Drug information retrieval safety checks', percent: '80%' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-sm font-medium text-ink">
                    <span className="text-ink/80">{item.label}</span>
                    <div className="flex gap-1.5">
                      {Array(5).fill(0).map((_, idx) => {
                        const stepVal = (idx + 1) * 20
                        const isFilled = stepVal <= parseInt(item.percent)
                        return (
                          <div
                            key={idx}
                            className={`w-6 h-2 rounded-sm transition-colors duration-1000 ${
                              isFilled ? 'bg-coral-2' : 'bg-coral-soft/30'
                            }`}
                          />
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Kicker Row */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-8 border-t border-ink/10 pt-6 text-sm font-medium text-ink/60">
            <span className="text-ink font-bold">General Benchmarks:</span>
            <span>MMLU: 39.1</span>
            <span>HellaSwag: 73.6</span>
            <span>LAMBADA: 67.2</span>
            <span>WinoGrande: 72.1</span>
            <span>ARC-C: 45.1</span>
          </div>
          <p className="text-xs text-ink/50 mt-4 leading-relaxed">
            Domain scores measured after domain alignment with retrieval enabled. All configs, prompts, and training seeds are fully published in Technical Report §4.
          </p>
        </div>
      </section>

      {/* ===== How It Works Section ===== */}
      <section id="model" className="py-24 px-6 border-t border-ink/10 relative z-20 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <span className="kicker">Technical Pipeline</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-800 text-ink mt-2 mb-12">
            Inside the <em className="text-coral">Engine.</em>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-ink/5 rounded-3xl p-8 hover:shadow-md-soft transition-all duration-300">
              <span className="text-xs font-mono font-bold text-coral bg-coral/10 px-2 py-1 rounded-full">Step 01</span>
              <h3 className="text-lg font-display font-bold text-ink mt-4 mb-3">Curated Pretraining</h3>
              <p className="text-sm text-ink/70 leading-relaxed">
                2.1T tokens of vetted textbooks, clinical guidelines, and pedagogical dialogue. Absolutely no generic web scrapings or spam.
              </p>
            </div>
            <div className="bg-white border border-ink/5 rounded-3xl p-8 hover:shadow-md-soft transition-all duration-300">
              <span className="text-xs font-mono font-bold text-coral bg-coral/10 px-2 py-1 rounded-full">Step 02</span>
              <h3 className="text-lg font-display font-bold text-ink mt-4 mb-3">Expert RLHF Alignment</h3>
              <p className="text-sm text-ink/70 leading-relaxed">
                Preference data carefully curated by professional educators and clinicians. Adaptively tuned for medical care and classroom safety.
              </p>
            </div>
            <div className="bg-white border border-ink/5 rounded-3xl p-8 hover:shadow-md-soft transition-all duration-300">
              <span className="text-xs font-mono font-bold text-coral bg-coral/10 px-2 py-1 rounded-full">Step 03</span>
              <h3 className="text-lg font-display font-bold text-ink mt-4 mb-3">Grounded RAG Serving</h3>
              <p className="text-sm text-ink/70 leading-relaxed">
                Seamless real-time retrieval over your custom curriculum, formulas, or medical records, with rigorous citation-level attribution on every response.
              </p>
            </div>
          </div>

          {/* Model pass flow diagram */}
          <div className="mt-16 bg-white border border-ink/5 rounded-3xl p-8">
            <span className="text-xs font-mono font-bold tracking-widest text-ink/50 uppercase">
              Inside One Forward Pass
            </span>
            <div className="flex flex-wrap items-center gap-3 mt-6 text-sm font-medium text-ink">
              <span className="px-4 py-2 border border-ink/10 rounded-full bg-cream">Tokenizer</span>
              <span className="text-coral">→</span>
              <span className="px-4 py-2 border border-ink/10 rounded-full bg-cream">Embeddings</span>
              <span className="text-coral">→</span>
              <span className="px-4 py-2 border border-ink/10 rounded-full bg-cream">ALiBi attention</span>
              <span className="text-coral">→</span>
              <span className="px-5 py-2.5 bg-coral text-white rounded-full flex items-center gap-2 shadow-sm">
                <Cpu size={16} /> 96 × transformer blocks
              </span>
              <span className="text-coral">→</span>
              <span className="px-4 py-2 border border-ink/10 rounded-full bg-cream">LM head</span>
              <span className="text-coral">→</span>
              <span className="px-4 py-2 border border-ink/10 rounded-full bg-cream">Softmax</span>
              <span className="text-coral">→</span>
              <span className="px-4 py-2 border border-ink/10 rounded-full bg-cream">Next token</span>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 mt-6 text-xs font-mono font-semibold text-ink/50">
              <span>DECODER-ONLY TRANSFORMER</span>
              <span>46 NATURAL LANGUAGES</span>
              <span>13 PROGRAMMING LANGUAGES</span>
              <span>128K CONTEXT WINDOW</span>
              <span>2.1T DOMAIN TOKENS</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Use Cases Section ===== */}
      <section id="use-cases" className="py-24 px-6 border-t border-ink/10 relative z-20">
        <div className="max-w-7xl mx-auto">
          <span className="kicker">Dual Focus</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-800 text-ink mt-2 mb-12">
            Two domains, <em className="text-coral">zero compromise.</em>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education Case */}
            <div className="bg-white border border-ink/5 rounded-3xl p-6 md:p-8 hover:shadow-md-soft transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display font-800 text-ink mb-6">Education</h3>
                <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-ink/5 shadow-sm-soft mb-6">
                  <img
                    src="/edu_shot.png"
                    alt="AI Math and Science Tutoring Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4 text-sm font-medium text-ink/70">
                  <div className="flex gap-2">
                    <span className="text-coral font-bold">→</span>
                    <span>Socratic tutoring chat adapts instantly to student cognitive misconceptions.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-coral font-bold">→</span>
                    <span>Curriculum-aligned item generation, scoring rubrics, and lesson planning.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-coral font-bold">→</span>
                    <span>Interactive exam prep with step-level cognitive reasoning feedback.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Healthcare Case */}
            <div className="bg-white border border-ink/5 rounded-3xl p-6 md:p-8 hover:shadow-md-soft transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display font-800 text-ink mb-6">Healthcare</h3>
                <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-ink/5 shadow-sm-soft mb-6">
                  <img
                    src="/clinical_shot.png"
                    alt="AI Clinical Notes SOAP Generator Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4 text-sm font-medium text-ink/70">
                  <div className="flex gap-2">
                    <span className="text-coral font-bold">→</span>
                    <span>Automated clinical documentation SOAP drafting mapped with guidelines.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-coral font-bold">→</span>
                    <span>Medical training, exam prep, and USMLE case walkthrough diagnostics.</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-coral font-bold">→</span>
                    <span>Patient-facing condition translation with reading level parameters.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Compliance & Safety Section ===== */}
      <section id="safety" className="py-24 px-6 border-t border-ink/10 bg-cream-50 relative z-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="kicker">Safety &amp; Compliance</span>
            <h2 className="text-3xl md:text-4xl font-display font-800 text-ink mt-2 mb-6">
              Compliance is the <em className="text-coral">floor.</em>
            </h2>
            <div className="flex flex-wrap gap-2.5 mb-8">
              <span className="px-3.5 py-1.5 bg-coral/10 text-coral border border-coral/20 rounded-full font-mono text-xs font-bold">MIT License</span>
              <span className="px-3.5 py-1.5 border border-ink/10 rounded-full font-mono text-xs font-bold text-ink/75 bg-white">HIPAA + BAA</span>
              <span className="px-3.5 py-1.5 border border-ink/10 rounded-full font-mono text-xs font-bold text-ink/75 bg-white">FERPA Compliant</span>
              <span className="px-3.5 py-1.5 border border-ink/10 rounded-full font-mono text-xs font-bold text-ink/75 bg-white">SOC 2 Type II</span>
              <span className="px-3.5 py-1.5 border border-ink/10 rounded-full font-mono text-xs font-bold text-ink/75 bg-white">VPC / On-Prem Deploy</span>
            </div>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed">
              Weights and pretraining codes are released under MIT license — fully open to inspect, audit, and host within your secure private clouds. Protected Health Information (PHI) and student records are strictly isolated and are never retained or fed back into training pipelines. Every release contains detailed harm evaluation logs, tenant-level isolation boundaries, and full audit logs.
            </p>
          </div>

          <div>
            <span className="kicker">Proven Outcomes</span>
            <h2 className="text-3xl md:text-4xl font-display font-800 text-ink mt-2 mb-8">
              Field <em className="text-coral">results.</em>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-baseline border-b border-ink/5 pb-4">
                <span className="text-3xl md:text-4xl font-display font-850 text-coral font-bold min-w-[100px]">+18%</span>
                <p className="text-sm font-semibold text-ink/70">Exam pass-rate increase across student cohort pilots.</p>
              </div>
              <div className="flex gap-4 items-baseline border-b border-ink/5 pb-4">
                <span className="text-3xl md:text-4xl font-display font-850 text-coral font-bold min-w-[100px]">-41%</span>
                <p className="text-sm font-semibold text-ink/70">Reduction in clinical documentation times in pilot medical deployments.</p>
              </div>
              <div className="flex gap-4 items-baseline">
                <span className="text-3xl md:text-4xl font-display font-850 text-coral font-bold min-w-[100px]">96%</span>
                <p className="text-sm font-semibold text-ink/70">Citation accuracy on search-grounded clinical responses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Research & FAQ Section ===== */}
      <section id="faq" className="py-24 px-6 border-t border-ink/10 relative z-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <span className="kicker">Academic Publications</span>
            <h3 className="text-3xl font-display font-800 text-ink mt-2 mb-8">Research Papers</h3>
            <div className="space-y-4">
              {[
                { title: 'PrepzoLM: A 120B Domain-Specialized Language Model' },
                { title: 'Curriculum-Grounded Retrieval for Tutoring Systems' },
                { title: 'Safety Evaluation of Clinical LLM Assistants' }
              ].map((paper, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-ink/15">
                  <span className="font-semibold text-sm text-ink">{paper.title}</span>
                  <Link to="/contact?subject=Research Paper Request" className="text-xs font-bold text-coral flex items-center gap-1 hover:underline">
                    Request PDF ↗
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="kicker">Clarifications</span>
            <h3 className="text-3xl font-display font-800 text-ink mt-2 mb-8">Frequently Asked</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-ink mb-2">Is it a fine-tune of an open model?</h4>
                <p className="text-xs md:text-sm text-ink/60 leading-relaxed">
                  No. PrepzoLM is pretrained from scratch on domain-specific clinical and pedagogical data mixtures. The precise mixture ratios are published in the technical report.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-ink mb-2">Can we run it in our VPC or on-prem?</h4>
                <p className="text-xs md:text-sm text-ink/60 leading-relaxed">
                  Yes. We offer fully-managed cloud instances, dedicated secure servers, or direct weights deployment for strict security boundaries.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-ink mb-2">How are hallucinations handled clinically?</h4>
                <p className="text-xs md:text-sm text-ink/60 leading-relaxed">
                  Rigorous search and citation requirements ensure the model abstains or flags responses that are not explicitly attributable to provided patient charts or medical reference documents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer Call-to-Action ===== */}
      <section className="py-28 px-6 bg-gradient-to-br from-ink to-ink-3 text-paper relative z-20 text-center">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-coral/20 to-transparent" />
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-display font-800 mb-6 leading-tight tracking-tight">
            Read the <em className="text-coral">receipts.</em>
          </h2>
          <p className="text-base sm:text-lg text-paper-2/70 mb-10 max-w-xl mx-auto">
            Every claim and evaluation score published is fully reproducible.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="bg-white text-ink hover:bg-paper-2 rounded-full font-semibold px-8 py-4 flex items-center gap-2 transition-all shadow-lg active:scale-95"
            >
              Talk to the team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
