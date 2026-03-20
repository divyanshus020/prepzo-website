import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Mail, ArrowRight, Zap, ShoppingBag, Code2, Target, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import founderAvatar from '../assets/founder_avatar.png'

const ventures = [
  {
    name: 'Prepzo',
    icon: <Zap size={20} />,
    role: 'Founder & CEO',
    color: 'from-purple-600 to-violet-500',
    desc: 'AI Career Operating System for Universities. Bridging the gap between academic output and industry readiness through AI-powered analytics.',
    link: '/',
  },
  {
    name: 'DCodecafe',
    icon: <Code2 size={20} />,
    role: 'Founder',
    color: 'from-blue-600 to-indigo-500',
    desc: 'A full-stack software development studio focused on building innovative digital products and production-grade technology solutions.',
    link: '#',
  },
  {
    name: 'HiringBazaar',
    icon: <ShoppingBag size={20} />,
    role: 'CTO',
    color: 'from-violet-600 to-indigo-500',
    desc: 'A next-generation hiring marketplace connecting job seekers with employers across India.',
    link: '#',
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
    <div className="min-h-screen bg-[#fafaf8] pt-20 overflow-hidden font-body">

      {/* Background Blueprint Decoration */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm mb-12"
          >
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Leadership & Vision</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-800 text-[#1a1a2e] leading-[1.1] mb-20 max-w-4xl mx-auto"
          >
            Built to bridge the gap between <br className="hidden md:block" />
            <span className="text-purple-600">technology</span> and <span className="text-purple-600">market distribution</span>
          </motion.h1>

          {/* Founder Card — The Screenshot Design Refined */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-black/5 blur-3xl -z-10 translate-y-8 scale-95" />
            <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-purple-900/5 border border-white flex flex-col lg:flex-row items-center gap-12 text-left">

              {/* Left — Avatar */}
              <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-[#f3f4f6] overflow-hidden relative border border-gray-100 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img
                  src={founderAvatar}
                  alt="Divyanshu Sharma"
                  className="w-full h-full object-cover relative z-0 transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Right — Content */}
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <h2 className="text-3xl font-display font-800 text-[#1a1a2e]">Divyanshu Sharma</h2>
                  <span className="text-lg text-gray-400 font-medium">— Founder, Prepzo & DCodecafe</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="bg-[#f3f4f6] text-gray-600 px-4 py-1.5 rounded-full text-sm font-semibold border border-gray-200/50">Scalable Tech</span>
                  <span className="bg-[#f3f4f6] text-gray-600 px-4 py-1.5 rounded-full text-sm font-semibold border border-gray-200/50">Market Distribution</span>
                  <span className="bg-[#f3f4f6] text-gray-600 px-4 py-1.5 rounded-full text-sm font-semibold border border-gray-200/50">Full-Stack Architecture</span>
                </div>

                <div className="grid md:grid-cols-1 gap-8">
                  <div className="group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <Target size={16} />
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Core Focus:</h4>
                    </div>
                    <p className="text-gray-500 text-lg leading-relaxed font-medium">
                      Building scalable tech solutions to solve deeply entrenched market distribution problems in higher education and recruitment.
                    </p>
                  </div>

                  <div className="group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <Eye size={16} />
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">The Mission:</h4>
                    </div>
                    <p className="text-gray-500 text-lg leading-relaxed font-medium">
                      Fix the fundamental disconnect between university education and industry hiring expectations for 43M+ students in India.
                    </p>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100 flex items-center gap-6">
                  <a href="https://www.linkedin.com/in/sharma-divyanshu/" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-600 font-bold hover:text-purple-700 transition-colors group/link">
                    <Linkedin size={20} /> LinkedIn <ArrowRight size={14} className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                  <a href="mailto:connect@prepzo.space" className="flex items-center gap-2 text-gray-400 font-bold hover:text-gray-600 transition-colors">
                    <Mail size={20} /> Contact
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Mission & Vision — RESTORED DATA */}
      <section data-observe className="py-24 px-6 bg-white/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="reveal space-y-6">
              <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 border border-purple-100 rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
                Our Purpose
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-800 text-gray-900 leading-tight">
                Why we are building <span className="gradient-text">Prepzo</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed font-medium italic border-l-4 border-purple-200 pl-6">
                "India produces 5 million graduates every year — yet only ~45% are considered employable. Talented students walk into interviews unprepared because the system lacks realistic practice."
              </p>
            </div>
            <div className="reveal space-y-6 text-gray-500 font-body text-lg leading-relaxed">
              <p>Prepzo is the definitive answer to this systemic gap. It's an AI operating system that gives students real practice, universities real-time data, and recruiters real confidence in who they're hiring.</p>
              <p>Through **DCodecafe**, our technology foundation, we build the infrastructure that high-stakes placement ecosystems in India have been missing for decades. We aren't just building a tool; we're building the future of campus employability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Architecture — RESTORED DCODECAFE */}
      <section data-observe className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="reveal text-3xl font-display font-800 text-gray-900 mb-4">Ecosystem Architecture</h2>
            <p className="reveal text-gray-500 max-w-xl mx-auto">Scaling digital infrastructure across multiple verticals under Divyanshu Sharma's leadership.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ventures.map((v, i) => (
              <div key={i} className="reveal group p-8 bg-white border border-gray-100 rounded-[32px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center text-white mb-6 shadow-md`}>
                  {v.icon}
                </div>
                <h3 className="font-display font-800 text-2xl text-gray-900 mb-2">{v.name}</h3>
                <p className="text-gray-400 font-medium text-xs mb-4 uppercase tracking-widest">{v.role}</p>
                <p className="text-gray-500 leading-relaxed mb-8 text-sm flex-grow">{v.desc}</p>
                <Link to={v.link} className="inline-flex items-center gap-2 text-purple-600 font-bold group-hover:gap-4 transition-all text-sm">
                  View Project <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Signoff */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-1 w-full max-w-[80px] bg-purple-200 mx-auto rounded-full mb-12" />
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-800 text-[#1a1a2e] leading-snug mb-8 lowercase">
            "First we build the <span className="text-purple-600 font-900 italic">engine</span>, then we conquer the <span className="text-purple-600 font-900 italic">distribution</span>."
          </h3>
          <div className="flex justify-center">
            <Link to="/contact" className="btn-primary scale-110">Build with me <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

    </div>
  )
}
