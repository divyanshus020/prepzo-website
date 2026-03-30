import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Eye, Users, TrendingDown } from 'lucide-react'

const problems = [
  {
    icon: <Users size={24} />,
    title: 'Students — The Preparation Gap',
    stat: '70–80%',
    statLabel: 'fail early interview rounds',
    desc: 'Most students experience their very first interview during actual campus placements. They have zero realistic practice, no personalized feedback, and no visibility into their own skill gaps.',
    color: 'from-rose-500 to-red-400',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
  },
  {
    icon: <Eye size={24} />,
    title: 'Universities — The Analytics Black Hole',
    stat: '0',
    statLabel: 'real-time readiness data',
    desc: 'Placement cells operate completely blind. They cannot track student readiness, identify skill weaknesses, or measure improvement across batches — until it\'s too late.',
    color: 'from-amber-500 to-orange-400',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: <TrendingDown size={24} />,
    title: 'Recruiters — The Hiring Drag',
    stat: '50–100',
    statLabel: 'interviews to hire just 1–2',
    desc: 'Massive inefficiency in talent discovery. Companies waste enormous time and resources interviewing unprepared candidates, degrading the quality of campus hiring overall.',
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
            India's Employability{' '}
            <span className="gradient-text">Paradox</span>
          </h2>
          <p className="reveal text-lg text-gray-500 max-w-2xl mx-auto font-body leading-relaxed">
            5 million graduates enter the workforce every year. Only ~45% are considered employable. The system is broken — and it affects everyone in the chain.
          </p>
        </div>

        {/* Big stat */}
        <div className="reveal mb-16">
          <div className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-primary-700 to-primary-900 p-px primary-glow">
            <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-3xl p-10 text-center text-white">
              <div className="grid grid-cols-3 gap-6">
                {[
                  { n: '5M', l: 'Graduates Enter' },
                  { n: '~45%', l: 'Are Employable' },
                  { n: '70–80%', l: 'Fail Early Rounds' },
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
            Current tools like <span className="text-gray-600 font-medium">PrepInsta, InterviewBit</span> offer static content — no AI simulation, no institutional layer, no real feedback loop.{' '}
            <span className="text-primary-600 font-semibold">The gap is systemic.</span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
    </section>
  )
}
