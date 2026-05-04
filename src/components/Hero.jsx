import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react'
import HeroScene from './HeroScene'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-paper">

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,106,61,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,106,61,0.05) 1px, transparent 1px)`,
          backgroundSize: '72px 72px'
        }}
      />

      {/* Top-left radial glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-coral-soft/60 rounded-full blur-3xl pointer-events-none" />
      {/* Bottom-right radial glow */}
      <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-coral-soft/30 rounded-full blur-3xl pointer-events-none" />

      {/* 3D scene — right half */}
      <div className="absolute right-0 top-0 w-full md:w-[55%] h-full pointer-events-none opacity-95">
        <HeroScene />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-[600px]">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-7"
          >
            <span className="tag">
              <Sparkles size={12} />
              Powered by Prepzo AI · 70B parameter model
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-[68px] font-display font-800 leading-[1.04] tracking-[-0.02em] text-gray-950 mb-6">
              Map the skill.
              <br />
              <span className="gradient-text">Map the mind.</span>
            </h1>
          </motion.div>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg md:text-xl text-gray-500 leading-relaxed mb-10 max-w-[520px] font-body"
          >
            Prepzo is a skill analyser & brain-mapping platform built for universities and TPO cells — turning every student session into a precise readiness profile, semester after semester.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <Link to="/contact" className="btn-primary text-base px-7 py-4">
              Book a Demo
              <ArrowRight size={18} />
            </Link>
            <a href="#how-it-works" className="btn-outline text-base px-7 py-4">
              See How It Works
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center gap-6"
          >
            {[
              { emoji: '🧠', text: 'Brain-mapping engine' },
              { emoji: '🏛️', text: 'Built with TPO cells' },
              { emoji: '⚡', text: 'Prepzo AI · 70B' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-base">{item.emoji}</span>
                <span className="text-sm text-gray-500 font-body">{item.text}</span>
                {i < 2 && <span className="hidden sm:block w-px h-4 bg-gray-200 ml-3" />}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <ChevronDown size={20} className="text-orange-400 animate-bounce" />
      </motion.div>
    </section>
  )
}
