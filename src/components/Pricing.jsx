import { useEffect, useRef } from 'react'
import { Check, Zap, Building2, Briefcase } from 'lucide-react'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Starter',
    icon: <Zap size={20} />,
    price: '₹500',
    period: 'per student / year',
    description: 'Perfect for pilot programs and Tier-2/3 universities getting started.',
    iconBg: 'bg-gray-800',
    features: [
      'AI Mock Interviews (10/student)',
      'Basic performance analytics',
      'Skill gap reports',
      'Resume ingestion',
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
    description: 'Full-featured placement OS for institutions serious about placement outcomes.',
    iconBg: 'bg-white/20',
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
    period: 'multi-year contract',
    description: 'For large universities, consortiums, and state-level educational bodies.',
    iconBg: 'bg-purple-700',
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

        <div className="text-center mb-20">
          <div className="reveal flex justify-center mb-4">
            <span className="tag">Pricing</span>
          </div>
          <h2 className="reveal text-4xl md:text-5xl font-display font-800 text-gray-900 leading-tight mb-5">
            Simple, Transparent{' '}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="reveal text-lg text-gray-500 max-w-xl mx-auto font-body">
            Affordable for every institution. No hidden fees, no lock-in surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`reveal rounded-2xl overflow-hidden ${plan.highlight ? 'purple-glow scale-[1.03]' : 'border border-gray-100 bg-white shadow-sm'}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={`${plan.highlight ? 'bg-gradient-to-br from-purple-600 to-violet-700 text-white p-8' : 'p-8'}`}>
                <div className={`w-10 h-10 rounded-xl ${plan.iconBg} flex items-center justify-center mb-4 text-white`}>
                  {plan.icon}
                </div>
                <h3 className={`font-display font-700 text-xl mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <p className={`text-sm mb-5 font-body ${plan.highlight ? 'text-purple-200' : 'text-gray-400'}`}>{plan.description}</p>
                <div className="mb-6">
                  <span className={`text-4xl font-display font-800 ${plan.highlight ? 'text-white' : 'gradient-text'}`}>{plan.price}</span>
                  <span className={`text-sm ml-2 font-body ${plan.highlight ? 'text-purple-200' : 'text-gray-400'}`}>{plan.period}</span>
                </div>
                <Link to="/contact" className={`block text-center py-3 px-6 rounded-full font-display font-600 text-sm transition-all duration-300 ${plan.highlight
                    ? 'bg-white text-purple-700 hover:bg-purple-50'
                    : 'border-2 border-purple-300 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600'
                  }`}>
                  Get Started
                </Link>
              </div>
              <div className={`px-8 py-7 ${plan.highlight ? 'bg-purple-50/80' : ''}`}>
                <ul className="space-y-4">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check size={16} className={`mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-purple-600' : 'text-purple-500'}`} />
                      <span className={`text-sm font-body ${plan.highlight ? 'text-gray-800 font-medium' : 'text-gray-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="reveal mt-12 text-center">
          <p className="text-gray-400 text-sm font-body">
            Not sure which plan? <Link to="/contact" className="text-purple-600 font-medium hover:underline">Talk to us</Link> — we'll help you find the right fit.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
    </section>
  )
}
