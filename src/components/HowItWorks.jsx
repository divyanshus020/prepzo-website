import { useEffect, useRef } from 'react'
import { LogIn, FileText, Brain, BarChart2, Map, Trophy } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: <LogIn size={22} />,
    title: 'Cohort Onboarding',
    desc: 'Students sign in through the institution\'s Prepzo portal — single sign-on with TPO-managed access. Cohorts are configured by department and year.',
    color: 'from-orange-600 to-orange-500',
  },
  {
    step: '02',
    icon: <FileText size={22} />,
    title: 'Profile Intelligence',
    desc: 'Resume, target role, and academic record are parsed into a baseline profile — what the student claims to know, what their cohort typically struggles with.',
    color: 'from-primary-500 to-primary-400',
  },
  {
    step: '03',
    icon: <Brain size={22} />,
    title: 'Live Skill Session',
    desc: 'Prepzo AI runs an adaptive, voice-first skill assessment. Reasoning, communication, structure, domain depth — all measured in one session.',
    color: 'from-primary-500 to-orange-400',
  },
  {
    step: '04',
    icon: <BarChart2 size={22} />,
    title: 'Cognitive Mapping',
    desc: 'Every signal is graded against a 14-dimension rubric and stitched into a per-student brain map — the moment an answer drifted, the concept that broke down.',
    color: 'from-orange-500 to-primary-500',
  },
  {
    step: '05',
    icon: <Map size={22} />,
    title: 'Personalised Roadmap',
    desc: 'Prepzo returns a precise improvement plan — drills, micro-lessons, and a re-test target — tied to the exact gaps the map exposed.',
    color: 'from-primary-600 to-primary-500',
  },
  {
    step: '06',
    icon: <Trophy size={22} />,
    title: 'Readiness Profile',
    desc: 'Track readiness across the semester. The TPO cell sees cohort-level deltas; the student sees a profile they can stand behind when the season starts.',
    color: 'from-primary-600 to-primary-600',
  },
]

export default function HowItWorks() {
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
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" ref={ref} className="py-28 bg-gray-50/60 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(124,58,237,0.05) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="reveal flex justify-center mb-4">
            <span className="tag">Process</span>
          </div>
          <h2 className="reveal text-4xl md:text-5xl font-display font-800 text-gray-900 leading-tight mb-5">
            From login to a{' '}
            <span className="gradient-text">brain-mapped readiness profile</span>
            {' '}in six steps
          </h2>
          <p className="reveal text-lg text-gray-500 max-w-xl mx-auto font-body">
            One continuous loop — adaptive per student, visible to the TPO cell, running all semester.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Connecting line */}
          <div className="absolute top-16 left-0 right-0 hidden lg:block pointer-events-none">
            <div className="h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent mx-16" />
          </div>

          {steps.map((s, i) => (
            <div
              key={i}
              className="reveal relative bg-white rounded-2xl border border-gray-100 p-7 shadow-sm feature-card hover:border-primary-100"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Step number */}
              <div className="flex items-start justify-between mb-5">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-md`}>
                  {s.icon}
                </div>
                <span className="text-4xl font-display font-800 text-gray-100 leading-none">{s.step}</span>
              </div>
              <h3 className="font-display font-700 text-gray-900 text-base mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-body">{s.desc}</p>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-3 z-10">
                  <div className="w-6 h-6 rounded-full bg-primary-100 border border-primary-200 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Loop indicator */}
        <div className="reveal mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-primary-50 border border-primary-100 rounded-full px-6 py-3">
            <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-primary-700 text-sm font-display font-600">
              The loop repeats every cycle — the map sharpens, the gaps shrink, the readiness profile compounds.
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
    </section>
  )
}
