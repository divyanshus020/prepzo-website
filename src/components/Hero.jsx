import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import HeroScene from './HeroScene'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-bg">
      {/* 3D Scene - right side */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-90 pointer-events-none">
        <HeroScene />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-20 right-1/3 w-48 h-48 bg-violet-200/20 rounded-full blur-2xl animate-float-delay pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div {...fadeUp(0.1)} className="mb-6">
            <span className="tag">
              <Sparkles size={13} />
              AI-Powered Placement OS for Universities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-800 leading-[1.05] tracking-tight text-gray-900 mb-6"
          >
            The Future of{' '}
            <span className="gradient-text">Campus</span>
            <br />
            Placements{' '}
            <span className="shimmer-text">is Here.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.35)}
            className="text-lg md:text-xl text-gray-500 leading-relaxed mb-10 max-w-xl font-body"
          >
            Prepzo is an AI-native placement ecosystem that prepares students with realistic mock interviews, gives universities data-driven insights, and connects recruiters with truly job-ready talent.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 mb-16">
            <a href="#pricing" className="btn-primary">
              Get Started Free
              <ArrowRight size={17} />
            </a>
            <a href="#how-it-works" className="btn-outline">
              <Play size={15} fill="currentColor" />
              See How It Works
            </a>
          </motion.div>

          {/* Social proof stats */}
          <motion.div {...fadeUp(0.65)} className="flex flex-wrap gap-8">
            {[
              { value: '43M+', label: 'Students in India' },
              { value: '5M', label: 'Graduates Yearly' },
              { value: '42K+', label: 'Target Colleges' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-display font-700 gradient-text">{stat.value}</span>
                <span className="text-sm text-gray-400 font-body mt-0.5">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 font-body tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-purple-400 to-transparent animate-pulse" />
      </motion.div>
    </section>
  )
}
