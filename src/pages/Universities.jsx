import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight, Brain, Target, Compass, BookOpen, Layers, Trophy, Briefcase, Layout, ShieldCheck, Cpu, PlusCircle } from 'lucide-react'
import Seo, { breadcrumbLd } from '../components/Seo'

export default function Universities() {
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
      <Seo
        title="Prepzo for Universities | Placement & Employability Intelligence"
        description="Prepzo gives universities and TPO cells a semester-long view of student readiness — AI mock interviews, cognitive mapping, and cohort employability intelligence."
        path="/universities"
        keywords="AI for colleges, AI for universities, placement intelligence, employability intelligence, TPO cell software, AI mock interview, cognitive mapping, career intelligence"
        jsonLd={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'For Universities', path: '/universities' },
        ])}
      />
      {/* Background blueprint grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Cinematic Video Hero */}
      <section className="relative -mt-20 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 bg-[#03253a] overflow-hidden">
        {/* Fullscreen looping background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
            type="video/mp4"
          />
        </video>

        {/* Subtle scrim so light text stays legible on any frame */}
        <div className="absolute inset-0 z-[5] bg-[#03253a]/30 pointer-events-none" />
        {/* Warm coral glow to tie the hero into the brand palette */}
        <div
          className="absolute inset-0 z-[6] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 55%, rgba(255,106,61,0.18) 0%, transparent 55%)' }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto">
          <span className="animate-fade-rise inline-flex items-center gap-2 liquid-glass rounded-full px-4 py-2 mb-8 text-white">
            <Sparkles size={14} className="text-[#FF8A5F]" fill="currentColor" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#FFB59A]">For Universities</span>
          </span>

          <h1
            className="animate-fade-rise text-white text-5xl sm:text-7xl md:text-8xl font-normal leading-[0.95] tracking-[-0.04em] max-w-5xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Walk into placement season knowing{' '}
            <em className="not-italic gradient-text">exactly where every student stands.</em>
          </h1>

          <p className="animate-fade-rise-delay text-white/70 text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
            Prepzo gives your students a personal AI counsellor, and gives your placement team a clear, semester-long view of readiness, so you act on the gaps before the season, not after. Built for the Indian higher-education context.
          </p>

          <div className="animate-fade-rise-delay-2 flex flex-wrap items-center justify-center gap-4 mt-12">
            <Link
              to="/contact"
              className="liquid-glass rounded-full px-14 py-5 text-base text-white hover:scale-[1.03] transition-transform duration-300 cursor-pointer inline-flex items-center gap-2"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#problem"
              className="rounded-full px-14 py-5 text-base text-white/80 hover:text-white transition-colors cursor-pointer inline-flex items-center"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" data-observe className="py-24 px-6 bg-white/50 relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="reveal flex justify-center mb-4">
              <span className="tag">
                <Compass size={13} />
                The Problem
              </span>
            </div>
            <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-display font-800 text-gray-900 leading-tight mb-5">
              Placement season, <span className="gradient-text">run blind</span>
            </h2>
            <p className="reveal text-lg text-gray-500 max-w-3xl mx-auto font-body leading-relaxed mb-12">
              Millions of graduates enter the workforce every year, and only about half are considered job-ready. The reason is simple: no one maps what each student actually knows, what they do not, and how it changes over a semester. Placement cells run season after season with no early signal, and by the time the gaps show, it is already too late to act.
            </p>

            {/* Stat Strip */}
            <div className="reveal max-w-3xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-primary-700 to-primary-900 p-px primary-glow mt-8">
              <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-3xl p-8 text-center text-white">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { n: '5M+', l: 'graduates enter workforce yearly' },
                    { n: '~45%', l: 'considered job-ready' },
                    { n: 'Early Warning', l: 'weeks of signal, not end-season surprise' },
                  ].map((s, i) => (
                    <div key={i} className="flex flex-col items-center justify-center p-2">
                      <span className="text-xl md:text-3xl font-display font-800 text-white mb-1">{s.n}</span>
                      <span className="text-primary-200 text-xxs md:text-xs font-body max-w-[160px]">{s.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section data-observe className="py-24 px-6 relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="reveal flex justify-center mb-4">
              <span className="tag">
                <Sparkles size={13} fill="currentColor" />
                The Platform
              </span>
            </div>
            <h2 className="reveal text-3xl md:text-4xl font-display font-800 text-gray-900 mb-4">
              Equip your placement cell <span className="text-primary-600 italic font-display">with foresight.</span>
            </h2>
            <p className="reveal text-gray-500 max-w-xl mx-auto font-body">
              Deep evaluation, student guidance, and cohort metrics combined in one platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
            {[
              {
                icon: <Brain size={20} />,
                title: 'A counsellor for every student',
                desc: 'Prepzo shows students their real strengths, their gaps, and the roles they are genuinely built for, then a clear plan to close the distance.',
              },
              {
                icon: <Compass size={20} />,
                title: 'Student AI',
                desc: 'Every student gets their own AI, available any time, that knows their profile and guides them day to day, from doubts to decisions.',
              },
              {
                icon: <Target size={20} />,
                title: 'Cognitive mapping',
                desc: 'Prepzo maps how each student thinks and reasons, turning a single session into a clear picture of strengths, gaps, and the exact concept that needs work.',
              },
              {
                icon: <Layers size={20} />,
                title: 'Adaptive aptitude testing',
                desc: 'Aptitude assessment that adapts to each student and places them accurately, not the same generic drill for everyone.',
              },
              {
                icon: <Briefcase size={20} />,
                title: 'Internships and job opportunities',
                desc: 'Readiness should lead somewhere real. Prepzo surfaces internships and roles matched to each student\'s profile, so the work turns into outcomes.',
              },
              {
                icon: <Trophy size={20} />,
                title: 'Hackathons and challenges',
                desc: 'Students sharpen their skills and build a real track record through hackathons and challenges on the platform.',
              },
              {
                icon: <Layout size={20} />,
                title: 'A command centre for your team',
                desc: 'A department-wide dashboard: cohort readiness, weekly movement, and the names that need attention right now.',
              },
              {
                icon: <ShieldCheck size={20} />,
                title: 'Built for institutions',
                desc: 'Deploy across departments and years, with single sign-on and access managed by your placement cell.',
              },
              {
                icon: <Cpu size={20} />,
                title: 'Our own 120B model',
                desc: 'Prepzo runs on our own 120 billion parameter model, built in-house, grounded on the Indian context and tuned for guidance and structured assessment, not chat.',
              },
              {
                icon: <BookOpen size={20} />,
                title: 'Gets sharper every week',
                desc: 'A loop, not a one-time test. Every session feeds the next, so cohorts keep improving all semester.',
              },
              {
                icon: <PlusCircle size={20} />,
                title: 'More on the way',
                desc: 'We are rolling out new features continuously, built from what students and institutions actually ask for. The platform you see today is the smallest it will ever be.',
              },
            ].map((f, i) => {
              // First card is a large brand-coloured spotlight spanning two columns
              if (i === 0) {
                return (
                  <div
                    key={i}
                    style={{ transitionDelay: `${i * 0.05}s` }}
                    className="reveal group relative md:col-span-2 lg:col-span-2 overflow-hidden rounded-3xl p-9 md:p-10 flex flex-col justify-between bg-gradient-to-br from-[#0E2A3D] via-[#123449] to-[#0b2233] text-white shadow-[0_30px_70px_-30px_rgba(14,42,61,0.55)]"
                  >
                    {/* warm glow */}
                    <div
                      className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none opacity-70"
                      style={{ background: 'radial-gradient(circle, rgba(255,106,61,0.35) 0%, transparent 65%)' }}
                    />
                    <div className="relative">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-body font-600 tracking-wide text-[#FFB59A] bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-6">
                        <Sparkles size={12} fill="currentColor" /> The core
                      </span>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6A3D] to-[#FF8A5F] text-white flex items-center justify-center mb-6 shadow-lg shadow-orange-900/30">
                        <Brain size={26} />
                      </div>
                      <h3 className="font-display font-800 text-2xl md:text-3xl mb-4 leading-tight tracking-tight max-w-md">
                        {f.title}
                      </h3>
                      <p className="text-white/70 text-base leading-relaxed font-body max-w-lg">{f.desc}</p>
                    </div>
                    <div className="relative mt-8 inline-flex items-center gap-2 text-sm font-600 text-[#FFB59A] group-hover:gap-3 transition-all">
                      Every student, every day <ArrowRight size={16} />
                    </div>
                  </div>
                )
              }
              return (
                <div
                  key={i}
                  style={{ transitionDelay: `${i * 0.05}s` }}
                  className="reveal group relative p-7 bg-white border border-gray-100/80 rounded-3xl shadow-[0_2px_20px_-8px_rgba(14,17,22,0.08)] hover:shadow-[0_30px_60px_-25px_rgba(255,106,61,0.30)] hover:border-primary-500/30 hover:-translate-y-1.5 transition-all duration-500 flex flex-col overflow-hidden"
                >
                  {/* faint index watermark */}
                  <span className="absolute top-5 right-6 font-display font-800 text-4xl text-gray-900/[0.04] group-hover:text-primary-500/[0.12] transition-colors select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {/* top accent line that grows on hover */}
                  <span className="absolute top-0 left-8 h-[3px] w-10 rounded-full bg-gradient-to-r from-primary-500 to-orange-400 opacity-0 group-hover:opacity-100 group-hover:w-16 transition-all duration-500" />

                  <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-orange-400 text-white flex items-center justify-center mb-5 shadow-md shadow-orange-500/20 group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-500">
                    {f.icon}
                  </div>
                  <h3 className="relative font-display font-700 text-gray-900 text-lg mb-2.5 leading-tight">{f.title}</h3>
                  <p className="relative text-gray-500 text-sm leading-relaxed font-body">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary-900 to-primary-950 text-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-800 mb-6 leading-tight tracking-tight">
            Stop guessing who is ready. <br />
            Start the season <span className="gradient-text">ahead.</span>
          </h2>
          <p className="text-lg text-primary-200 mb-10 max-w-2xl mx-auto font-body leading-relaxed">
            Tell us about your institution and cohort size, and we will send back a plan that fits. Students never pay.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="bg-white text-black rounded-full font-medium px-8 py-4 flex items-center gap-2 hover:bg-gray-200 transition-all cursor-pointer shadow-lg active:scale-95"
            >
              Request a tailored plan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
