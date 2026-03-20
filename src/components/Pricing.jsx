import { useEffect, useRef } from 'react'
import { Check, Zap, Building2, Briefcase } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    icon: <Zap size={20} />,
    price: '₹500',
    period: 'per student / year',
    description: 'Perfect for pilot programs and Tier-2/3 universities getting started.',
    color: 'from-gray-100 to-gray-50',
    iconBg: 'bg-gray-800',
    cta: 'Start Pilot',
    ctaStyle: 'btn-outline',
    features: [
      'AI Mock Interviews (10/student)',
      'Basic performance analytics',
      'Skill gap reports',
      'Email support',
      'Up to 500 students',
    ],
    highlight: false,
  },
  {
    name: 'University',
    icon: <Building2 size={20} />,
    price: '₹1,000',
    period: 'per student / year',
    description: 'Full-featured placement OS for serious institutions aiming for top placement rates.',
    color: 'from-purple-600 to-violet-700',
    iconBg: 'bg-white/20',
    cta: 'Get Started',
    ctaStyle: 'btn-white',
    features: [
      'Unlimited AI Mock Interviews',
      'Department-wide analytics dashboard',
      'Cohort skill gap analysis',
      'Resume Intelligence Engine',
      'Personalized improvement roadmaps',
      'Placement Readiness Scoring',
      'Recruiter access portal',
      'Dedicated account manager',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    icon: <Briefcase size={20} />,
    price: 'Custom',
    period: 'multi-year SaaS contract',
    description: 'For large universities, consortiums, and state-level educational bodies.',
    color: 'from-violet-50 to-purple-50',
    iconBg: 'bg-purple-700',
    cta: 'Contact Sales',
    ctaStyle: 'btn-outline',
    features: [
      'Everything in University',
      'Custom AI model fine-tuning',
      'White-label options',
      'Multi-campus management',
      'API & LMS integrations',
      'Priority SLA support',
    ],
    highlight: false,
  },
]

const milestones = [
  { label: '1 University', revenue: '₹20 Lakh', universities: 1, width: '10%' },
  { label: '10 Universities', revenue: '₹2 Crore', universities: 10, width: '25%' },
  { label: '50 Universities', revenue: '₹10 Crore', universities: 50, width: '55%' },
  { label: '100 Universities', revenue: '₹20 Crore', universities: 100, width: '100%' },
]

export default function Pricing() {
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
    <section id="pricing" ref={ref} className="py-28 bg-gray-50/60 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="reveal flex justify-center mb-4">
            <span className="tag">Pricing</span>
          </div>
          <h2 className="reveal text-4xl md:text-5xl font-display font-800 text-gray-900 leading-tight mb-5">
            Affordable for Every{' '}
            <span className="gradient-text">Institution</span>
          </h2>
          <p className="reveal text-lg text-gray-500 max-w-xl mx-auto font-body">
            Low cost of entry. High recurring value. Revenue scales rapidly while inference costs grow slowly.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`reveal rounded-2xl overflow-hidden ${plan.highlight ? 'purple-glow scale-105' : 'border border-gray-100 bg-white shadow-sm'}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={`${plan.highlight ? `bg-gradient-to-br ${plan.color} text-white p-8` : `p-8`}`}>
                <div className={`w-10 h-10 rounded-xl ${plan.iconBg} flex items-center justify-center mb-4 ${plan.highlight ? 'text-white' : 'text-white bg-gray-800'}`}>
                  {plan.icon}
                </div>
                <h3 className={`font-display font-700 text-xl mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.highlight ? 'text-purple-200' : 'text-gray-400'} font-body`}>{plan.description}</p>
                <div className="mb-6">
                  <span className={`text-4xl font-display font-800 ${plan.highlight ? 'text-white' : 'gradient-text'}`}>{plan.price}</span>
                  <span className={`text-sm ml-2 ${plan.highlight ? 'text-purple-200' : 'text-gray-400'} font-body`}>{plan.period}</span>
                </div>
                <a href="#contact" className={`block text-center py-3 px-6 rounded-full font-display font-600 text-sm transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-white text-purple-700 hover:bg-purple-50'
                    : 'border-2 border-purple-300 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600'
                }`}>
                  {plan.cta}
                </a>
              </div>
              <div className={`px-8 py-6 ${plan.highlight ? 'bg-purple-800/20 backdrop-blur' : ''}`}>
                <ul className="space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check size={15} className={`mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-purple-300' : 'text-purple-500'}`} />
                      <span className={`text-sm font-body ${plan.highlight ? 'text-purple-100' : 'text-gray-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Revenue escalator */}
        <div className="reveal">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h3 className="font-display font-700 text-xl text-gray-900 mb-2 text-center">Revenue Escalator</h3>
            <p className="text-gray-400 text-sm text-center font-body mb-8">As universities scale, revenue grows exponentially while costs stay lean.</p>
            <div className="space-y-4">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-sm font-body text-gray-500 w-28 flex-shrink-0">{m.label}</span>
                  <div className="flex-1 h-8 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-600 to-violet-400 flex items-center px-4 transition-all duration-1000"
                      style={{ width: m.width }}
                    >
                      <span className="text-white text-xs font-display font-700 whitespace-nowrap">{m.revenue}/yr</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
    </section>
  )
}
