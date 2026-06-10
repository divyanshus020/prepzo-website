import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { GraduationCap, BarChart3, Target, Brain, Zap, Shield, BookOpen, TrendingUp } from 'lucide-react'

// Sleek individual visual widgets (rendered without double card wraps)

const VoiceCounsellorMockup = () => (
  <div className="w-full max-w-md bg-zinc-900/90 border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden font-body text-white">
    <div className="flex items-center gap-3 border-b border-white/5 pb-3 mb-4">
      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
      <div>
        <p className="text-xs font-semibold text-gray-300">Prepzo Voice Assistant</p>
        <p className="text-[10px] text-emerald-400 font-mono">Active Session</p>
      </div>
    </div>
    <div className="space-y-3 mb-4 text-xs">
      <div className="bg-zinc-800/80 rounded-xl p-3 max-w-[85%] border border-white/5">
        <p className="text-gray-300">How would you approach scaling a database when read requests triple in a day?</p>
      </div>
      <div className="bg-primary-600/20 border border-primary-500/30 rounded-xl p-3 max-w-[85%] ml-auto text-right">
        <p className="text-primary-100">I would implement a Redis caching layer for read-heavy keys, then set up read replicas...</p>
      </div>
    </div>
    <div className="flex items-center justify-center gap-1.5 h-14 overflow-hidden">
      {[4, 10, 6, 12, 16, 8, 14, 5, 9, 3].map((val, idx) => (
        <motion.div
          key={idx}
          animate={{ height: [val * 1.2, val * 2.4, val * 1.2] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: idx * 0.1 }}
          className="w-1 rounded-full bg-gradient-to-t from-primary-500 to-orange-400"
          style={{ height: val * 1.8 }}
        />
      ))}
    </div>
  </div>
)

