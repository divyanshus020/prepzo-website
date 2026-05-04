import { useEffect, useRef } from 'react'
import { Cpu, BarChart3, Target, Brain, Zap, Shield } from 'lucide-react'

const solutions = [
  {
    icon: <Brain size={22} />,
    title: 'Brain-Mapping Engine',
    desc: 'Prepzo AI builds a per-student cognitive map across reasoning, structure, communication, and domain knowledge — refreshed every session, not once a semester.',
    color: 'from-orange-600 to-orange-500',
  },
  {
    icon: <Target size={22} />,
    title: 'Precision Skill Analyser',
    desc: 'Every session produces a structured readiness profile: where the student is sharp, where they drift, and the exact concept that broke down — backed by a 14-dimension rubric.',
    color: 'from-primary-500 to-orange-400',
  },
  {
    icon: <BarChart3 size={22} />,
    title: 'TPO Command Centre',
    desc: 'Training & Placement Officers get a department-wide dashboard — cohort heatmaps, weekly delta on readiness, and the names that need attention right now.',
    color: 'from-primary-500 to-primary-400',
  },
  {
    icon: <Cpu size={22} />,
    title: 'Prepzo AI · 70B',
    desc: 'Our own large-language model — fine-tuned for cognitive assessment, not chat. Built for low-latency, structured grading, and signals universities can actually trust.',
    color: 'from-red-500 to-primary-500',
  },
  {
    icon: <Zap size={22} />,
    title: 'Continuous Readiness Loop',
    desc: 'Preparation isn\'t a one-time event. Prepzo runs an adaptive loop — onboarding, mapping, drilling, re-mapping — that keeps every cohort improving all semester.',
    color: 'from-primary-600 to-primary-500',
  },
  {
    icon: <Shield size={22} />,
    title: 'Intelligence Flywheel',
    desc: 'Every session generates structured signal. Over time, Prepzo compounds into the most defensible per-student readiness dataset in Indian higher education.',
    color: 'from-primary-600 to-primary-600',
  },
]

export default function Solution() {
  const ref = useRef(null)

  useEffect(() => {
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
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="solution" ref={ref} className="py-28 mesh-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="reveal flex justify-center mb-4">
            <span className="tag">
              <Zap size={13} />
              The Solution
            </span>
          </div>
          <h2 className="reveal text-4xl md:text-5xl font-display font-800 text-gray-900 leading-tight mb-5">
            One platform.{' '}
            <span className="gradient-text">A precise mind-map per student.</span>
          </h2>
          <p className="reveal text-lg text-gray-500 max-w-2xl mx-auto font-body leading-relaxed">
            Prepzo AI replaces guesswork with signal — for the student, for the TPO cell, for the university. A flywheel that gets sharper every week.
          </p>
        </div>

        {/* Ecosystem diagram */}
        <div className="reveal mb-20">
          <div className="relative max-w-sm mx-auto h-64 flex items-center justify-center">
            {/* Center hub */}
            <div className="relative z-10 w-28 h-28 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 flex flex-col items-center justify-center text-white shadow-2xl primary-glow">
              <Zap size={28} fill="white" />
              <span className="text-xs font-display font-700 mt-1">Prepzo AI</span>
            </div>
            {/* Orbit rings */}
            <div className="orbit-ring absolute w-52 h-52 animate-spin-slow" />
            <div className="orbit-ring absolute w-72 h-72" style={{ animationDirection: 'reverse', animationDuration: '18s' }} />
            {/* Nodes */}
            {[
              { label: 'Students', pos: 'top-0 left-1/2 -translate-x-1/2', icon: '🎓' },
              { label: 'Universities', pos: 'bottom-4 right-4', icon: '🏛️' },
              { label: 'TPO Cells', pos: 'bottom-4 left-4', icon: '🧭' },
            ].map((node) => (
              <div key={node.label} className={`absolute ${node.pos} flex flex-col items-center gap-1 animate-float`}>
                <div className="w-12 h-12 rounded-xl glass border border-primary-200 flex items-center justify-center text-xl shadow-md">
                  {node.icon}
                </div>
                <span className="text-xs font-display font-600 text-primary-700">{node.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="reveal feature-card rounded-2xl bg-white border border-gray-100 p-7 shadow-sm hover:border-primary-100"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white mb-5 shadow-md`}>
                {s.icon}
              </div>
              <h3 className="font-display font-700 text-gray-900 text-base mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-body">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
