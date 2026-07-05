import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AlertTriangle, GraduationCap, BookOpen, Building2 } from 'lucide-react'

const problems = [
  {
    icon: <GraduationCap size={24} />,
    title: 'Students, the guidance gap',
    stat: '5M+',
    statLabel: 'graduates enter workforce yearly',
    desc: 'Most students never get honest, personalised guidance on what they are good at, where they need to grow, or which paths actually fit them. They choose on instinct and pressure, not on data.',
    color: 'from-rose-500 to-red-400',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Teachers, the time drain',
    stat: '60%+',
    statLabel: 'of the week lost to admin',
    desc: 'Teachers spend too much of their week on admin, prep, and grading instead of teaching. The work that drew them in gets squeezed out by the work that did not.',
    color: 'from-amber-500 to-orange-400',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: <Building2 size={24} />,
    title: 'Institutions, the blind spot',
    stat: '~45%',
    statLabel: 'considered job-ready',
    desc: 'Universities and placement cells run season after season with no clear, semester-long view of where each cohort actually stands. By the time the gaps show, it is too late to act.',
    color: 'from-orange-500 to-orange-400',
    bg: 'bg-primary-50',
    border: 'border-primary-100',
  },
]

export default function Problem() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
            })
          }
        })
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="problem" ref={ref} className="py-28 bg-gray-50/60 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
      <motion.div
        style={{ y: bgY, backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(255,106,61,0.06) 0%, transparent 60%)' }}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="reveal flex justify-center mb-4">
            <span className="tag">
              <AlertTriangle size={13} />
              The Problem
            </span>
          </div>
          <h2 className="reveal text-4xl md:text-5xl font-display font-800 text-gray-900 leading-tight mb-5">
            India's{' '}
            <span className="gradient-text">guidance gap</span>
          </h2>
          <p className="reveal text-lg text-gray-500 max-w-2xl mx-auto font-body leading-relaxed">
            Every year, millions of students walk into the biggest decisions of their lives with nothing real to guide them. At the same time, teachers lose most of their week to admin instead of teaching. Guidance, at the scale this country needs, simply does not exist. That is the gap we are closing.
          </p>
        </div>

        {/* Stat strip */}
        <div className="reveal mb-16">
          <div className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-primary-700 to-primary-900 p-px primary-glow">
            <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-3xl p-10 text-center text-white">
              <div className="grid grid-cols-3 gap-6">
                {[
                  { n: '5M+', l: 'Graduates Each Year' },
                  { n: '~45%', l: 'Considered Job-Ready' },
                  { n: '0', l: 'Get Real Career Guidance' },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-3xl md:text-5xl font-display font-800 text-white mb-2">{s.n}</span>
                    <span className="text-primary-200 text-sm font-body">{s.l}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 h-2 rounded-full bg-primary-800/60 overflow-hidden">
                <div className="h-full w-[45%] bg-gradient-to-r from-primary-300 to-primary-200 rounded-full" />
              </div>
              <p className="text-primary-200 text-xs mt-2 font-body">Only ~45% considered job-ready</p>
            </div>
          </div>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`feature-card rounded-2xl border ${p.border} ${p.bg} p-7`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white mb-5 shadow-md`}>
                {p.icon}
              </div>
              <h3 className="font-display font-700 text-gray-900 text-lg mb-3 leading-tight">{p.title}</h3>
              <div className="mb-4">
                <span className="text-3xl font-display font-800 gradient-text">{p.stat}</span>
                <span className="text-gray-400 text-sm ml-2 font-body">{p.statLabel}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed font-body">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-400 font-body text-base max-w-xl mx-auto">
            Static prep portals offer the same drills to everyone. No per-student guidance, no teacher support, no institutional dashboard.{' '}
            <span className="text-primary-600 font-semibold">The gap is systemic. That is what Prepzo is for.</span>
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
    </section>
  )
}
