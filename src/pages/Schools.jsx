import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Brain, Clock, Users } from 'lucide-react'
import Seo, { breadcrumbLd } from '../components/Seo'
import FeatureJourney from '../components/FeatureJourney'

const STATS = [
  { n: '120', unit: 'B', label: 'PARAMETER\nMODEL' },
  { n: '35', unit: 'K+', label: 'JODHPUR\nSTUDENTS' },
  { n: '100', unit: '%', label: 'FREE FOR\nSTUDENTS' },
]

const HEADING_WORDS = ['Every', 'Student', 'Guided']

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
}

export default function Schools() {
  useEffect(() => {
    window.scrollTo(0, 0)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('section[data-observe]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-cream pt-20 overflow-hidden font-body">
      <Seo
        title="Prepzo for Schools | AI Counsellor for Students & Teachers"
        description="Prepzo gives every school a personal AI counsellor for students and a real assistant for teachers — guidance and cognitive mapping built for the Indian classroom."
        path="/schools"
        keywords="AI for schools, AI counsellor for students, AI teacher assistant, school AI platform, cognitive mapping, student guidance India"
        jsonLd={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'For Schools', path: '/schools' },
        ])}
      />
      {/* Page H1 for SEO/a11y — the hero title is an animated word stack */}
      <h1 className="sr-only">Prepzo for Schools — an AI counsellor for every student and a helping hand for every teacher</h1>
      {/* Background blueprint grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Editorial Video Hero (stats + stacked heading) */}
      <section
        className="relative mx-3 sm:mx-4 rounded-3xl min-h-[calc(100vh-6rem)] overflow-hidden flex flex-col text-black"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4"
            type="video/mp4"
          />
        </video>

        {/* Light wash so black text stays legible over the video */}
        <div className="absolute inset-0 z-[5] pointer-events-none bg-gradient-to-b from-white/45 via-white/10 to-white/55" />

        {/* Content */}
        <div className="relative z-10 flex flex-col flex-1">

          {/* Stats row */}
          <div className="flex-1 flex items-center justify-end px-5 sm:px-8 md:px-12 py-8 md:py-0">
            <div className="flex gap-5 sm:gap-8 md:gap-10">
              {STATS.map((s, i) => (
                <motion.div key={s.label} custom={i + 2} variants={fadeUp} initial="hidden" animate="show" className="text-right">
                  <div className="font-semibold leading-none" style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)', fontWeight: 600 }}>
                    <span className="text-black">{s.n}</span>
                    <span style={{ fontSize: '0.5em', color: '#FF6A3D' }}>{s.unit}</span>
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase whitespace-pre-line leading-tight mt-1">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom section */}
          <div className="px-5 sm:px-8 md:px-12 pb-8 md:pb-12 flex flex-col gap-6 md:gap-12">

            {/* Row A: tagline + CTA */}
            <div className="flex items-center justify-between gap-4">
              <motion.p
                custom={5} variants={fadeUp} initial="hidden" animate="show"
                className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase max-w-[130px] sm:max-w-[160px] md:max-w-xs"
              >
                Guidance For<br />Every Student<br />Every Teacher
              </motion.p>
              <motion.div custom={6} variants={fadeUp} initial="hidden" animate="show">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-base sm:text-xl md:text-2xl font-semibold uppercase tracking-wide whitespace-nowrap hover:opacity-70 transition-opacity"
                  style={{ color: '#FF6A3D' }}
                >
                  Book a Demo
                  <ArrowUpRight className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]" />
                </Link>
              </motion.div>
            </div>

            {/* Row B: description + main heading */}
            <div className="flex items-end justify-between gap-3 sm:gap-4">
              <motion.p
                custom={7} variants={fadeUp} initial="hidden" animate="show"
                className="w-[120px] sm:w-[180px] md:w-[280px] shrink-0 text-[9px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-left md:text-right"
              >
                A personal AI counsellor and a real helping hand, built for the Indian school context
              </motion.p>
              <div className="text-right">
                {HEADING_WORDS.map((w, i) => (
                  <div key={w} className="overflow-hidden">
                    <motion.div
                      initial={{ y: '110%' }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.4 + i * 0.14, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="font-semibold uppercase text-black"
                      style={{ fontSize: 'clamp(2rem, 9vw, 9rem)', lineHeight: 0.88, fontWeight: 600 }}
                    >
                      {w}
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" data-observe className="py-24 px-6 bg-white/50 relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="reveal flex justify-center mb-4">
              <span className="tag">
                <Users size={13} />
                The Problem
              </span>
            </div>
            <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-display font-800 text-gray-900 leading-tight mb-5">
              The two quiet problems in <span className="gradient-text">every school</span>
            </h2>
            <p className="reveal text-lg text-gray-500 max-w-3xl mx-auto font-body leading-relaxed">
              After Class 10, students choose science, commerce, or arts with almost nothing to guide them, a decision that shapes the rest of their lives, made on instinct and pressure. And teachers, the people who should be teaching, lose most of their week to lesson prep, worksheets, and grading. Schools feel both problems, but neither is anyone's job to fix. That is what Prepzo is for.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Brain size={24} />,
                title: 'Students choose blind',
                desc: 'Stream and subject decisions get made without any honest sense of a student\'s own strengths, interests, or where they could actually thrive.',
                color: 'from-rose-500 to-red-400',
                bg: 'bg-rose-50',
                border: 'border-rose-100',
              },
              {
                icon: <Users size={24} />,
                title: 'Parents want guidance you cannot staff',
                desc: 'Real career counselling needs trained people most schools simply do not have, and parents increasingly expect it.',
                color: 'from-amber-500 to-orange-400',
                bg: 'bg-amber-50',
                border: 'border-amber-100',
              },
              {
                icon: <Clock size={24} />,
                title: 'Teachers are stretched thin',
                desc: 'Hours every week go to prep and grading instead of teaching, mentoring, and the students who need attention.',
                color: 'from-primary-500 to-orange-400',
                bg: 'bg-primary-50',
                border: 'border-primary-100',
              },
            ].map((p, i) => (
              <div
                key={i}
                className={`reveal p-8 rounded-3xl border ${p.border} ${p.bg} hover:shadow-xl transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white mb-6 shadow-md`}>
                  {p.icon}
                </div>
                <h3 className="font-display font-800 text-gray-900 text-lg mb-3 leading-tight">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-body">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section data-observe className="py-24 px-6 relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl md:text-4xl font-display font-800 text-gray-900 mb-4">
              Designed for classrooms, <span className="text-primary-600 italic font-display">built for results.</span>
            </h2>
            <p className="reveal text-gray-500 max-w-xl mx-auto font-body">
              A comprehensive toolkit for principals, teachers, parents, and students.
            </p>
          </div>

          <FeatureJourney />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary-900 to-primary-950 text-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-800 mb-6 leading-tight tracking-tight">
            Give your school guidance and support <br className="hidden md:block" />
            it could <span className="gradient-text">never staff for.</span>
          </h2>
          <p className="text-lg text-primary-200 mb-10 max-w-2xl mx-auto font-body leading-relaxed">
            Tell us about your school and we will show you what Prepzo looks like in your classrooms. Students never pay.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="bg-white text-black rounded-full font-medium px-8 py-4 flex items-center gap-2 hover:bg-gray-200 transition-all cursor-pointer shadow-lg active:scale-95"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
