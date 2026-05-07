import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, ArrowRight, Brain, Target, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import founderAvatar from '../assets/Divyanshu.jpeg'
import CoAvatar from '../assets/Akshay.jpeg'
import Arjun from '../assets/Arjun.jpeg'
import JoshiPhoto from '../assets/Joshi.jpeg'
import GungunPhoto from '../assets/Gungun.jpeg'

const cofounders = [
  {
    name: 'Divyanshu Sharma',
    role: 'Co-founder & CTO',
    bio: 'I’m Divyanshu Sharma, founder of dcodecafe, passionate about building AI-driven products, automation systems, and scalable digital solutions. My work focuses on combining technology, innovation, and real-world problem solving across education, recruitment, and behavioral intelligence. I specialize in AI integrations, product development, and creating impactful platforms that improve how people learn, grow, and connect with opportunities.',
    accent: 'from-primary-600 to-orange-500',
    initials: 'DS',
    photo: founderAvatar,
    linkedin: 'https://www.linkedin.com/in/divyanshu-sharma-2a0060244/',
  },
  {
    name: 'Akshay Bhatia',
    role: 'Co-founder & CFO',
    bio: 'Highly skilled Chartered Accountant with deep expertise across financial reporting, auditing, direct and indirect taxation,M&A, and business advisory. Proven track record advising startups at the intersection of finance and growth - from incorporation and compliance through to fundraising support, financial modelling, and Virtual CFO engagements. Works closely with founders, VCs, and family offices as a trusted financial partner. Recently appointed as Special Invitee Member of the Digital Accounting and Assurance Committee, NIRC of ICAI for 2025-26.',
    accent: 'from-orange-500 to-primary-400',
    initials: 'AB',
    photo: CoAvatar,
    linkedin: 'https://www.linkedin.com/in/ca-akshay-bhatia-358bba28a?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  },
  {
    name: 'Arjun Singh Deep',
    role: 'Co-founder & CSO',
    bio: 'Arjun Singh Deep is Chief Strategy Officer at Prepzo. An ex-founder turned operator-investment professional, he’s built a consumer startup from scratch, advised deeptech founders through pre-seed rounds, and scouted deal flow across the UK and Indian venture ecosystems. At Prepzo, he leads partnerships, GTM, and capital strategy, translating the messy realities of building into a sharper edge for how the company sells, raises, and scales.',
    accent: 'from-primary-500 to-red-400',
    initials: 'AS',
    photo: Arjun,
    linkedin: 'https://www.linkedin.com/in/arjundeep9',
  },
]

const team = [
  {
    name: 'Sidharth Joshi',
    role: 'Program Manager',
    initials: 'SJ',
    bg: 'bg-primary-50',
    fg: 'text-primary-700',
    photo: JoshiPhoto,
  },
  {
    name: 'Damanpreet Singh',
    role: 'Tech',
    initials: 'DP',
    bg: 'bg-gray-900',
    fg: 'text-primary-300',
    photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Damanpreet&backgroundColor=1f2937&radius=20',
  },
  {
    name: 'Gungun Sisodhiya',
    role: 'Social Media Handler',
    initials: 'GS',
    bg: 'bg-orange-100',
    fg: 'text-orange-700',
    photo: GungunPhoto,
  },
]

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
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
    document.querySelectorAll('section[data-observe]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-cream pt-20 overflow-hidden font-body">

      {/* Background Blueprint Decoration */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm mb-10"
          >
            <Sparkles size={14} className="text-primary-600" />
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">About Prepzo</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-800 text-[#1a1a2e] leading-[1.05] mb-6"
          >
            We're building the{' '}
            <span className="text-primary-600">brain map</span>
            <br className="hidden md:block" />
            students never had.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Prepzo is a skill analyser and brain-mapping platform built for universities and TPO cells. Behind it sits Prepzo AI — our own 70B-parameter model, fine-tuned for cognitive assessment, not chat.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section data-observe className="py-24 px-6 bg-white/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="reveal space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 border border-primary-100 rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
                Why we exist
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-800 text-gray-900 leading-tight">
                Curriculum is generic. <span className="gradient-text">Students aren't.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed font-medium italic border-l-4 border-primary-200 pl-6">
                "India produces 5 million graduates every year — yet only ~45% are considered employable. The system doesn't lack effort. It lacks a per-student map of what each one actually knows."
              </p>
            </div>
            <div className="reveal space-y-6 text-gray-500 font-body text-lg leading-relaxed">
              <p>Prepzo is the answer to that gap. We give every student a precise, evolving map of their strengths and weak areas — and we give the TPO cell a department-wide view of where the cohort actually stands, week by week.</p>
              <p>Behind the scenes sits <strong className="text-gray-900">Prepzo AI</strong>, our own 70B-parameter language model, tuned for structured cognitive assessment. The result is a platform that doesn't guess — it measures, maps, and tells the institution what to do next.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section data-observe className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="reveal text-3xl md:text-4xl font-display font-800 text-gray-900 mb-4">Three pillars, <span className="text-primary-600 italic font-display">nothing more.</span></h2>
            <p className="reveal text-gray-500 max-w-xl mx-auto">How we decide what ships and what doesn't.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Brain size={22} />, title: 'Map first, drill later', desc: 'A drill is only useful if it closes a real gap. Every interaction in Prepzo refines the per-student map before it prescribes anything.' },
              { icon: <Target size={22} />, title: 'Honest, not nice', desc: 'A readiness profile that overstates is worse than no profile. We grade on the same rubric an institution would defend in front of a committee.' },
              { icon: <Sparkles size={22} />, title: 'Built for the institution', desc: 'Students benefit individually. But Prepzo is designed for the TPO cell — semester-long signal, cohort-level decisions, real follow-through.' },
            ].map((p, i) => (
              <div key={i} className="reveal p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-600 to-orange-500 flex items-center justify-center text-white mb-5 shadow-md">
                  {p.icon}
                </div>
                <h3 className="font-display font-700 text-gray-900 text-lg mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-founders — highlighted */}
      <section data-observe className="py-24 px-6 bg-white/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="reveal flex justify-center mb-4">
              <span className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 border border-primary-100 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                The Founders
              </span>
            </div>
            <h2 className="reveal text-3xl md:text-4xl font-display font-800 text-gray-900 mb-4">Three people. <span className="text-primary-600 italic font-display">One mission.</span></h2>
            <p className="reveal text-gray-500 max-w-xl mx-auto">The team building Prepzo from the ground up.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cofounders.map((p, i) => (
              <div key={i} className="reveal group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col">
                <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.accent} flex items-center justify-center overflow-hidden`}>
                  {p.photo ? (
                    <img src={p.photo} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <span className="font-display font-800 text-7xl text-white/95 tracking-tight">{p.initials}</span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <div className="p-7 flex-grow flex flex-col">
                  <h3 className="font-display font-800 text-xl text-gray-900 mb-1">{p.name}</h3>
                  <p className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-4">{p.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{p.bio}</p>
                  <a href={p.linkedin} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 font-bold text-sm hover:gap-3 transition-all">
                    <Linkedin size={16} /> LinkedIn <ArrowRight size={12} className="-rotate-45" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core team */}
      <section data-observe className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="reveal text-2xl md:text-3xl font-display font-800 text-gray-900 mb-3">Core team</h3>
            <p className="reveal text-gray-500 max-w-lg mx-auto">The people keeping the engine running day to day.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((p, i) => (
              <div key={i} className="reveal bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6">
                {p.photo ? (
                  <div className="w-16 h-16 rounded-2xl overflow-hidden mb-5 ring-1 ring-gray-100">
                    <img src={p.photo} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className={`w-16 h-16 rounded-2xl ${p.bg} ${p.fg} flex items-center justify-center font-display font-800 text-2xl mb-5`}>
                    {p.initials}
                  </div>
                )}
                <h4 className="font-display font-700 text-gray-900 text-base mb-1">{p.name}</h4>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Signoff */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-1 max-w-[80px] bg-primary-200 mx-auto rounded-full mb-12" />
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-800 text-[#1a1a2e] leading-snug mb-10 lowercase">
            "first we map the <em className="text-primary-600">mind</em>, then we close the <em className="text-primary-600">gap</em>."
          </h3>
          <div className="flex justify-center">
            <Link to="/contact" className="btn-primary scale-110">Talk to us <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

    </div>
  )
}
