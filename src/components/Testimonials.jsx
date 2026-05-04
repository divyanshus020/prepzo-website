import { useEffect, useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Final Year CSE Student',
    college: 'LNCT Bhopal',
    avatar: 'PS',
    rating: 5,
    text: 'I thought I was sharp at structure — Prepzo\'s map showed me exactly where my answers drift. Eight sessions in, my readiness score jumped 22 points and I finally know what to fix next.',
    color: 'from-orange-500 to-orange-400',
  },
  {
    name: 'Dr. Rajan Mehta',
    role: 'Placement Cell Director',
    college: 'Amity University Jaipur',
    avatar: 'RM',
    rating: 5,
    text: 'For the first time, I can see which students are ready and which are not — weeks before the placement season. Prepzo\'s cohort heatmaps changed how we run our entire program.',
    color: 'from-primary-500 to-primary-500',
  },
  {
    name: 'Prof. Anjali Kapoor',
    role: 'Head of TPO Cell',
    college: 'JECRC Jaipur',
    avatar: 'AK',
    rating: 5,
    text: 'The department-level skill heatmap is the single most useful artefact we\'ve added in five years. We catch weak cohorts in week three, not week thirty.',
    color: 'from-primary-600 to-primary-500',
  },
  {
    name: 'Sneha Patel',
    role: 'MBA Student',
    college: 'JECRC Jaipur',
    avatar: 'SP',
    rating: 5,
    text: 'The communication audit is incredible. I never realised how many filler words I used until Prepzo showed me the data. My confidence walking into anything is completely different now.',
    color: 'from-primary-600 to-primary-400',
  },
]

const stats = [
  { value: '43M+', label: 'Students in TAM', icon: '🎓' },
  { value: '42K+', label: 'Target Colleges', icon: '🏛️' },
  { value: '₹29B', label: 'EdTech Market by 2030', icon: '📈' },
  { value: '4.1x', label: 'Market Growth by 2030', icon: '🚀' },
]

export default function Testimonials() {
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
    <section id="testimonials" ref={ref} className="py-28 mesh-bg relative">
      <div className="max-w-7xl mx-auto px-6">



        {/* Testimonials header */}
        <div className="text-center mb-16">
          <div className="reveal flex justify-center mb-4">
            <span className="tag">
              <Star size={13} fill="currentColor" />
              Testimonials
            </span>
          </div>
          <h2 className="reveal text-4xl md:text-5xl font-display font-800 text-gray-900 leading-tight mb-5">
            Loved by Students,{' '}
            <span className="gradient-text">Trusted by TPO Cells</span>
          </h2>
          <p className="reveal text-lg text-gray-500 max-w-xl mx-auto font-body">
            Early users across students, placement officers, and university leaders — all seeing the same thing: a real map of where each cohort actually stands.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal feature-card bg-white rounded-2xl border border-gray-100 p-7 shadow-sm"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white mb-5 shadow-md`}>
                <Quote size={18} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400" fill="#fbbf24" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed font-body mb-6 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-display font-700 flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-display font-700 text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs font-body">{t.role} · {t.college}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
