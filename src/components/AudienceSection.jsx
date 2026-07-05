import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, GraduationCap, BookOpen, Building2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const audiences = [
  {
    key: 'students',
    tab: 'Students',
    icon: <GraduationCap size={20} />,
    title: 'A counsellor that actually knows you.',
    body: 'Most students never get honest, personalised guidance on what they are good at, where they need to grow, or which paths actually fit them. Prepzo shows you the career paths you are genuinely built for, including the ones no one ever told you about.',
    points: [
      'See your real strengths and your real gaps',
      'A personal plan tied to the exact concept that needs work',
      'Career direction you can stand behind',
    ],
    stat: { n: 'Free', l: 'Students never pay to use Prepzo' },
    color: 'from-orange-600 to-orange-500',
  },
  {
    key: 'teachers',
    tab: 'Teachers',
    icon: <BookOpen size={20} />,
    title: 'A real helping hand, every single week.',
    body: 'Teachers lose most of their week to admin, prep, and grading instead of teaching. Prepzo hands those hours back: lesson plans, assignments, and slides on a single command, plus a clear view of exactly where the class needs help.',
    points: [
      'Lesson plans, worksheets, and slides on one command',
      'See where the class is falling behind before a result shows it',
      'The hours lost to admin, given back',
    ],
    stat: { n: 'Hours', l: 'of weekly admin handed back to teaching' },
    color: 'from-primary-500 to-orange-400',
  },
  {
    key: 'institutions',
    tab: 'Institutions',
    icon: <Building2 size={20} />,
    title: 'Walk into the season knowing where everyone stands.',
    body: 'Placement and academic teams run season after season with no clear view of where each cohort stands. Prepzo gives you a department-wide command centre: cohort readiness, weekly movement, and the names that need attention right now.',
    points: [
      'Department-wide readiness dashboard',
      'Weekly movement, not a season-end surprise',
      'Single sign-on across departments and years',
    ],
    stat: { n: '35K+', l: 'students guided, Jodhpur' },
    color: 'from-primary-600 to-primary-500',
  },
]

export default function AudienceSection() {
  const [active, setActive] = useState(0)
  const a = audiences[active]

  return (
    <section id="audience" className="py-28 bg-gray-50/60 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-4"
          >
            <span className="tag">
              <Users size={13} />
              Who Prepzo is for
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-800 text-gray-900 leading-tight mb-5"
          >
            One platform.{' '}
            <span className="gradient-text">Three people it serves.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto font-body"
          >
            The spine stays the same. The emphasis shifts by who is standing in front of it.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {audiences.map((aud, i) => (
            <button
              key={aud.key}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-display font-600 border transition-all ${
                active === i
                  ? 'bg-primary-600 text-white border-primary-600 shadow-md'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-primary-200 hover:text-primary-600'
              }`}
            >
              {aud.icon}
              {aud.tab}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={a.key}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12"
            >
              {/* Left: copy */}
              <div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${a.color} flex items-center justify-center text-white mb-6 shadow-md`}>
                  {a.icon}
                </div>
                <h3 className="font-display font-800 text-2xl text-gray-900 mb-4 leading-tight">{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-body mb-6">{a.body}</p>
                <ul className="space-y-3">
                  {a.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${a.color} flex-shrink-0`} />
                      <span className="text-sm text-gray-600 font-body">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: stat card */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary-700 to-primary-900 p-px primary-glow">
                  <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl p-10 text-center text-white">
                    <span className="block text-5xl md:text-6xl font-display font-800 mb-3">{a.stat.n}</span>
                    <span className="text-primary-200 text-sm font-body">{a.stat.l}</span>
                  </div>
                </div>
                <Link to="/contact" className="btn-primary mt-6 text-sm">
                  Book a Demo
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
    </section>
  )
}
