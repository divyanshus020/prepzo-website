import { useEffect, useRef } from 'react'
import { Cpu, BarChart3, Target, Users, Zap, Shield } from 'lucide-react'

const solutions = [
  {
    icon: <Cpu size={22} />,
    title: 'AI Interview Simulation',
    desc: 'Hyper-realistic mock interviews tailored to each student\'s resume, target role, and industry expectations. Technical, behavioral, and communication dimensions — all in one session.',
    color: 'from-orange-600 to-orange-500',
  },
  {
    icon: <BarChart3 size={22} />,
    title: 'Placement Analytics Dashboard',
    desc: 'Universities get a department-wide command center. Track readiness scores, identify skill gaps by cohort, and act weeks before placement season — not days after.',
    color: 'from-primary-500 to-primary-400',
  },
  {
    icon: <Target size={22} />,
    title: 'Precision Skill Gap Analysis',
    desc: 'After every session, Prepzo\'s algorithm produces structured reports mapping exactly where students fall short — with a personalized improvement roadmap to close those gaps.',
    color: 'from-primary-500 to-orange-400',
  },
  {
    icon: <Users size={22} />,
    title: 'Recruiter Intelligence Layer',
    desc: 'Recruiters access a pre-screened, readiness-verified talent pool. Stop interviewing 100 candidates to hire 2 — discover job-ready graduates with data to back it up.',
    color: 'from-red-500 to-primary-500',
  },
  {
    icon: <Zap size={22} />,
    title: 'Continuous Readiness Loop',
    desc: 'Preparation isn\'t a one-time event. Prepzo creates an ongoing improvement cycle across 7 stages — from onboarding to placement readiness scoring — repeating all semester.',
    color: 'from-primary-600 to-primary-500',
  },
  {
    icon: <Shield size={22} />,
    title: 'Intelligence Flywheel',
    desc: 'Every interview generates structured data. Over time, Prepzo compounds into the most defensible employability intelligence dataset in Indian higher education.',
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
            Introducing the{' '}
            <span className="gradient-text">Prepzo Ecosystem</span>
          </h2>
          <p className="reveal text-lg text-gray-500 max-w-2xl mx-auto font-body leading-relaxed">
            One AI platform. Three stakeholders served. A data flywheel that makes the entire system smarter over time.
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
              { label: 'Recruiters', pos: 'bottom-4 left-4', icon: '💼' },
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
