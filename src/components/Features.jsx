import { useEffect, useRef } from 'react'
import { CheckCircle, X } from 'lucide-react'

const features = [
  { name: 'AI Interview Simulation', prepzo: true, others: false },
  { name: 'Placement Analytics Dashboard', prepzo: true, others: 'partial' },
  { name: 'Coding Interview Environment', prepzo: true, others: false },
  { name: 'Resume Builder & Analyzer', prepzo: true, others: 'partial' },
  { name: 'Employer / Recruiter Integration', prepzo: true, others: false },
  { name: 'University-Level Cohort Insights', prepzo: true, others: false },
  { name: 'Personalized Improvement Roadmap', prepzo: true, others: false },
  { name: 'Placement Readiness Score', prepzo: true, others: false },
]

const metrics = [
  { value: '85+', label: 'Avg. Readiness Score', sublabel: 'achieved by active users' },
  { value: '3x', label: 'Faster Interview Prep', sublabel: 'vs. traditional coaching' },
  { value: '45%', label: 'More Employable', sublabel: 'target placement rate' },
  { value: '₹500', label: 'Per Student/Year', sublabel: 'affordable for all colleges' },
]

export default function Features() {
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
    <section id="features" ref={ref} className="py-28 mesh-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="reveal flex justify-center mb-4">
            <span className="tag">Why Prepzo</span>
          </div>
          <h2 className="reveal text-4xl md:text-5xl font-display font-800 text-gray-900 leading-tight mb-5">
            The Only Solution Combining{' '}
            <span className="gradient-text">High-Fidelity AI</span>
            <br />with Ecosystem Depth
          </h2>
          <p className="reveal text-lg text-gray-500 max-w-xl mx-auto font-body">
            Competitors solve one piece. Prepzo solves the entire placement infrastructure — for students, universities, and recruiters.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Comparison table */}
          <div className="reveal">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              {/* Table header */}
              <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-100 px-6 py-4">
                <span className="text-sm font-display font-700 text-gray-500">Feature</span>
                <span className="text-sm font-display font-700 text-purple-600 text-center">Prepzo</span>
                <span className="text-sm font-display font-700 text-gray-400 text-center">Others</span>
              </div>
              {features.map((f, i) => (
                <div key={i} className={`grid grid-cols-3 px-6 py-4 border-b border-gray-50 ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
                  <span className="text-sm text-gray-600 font-body">{f.name}</span>
                  <div className="flex justify-center">
                    <CheckCircle size={18} className="text-purple-500" />
                  </div>
                  <div className="flex justify-center">
                    {f.others === true ? (
                      <CheckCircle size={18} className="text-green-400" />
                    ) : f.others === 'partial' ? (
                      <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                    ) : (
                      <X size={18} className="text-rose-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center font-body">
              Compared to HireVue, InterviewBit, PrepInsta & Superset
            </p>
          </div>

          {/* Metrics */}
          <div className="space-y-6">
            <div className="reveal">
              <h3 className="font-display font-700 text-xl text-gray-900 mb-2">Built for Impact at Scale</h3>
              <p className="text-gray-500 text-sm font-body mb-6">Prepzo doesn't just prepare students — it transforms placement outcomes for entire institutions.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m, i) => (
                <div key={i} className="reveal stat-card bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <div className="text-3xl font-display font-800 gradient-text mb-1">{m.value}</div>
                  <div className="text-sm font-display font-600 text-gray-800 mb-1">{m.label}</div>
                  <div className="text-xs text-gray-400 font-body">{m.sublabel}</div>
                </div>
              ))}
            </div>

            {/* Flywheel callout */}
            <div className="reveal gradient-border">
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-display font-700 text-gray-900 mb-2">🔄 The Intelligence Flywheel</h4>
                <p className="text-gray-500 text-sm font-body leading-relaxed">
                  Every interview session generates data. More students → more data → better AI → better insights → more universities → more students. Over time, Prepzo becomes the most defensible employability intelligence dataset in Indian higher education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
