import { useEffect, useRef } from 'react'
import { LogIn, FileText, Bot, BarChart2, Map, Trophy } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: <LogIn size={22} />,
    title: 'Platform Onboarding',
    desc: 'Student logs in through their university\'s Prepzo portal. Seamless single-sign-on with institutional credentials.',
    color: 'from-purple-600 to-violet-500',
  },
  {
    step: '02',
    icon: <FileText size={22} />,
    title: 'Resume Intelligence',
    desc: 'Upload your resume. Our Resume Intelligence Engine parses your background, skills, and target role to configure a personalized interview profile.',
    color: 'from-violet-500 to-purple-400',
  },
  {
    step: '03',
    icon: <Bot size={22} />,
    title: 'AI Mock Interview',
    desc: 'Face a hyper-realistic AI interviewer. Technical rounds, behavioral questions, and communication audits — all calibrated to your target company type.',
    color: 'from-purple-500 to-pink-400',
  },
  {
    step: '04',
    icon: <BarChart2 size={22} />,
    title: 'Algorithmic Evaluation',
    desc: 'Every response is evaluated across communication clarity, technical accuracy, problem-solving ability, and confidence level. Instant structured feedback report generated.',
    color: 'from-fuchsia-500 to-purple-500',
  },
  {
    step: '05',
    icon: <Map size={22} />,
    title: 'Personalized Roadmap',
    desc: 'Prepzo generates a step-by-step improvement roadmap specific to your weak areas. Know exactly what to fix and how to fix it.',
    color: 'from-violet-600 to-indigo-500',
  },
  {
    step: '06',
    icon: <Trophy size={22} />,
    title: 'Placement Ready',
    desc: 'Hit your Placement Readiness Score target. Get certified as job-ready and become visible to recruiters on the Prepzo talent network.',
    color: 'from-purple-600 to-violet-600',
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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(124,58,237,0.05) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="reveal flex justify-center mb-4">
            <span className="tag">Process</span>
          </div>
          <h2 className="reveal text-4xl md:text-5xl font-display font-800 text-gray-900 leading-tight mb-5">
            From Login to{' '}
            <span className="gradient-text">Job-Ready</span>
            {' '}in 6 Steps
          </h2>
          <p className="reveal text-lg text-gray-500 max-w-xl mx-auto font-body">
            A continuous readiness loop that dynamically adjusts to each student — all semester long.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Connecting line */}
          <div className="absolute top-16 left-0 right-0 hidden lg:block pointer-events-none">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent mx-16" />
          </div>

          {steps.map((s, i) => (
            <div
              key={i}
              className="reveal relative bg-white rounded-2xl border border-gray-100 p-7 shadow-sm feature-card hover:border-purple-100"
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
                  <div className="w-6 h-6 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Loop indicator */}
        <div className="reveal mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-purple-50 border border-purple-100 rounded-full px-6 py-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-purple-700 text-sm font-display font-600">
              This loop repeats continuously — preparation never stops until placement.
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
    </section>
  )
}
