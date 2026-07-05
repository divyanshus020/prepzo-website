import { useEffect, useRef, useState, useCallback } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Kashish Sukhani',
    role: 'Engineering Student',
    college: 'placement aspirant',
    avatar: 'KS',
    rating: 5,
    tags: ['AI Mock Interview', 'Technical Round', 'Brain Mapping'],
    text: 'Prepzo feels like a personal career mentor available 24/7. The AI mock interviews and technical round prep showed me exactly where I was weak, and the cognitive brain mapping finally gave me a clear picture of my strengths and where I actually fit.',
    color: 'from-orange-500 to-orange-400',
  },
  {
    name: 'Divyansh Choudhary',
    role: 'Engineering Student',
    college: 'placement aspirant',
    avatar: 'DC',
    rating: 5,
    tags: ['AI Mock Interview', 'Career Insights'],
    text: 'The most effective prep platform I have used. The AI mock interviews boosted my confidence before real interviews, and the personalised insights bridged the gap between what college taught me and what companies actually expect.',
    color: 'from-primary-500 to-primary-500',
  },
  {
    name: 'Kusum Bohra',
    role: 'Engineering Student',
    college: 'placement aspirant',
    avatar: 'KB',
    rating: 5,
    tags: ['Cognitive Brain Mapping', 'Aptitude Testing'],
    text: 'The cognitive brain mapping was the standout for me — I had never seen my thinking mapped out that clearly. Paired with the aptitude testing, it made me far more confident about the roles I should be aiming for.',
    color: 'from-primary-600 to-primary-500',
  },
  {
    name: 'Kunal Mathur',
    role: 'Student',
    college: 'JIET Jodhpur',
    avatar: 'KM',
    rating: 5,
    tags: ['AI Co-pilot', 'Technical Round', 'Dashboard'],
    text: 'Prepzo has truly transformed the way I prepare for interviews. The AI co-pilot, technical modules and personalised insights helped me sharpen my communication and build real confidence. It feels like having a dedicated career mentor by your side.',
    color: 'from-primary-600 to-primary-400',
  },
  {
    name: 'Ketan',
    role: 'Engineering Student',
    college: 'job seeker',
    avatar: 'K',
    rating: 5,
    tags: ['AI Mock Interview', 'Aptitude Testing'],
    text: 'Realistic mock interviews, genuinely useful feedback, and personalised tips on what to improve. The platform is easy to use and helped me walk into interviews with confidence. Highly recommend it to any job seeker.',
    color: 'from-orange-500 to-orange-400',
  },
  {
    name: 'Gungun Sisodiya',
    role: 'Student',
    college: 'JIET Jodhpur',
    avatar: 'GS',
    rating: 5,
    tags: ['AI Mock Interview', 'Dashboard', 'GD Room'],
    text: 'Prepzo transformed the way I prepare. The AI mock interviews and GD room improved my communication more than anything else I tried, and the dashboard kept me honest about my progress. It feels like having a mentor right beside you.',
    color: 'from-primary-500 to-primary-500',
  },
  {
    name: 'Hansraj Singh',
    role: 'Engineering Student',
    college: 'placement aspirant',
    avatar: 'HS',
    rating: 5,
    tags: ['Full Suite', 'Easy to Use'],
    text: 'I used almost every feature — co-pilot, mock interviews, technical prep, brain mapping, aptitude and GD room. Everything is feasible and easy to use, and it all connects into one clear picture of where I stand.',
    color: 'from-primary-600 to-primary-500',
  },
  {
    name: 'Vishnu Jangid',
    role: 'Engineering Student',
    college: 'placement aspirant',
    avatar: 'VJ',
    rating: 5,
    tags: ['AI Co-pilot', 'AI Mock Interview', 'Technical Round'],
    text: 'The AI co-pilot and mock interviews are the real deal. The technical round prep felt exactly like the pressure of a live interview, so by the time I faced the actual panel, nothing caught me off guard.',
    color: 'from-primary-600 to-primary-400',
  },
  {
    name: 'Shimeeta Pidwa',
    role: 'Engineering Student',
    college: 'placement aspirant',
    avatar: 'SP',
    rating: 5,
    tags: ['AI Co-pilot', 'Dashboard', 'Brain Mapping'],
    text: 'Almost every part of Prepzo added something — the co-pilot, dashboard, brain mapping and aptitude testing worked together to show me a full view of myself as a candidate. I finally know what to work on next.',
    color: 'from-orange-500 to-orange-400',
  },
  {
    name: 'Arnav Kumar Gupta',
    role: 'Engineering Student',
    college: 'placement aspirant',
    avatar: 'AG',
    rating: 5,
    tags: ['AI Mock Interview', 'Aptitude', 'GD Room'],
    text: 'The mock interviews, aptitude tests and GD room together covered every round I was nervous about. My readiness went up fast and my confidence with it. Would absolutely use it again.',
    color: 'from-primary-500 to-primary-500',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = testimonials.length

  const go = useCallback((dir) => {
    setActive((p) => (p + dir + count) % count)
  }, [count])

  // Reveal-on-scroll for the header/frame
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

  // Autoplay
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setActive((p) => (p + 1) % count), 5500)
    return () => clearInterval(id)
  }, [paused, count])

  // Keyboard arrows
  const onKey = (e) => {
    if (e.key === 'ArrowLeft') go(-1)
    if (e.key === 'ArrowRight') go(1)
  }

  return (
    <section id="testimonials" ref={ref} className="py-28 mesh-bg relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal flex justify-center mb-4">
            <span className="tag">
              <Star size={13} fill="currentColor" />
              Testimonials
            </span>
          </div>
          <h2 className="reveal text-4xl md:text-5xl font-display font-800 text-gray-900 leading-tight mb-5">
            Loved by the students{' '}
            <span className="gradient-text">who actually used it.</span>
          </h2>
          <p className="reveal text-lg text-gray-500 max-w-xl mx-auto font-body">
            Real feedback from students preparing for placements and internships — on the mock interviews, brain mapping and insights that changed how they show up.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="reveal relative"
          role="region"
          aria-roledescription="carousel"
          aria-label="Student testimonials"
          tabIndex={0}
          onKeyDown={onKey}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Track */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-1" aria-hidden={i !== active}>
                  <div className="relative bg-white rounded-3xl border border-gray-100 shadow-[0_30px_80px_-40px_rgba(255,106,61,0.25)] px-8 py-10 md:px-14 md:py-14 overflow-hidden">
                    {/* Ghost quote mark */}
                    <Quote
                      size={140}
                      className="absolute -top-6 -right-4 text-primary-500/[0.06] rotate-180 pointer-events-none"
                      fill="currentColor"
                    />

                    {/* Stars */}
                    <div className="flex gap-1 mb-6 relative">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} size={18} className="text-amber-400" fill="#fbbf24" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="relative text-gray-800 text-xl md:text-[1.7rem] leading-relaxed font-display font-500 tracking-tight mb-9 max-w-3xl">
                      "{t.text}"
                    </p>

                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-2 mb-8 relative">
                      {t.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-body font-500 text-primary-600 bg-primary-500/[0.08] border border-primary-500/[0.15] px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4 relative">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-base font-display font-700 flex-shrink-0 shadow-lg`}>
                        {t.avatar}
                      </div>
                      <div>
                        <p className="font-display font-700 text-gray-900 text-base">{t.name}</p>
                        <p className="text-gray-400 text-sm font-body capitalize">{t.role} · {t.college}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center text-gray-700 hover:text-primary-600 hover:border-primary-500/30 hover:scale-105 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center text-gray-700 hover:text-primary-600 hover:border-primary-500/30 hover:scale-105 transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2.5 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-all duration-400 ${
                i === active
                  ? 'w-8 bg-gradient-to-r from-primary-500 to-orange-400'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
