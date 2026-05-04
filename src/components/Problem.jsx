import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Eye, Users, Brain } from 'lucide-react'

const problems = [
  {
    icon: <Users size={24} />,
    title: 'Students — The Self-Awareness Gap',
    stat: '70–80%',
    statLabel: 'don\'t know their real weak areas',
    desc: 'Most students walk into their first big assessment with no honest signal on what they actually know vs. what they think they know. There\'s no map of their strengths, no map of their gaps.',
    color: 'from-rose-500 to-red-400',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
  },
  {
    icon: <Eye size={24} />,
    title: 'TPO Cells — The Analytics Black Hole',
    stat: '0',
    statLabel: 'cohort-level readiness data',
    desc: 'Training & Placement Officers run placement seasons blind. There\'s no semester-long view of cohort readiness, no skill heatmap by department, no way to act before the season starts.',
    color: 'from-amber-500 to-orange-400',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: <Brain size={24} />,
    title: 'The System — No Brain Map',
    stat: '~45%',
    statLabel: 'considered employable today',
    desc: 'Curriculum is generic. Practice is generic. Feedback is generic. What\'s missing is a per-student cognitive map — strengths, gaps, blind spots — that adapts every week and actually drives improvement.',
    color: 'from-orange-500 to-orange-400',
    bg: 'bg-primary-50',
    border: 'border-primary-100',
  },
]

export default function Problem() {
  const ref = useRef(null)

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
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(124,58,237,0.04) 0%, transparent 60%)' }} />

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
            India's Readiness{' '}
            <span className="gradient-text">Blind Spot</span>
          </h2>
          <p className="reveal text-lg text-gray-500 max-w-2xl mx-auto font-body leading-relaxed">
            5 million graduates enter the workforce every year. Only ~45% are considered employable. The reason is simple — nobody actually maps what each student knows, what they don't, and how it changes over a semester.
          </p>
        </div>

        {/* Big stat */}
        <div className="reveal mb-16">
          <div className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-primary-700 to-primary-900 p-px primary-glow">
            <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-3xl p-10 text-center text-white">
              <div className="grid grid-cols-3 gap-6">
                {[
                  { n: '5M', l: 'Graduates Each Year' },
                  { n: '~45%', l: 'Considered Job-Ready' },
                  { n: '0', l: 'Have a Skill Map' },
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
              <p className="text-primary-200 text-xs mt-2 font-body">Only 45% considered job-ready</p>
            </div>
          </div>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div key={i} className={`reveal feature-card rounded-2xl border ${p.border} ${p.bg} p-7`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white mb-5 shadow-md`}>
                {p.icon}
              </div>
              <h3 className="font-display font-700 text-gray-900 text-lg mb-3 leading-tight">{p.title}</h3>
              <div className="mb-4">
                <span className="text-3xl font-display font-800 gradient-text">{p.stat}</span>
                <span className="text-gray-400 text-sm ml-2 font-body">{p.statLabel}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed font-body">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="reveal mt-14 text-center">
          <p className="text-gray-400 font-body text-base max-w-xl mx-auto">
            Static prep portals offer the same drills to everyone — no per-student cognitive map, no institutional dashboard, no feedback loop.{' '}
            <span className="text-primary-600 font-semibold">The gap is systemic.</span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
    </section>
  )
}