const SkillHeatmapMockup = () => (
  <div className="w-full max-w-md bg-zinc-900/90 border border-white/10 rounded-2xl p-5 shadow-2xl text-white font-body">
    <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
      <span className="text-xs font-semibold text-gray-300">Readiness Score</span>
      <span className="text-sm font-bold text-primary-400">82 / 100</span>
    </div>
    <div className="space-y-3">
      {[
        { label: 'Technical Depth', val: 88, color: 'from-orange-500 to-orange-400' },
        { label: 'Problem Solving', val: 76, color: 'from-primary-500 to-primary-400' },
        { label: 'Communication Clarity', val: 84, color: 'from-primary-600 to-primary-400' },
      ].map((item) => (
        <div key={item.label} className="text-xs">
          <div className="flex justify-between text-[10px] text-gray-400 mb-1.5">
            <span>{item.label}</span>
            <span className="font-mono">{item.val}%</span>
          </div>
          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${item.val}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className={`h-full bg-gradient-to-r ${item.color}`}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
)

const LessonPlanMockup = () => (
  <div className="w-full max-w-md bg-zinc-900/90 border border-white/10 rounded-2xl p-5 shadow-2xl text-white font-body">
    <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-primary-500" />
        <span className="text-xs font-semibold text-gray-300">Class Assistant v2</span>
      </div>
      <span className="text-[10px] text-gray-500">Subject: DBMS</span>
    </div>
    <div className="space-y-2 mb-4">
      <div className="bg-zinc-800/50 border border-white/5 rounded-lg p-3">
        <p className="text-[11px] font-semibold text-gray-255 mb-1.5">Generated Lesson Plan:</p>
        <p className="text-[10px] text-gray-400">1. Normalization (1NF to 3NF) - 20 mins</p>
        <p className="text-[10px] text-gray-400">2. Interactive Query Drill - 15 mins</p>
      </div>
    </div>
    <div className="flex gap-2">
      <button className="flex-1 py-2.5 rounded-xl bg-primary-600 text-white text-[11px] font-bold hover:bg-primary-500 transition-colors">
        Export Slide Deck
      </button>
      <button className="px-3.5 py-2.5 rounded-xl border border-white/10 text-[11px] text-gray-350 hover:bg-white/5 transition-colors">
        Regenerate
      </button>
    </div>
  </div>
)

const CohortDashboardMockup = () => (
  <div className="w-full max-w-md bg-zinc-900/90 border border-white/10 rounded-2xl p-5 shadow-2xl text-white font-body">
    <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
      <span className="text-xs font-semibold text-gray-300">TPO Command Centre</span>
      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full animate-pulse">Live</span>
    </div>
    <div className="grid grid-cols-2 gap-3 mb-4">
      <div className="bg-zinc-800/40 p-3 rounded-xl border border-white/5">
        <p className="text-[10px] text-gray-400">CSE Cohort A</p>
        <p className="text-sm font-bold text-primary-400 mt-0.5">92% Ready</p>
      </div>
      <div className="bg-zinc-800/40 p-3 rounded-xl border border-white/5">
        <p className="text-[10px] text-gray-400">CSE Cohort B</p>
        <p className="text-sm font-bold text-orange-400 mt-0.5">78% Ready</p>
      </div>
    </div>
    <div className="bg-zinc-850 border border-white/5 p-2.5 rounded-xl text-[10px] text-gray-400">
      ⚠️ 8 students in Cohort B need immediate review.
    </div>
  </div>
)

const ModelVisualMockup = () => (
  <div className="w-full max-w-md bg-zinc-900/90 border border-white/10 rounded-2xl p-5 shadow-2xl text-white font-mono text-[10px] leading-relaxed">
    <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
      <span className="text-primary-400 font-bold">prepzo-120b-v1.sh</span>
      <span className="text-gray-500">active</span>
    </div>
    <div className="space-y-1 text-gray-400">
      <p className="text-emerald-400">&gt; loading model weights...</p>
      <p>&gt; parameters: 120,482,900,128</p>
      <p>&gt; context: Indian academic & interview datasets</p>
      <p className="text-orange-400">&gt; throughput: 85 tokens/sec (optimized)</p>
      <p className="text-gray-500">&gt; latency: 12ms first-token</p>
    </div>
  </div>
)

const CycleMockup = () => (
  <div className="w-full max-w-md bg-zinc-900/90 border border-white/10 rounded-2xl p-5 shadow-2xl text-white font-body">
    <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
      <span className="text-xs font-semibold text-gray-300">Weekly Progress Tracking</span>
      <span className="text-[10px] text-gray-500 font-mono">Deltas</span>
    </div>
    <div className="relative h-20 flex items-end justify-between gap-2">
      {[30, 45, 42, 60, 55, 75, 88].map((val, idx) => (
        <div key={idx} className="flex-1 flex flex-col items-center gap-1.5">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: `${val}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.05 }}
            className={`w-full rounded-t-sm bg-gradient-to-t ${
              idx === 6 ? 'from-primary-600 to-primary-400' : 'from-zinc-800 to-zinc-700'
            }`}
          />
          <span className="text-[9px] text-gray-500 font-mono">W{idx + 1}</span>
        </div>
      ))}
    </div>
  </div>
)

const solutions = [
  {
    icon: <Brain size={20} />,
    title: 'A counsellor for every student',
    desc: 'Prepzo understands how each student thinks, where they are strong, and where they need to grow. It highlights the career paths they are genuinely built for, including the ones they might never have considered.',
    color: 'from-orange-600 to-orange-500',
    mockup: <VoiceCounsellorMockup />,
  },
  {
    icon: <Target size={20} />,
    title: 'Real strengths, real gaps',
    desc: 'Every session provides an honest, granular breakdown of a student\'s performance. No vague percentiles—just specific feedback on reasoning, communication, and technical concepts.',
    color: 'from-primary-500 to-orange-400',
    mockup: <SkillHeatmapMockup />,
  },
  {
    icon: <BookOpen size={20} />,
    title: 'A helping hand for teachers',
    desc: 'Generate lesson plans, interactive class challenges, and presentations on demand. Prepzo saves administrative hours and shows educators exactly where their class needs help before final results.',
    color: 'from-primary-500 to-primary-400',
    mockup: <LessonPlanMockup />,
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'Built for institutions',
    desc: 'Academic leadership and placement teams get a direct, department-wide dashboard. View cohort readiness progress in real-time and identify students who need support early.',
    color: 'from-red-500 to-primary-500',
    mockup: <CohortDashboardMockup />,
  },
  {
    icon: <Zap size={20} />,
    title: 'Our own 120B model',
    desc: 'Powered by our own 120-billion parameter model, built in-house and customized for the Indian education and interview ecosystem. A dedicated model designed specifically for academic readiness.',
    color: 'from-primary-600 to-primary-500',
    mockup: <ModelVisualMockup />,
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Gets sharper every week',
    desc: 'Prepzo is an ongoing loop, not a static checkpoint. Each session informs the next, continuously updating profiles and shrinking skill gaps over the course of the semester.',
    color: 'from-primary-600 to-primary-600',
    mockup: <CycleMockup />,
  },
]

// Timeline Row Component
function TimelineRow({ s, i, scrollYProgress }) {
  const isEven = i % 2 === 0
  const nodeStart = i / solutions.length
  
  // Custom scroll-linked color interpolation for timeline nodes
  const activeColor = useTransform(
    scrollYProgress,
    [nodeStart, nodeStart + 0.05],
    ['rgba(39, 39, 42, 1)', 'rgba(255, 106, 61, 1)']
  )

  const activeShadow = useTransform(
    scrollYProgress,
    [nodeStart, nodeStart + 0.05],
    ['none', '0 0 15px rgba(255, 106, 61, 0.8)']
  )

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-start pb-20 md:pb-24 pl-12 md:pl-0">
      {/* Dynamic Timeline Node */}
      <motion.div
        style={{
          backgroundColor: activeColor,
          boxShadow: activeShadow,
          zIndex: 10,
        }}
        className="absolute left-6 md:left-1/2 -translate-x-1/2 top-2 w-5 h-5 rounded-full border-4 border-zinc-950 flex items-center justify-center"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-zinc-950" />
      </motion.div>

      {/* Left Column (Desktop Even / Mobile Hidden) */}
      {isEven ? (
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="space-y-4 md:pr-12 flex flex-col items-start md:items-start hidden md:block"
        >
          <div className="inline-flex items-center gap-2.5 whitespace-nowrap">
            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-md`}>
              {s.icon}
            </div>
            <span className="text-[10px] font-display font-800 tracking-wider text-primary-400 uppercase whitespace-nowrap">
              0{i + 1}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-display font-800 text-white text-left">{s.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md text-left">{s.desc}</p>
          <div className="pt-3 w-full flex justify-start">
            {s.mockup}
          </div>
        </motion.div>
      ) : (
        <div className="hidden md:block" />
      )}

      {/* Right Column (Desktop Odd / Mobile All Stacked) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className={`space-y-4 md:pl-12 flex flex-col items-start ${isEven ? 'block md:hidden' : 'block'}`}
      >
        <div className="inline-flex items-center gap-2.5 whitespace-nowrap">
          <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-md`}>
            {s.icon}
          </div>
          <span className="text-[10px] font-display font-800 tracking-wider text-primary-400 uppercase whitespace-nowrap">
            0{i + 1}
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-display font-800 text-white text-left">{s.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed max-w-md text-left">{s.desc}</p>
        <div className="pt-3 w-full flex justify-start">
          {s.mockup}
        </div>
      </motion.div>

      {/* Right Column Spacer (Desktop Even) */}
      {isEven && <div className="hidden md:block" />}
    </div>
  )
}

export default function Solution() {
  const containerRef = useRef(null)

  // Track scroll position of the entire timeline wrapper
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  // Vertical timeline beam height mapping
  const beamHeight = useTransform(scrollYProgress, [0.05, 0.95], ['0%', '100%'])

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden bg-zinc-950"
      style={{ position: 'relative', clipPath: 'inset(0)' }}
    >
      {/* Background video (fixed to viewport, but clipped to this parent container) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          zIndex: 0,
          pointerEvents: 'none',
          filter: 'grayscale(15%) brightness(0.4) contrast(1.1)',
        }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_135830_bb6491d1-9b66-4aec-9722-13b4dfe3fb46.mp4"
          type="video/mp4"
        />
      </video>

      {/* Brand Color overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: 'linear-gradient(135deg, rgba(14, 17, 22, 0.94) 0%, rgba(255, 106, 61, 0.22) 50%, rgba(14, 17, 22, 0.94) 100%)',
        }}
      />

      <section
        id="solution"
        className="py-32 relative"
        style={{
          zIndex: 2,
          backgroundColor: 'transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-4"
            >
              <span 
                className="tag"
                style={{
                  background: 'rgba(255, 106, 61, 0.15)',
                  borderColor: 'rgba(255, 106, 61, 0.3)',
                  color: '#FF8A5F'
                }}
              >
                <Zap size={13} />
                The Solution
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-800 text-white leading-tight tracking-tight mb-5"
            >
              One AI counsellor, for students,{' '}
              <span className="gradient-text">teachers, and institutions.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto font-body leading-relaxed"
            >
              Prepzo replaces guesswork with guidance. For the student, a counsellor that knows their strengths and their path. For the teacher, a helping hand that gives their time back. For the institution, a clear view of where every cohort stands, getting sharper every week.
            </motion.p>
          </div>

          {/* Timeline Section */}
          <div className="relative mt-20">
            {/* Center Axis Line (Desktop: Centered / Mobile: Left side) */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-20 w-0.5 bg-zinc-800/80">
              <motion.div
                style={{ height: beamHeight }}
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary-500 to-orange-500 origin-top shadow-[0_0_12px_rgba(255,106,61,0.7)]"
              />
            </div>

            {/* List of features along timeline */}
            <div className="space-y-4">
              {solutions.map((s, i) => (
                <TimelineRow 
                  key={i} 
                  s={s} 
                  i={i} 
                  scrollYProgress={scrollYProgress} 
                />
              ))}
            </div>
          </div>

          {/* Bottom Roadmap */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-28 p-8 md:p-12 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md text-center max-w-2xl mx-auto relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-1.5 text-primary-300 text-xs font-display font-600 mb-5">
              <Shield size={12} />
              Platform Roadmap
            </div>
            <h4 className="text-2xl font-display font-800 text-white mb-3 tracking-tight">
              More features arriving weekly
            </h4>
            <p className="text-gray-300 text-sm font-body leading-relaxed max-w-xl mx-auto">
              We release updates constantly, driven directly by request lists from partner institutions, placement directors, and student feedback cells.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
