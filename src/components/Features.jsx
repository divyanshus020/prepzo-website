import { useRef } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, X, Zap } from 'lucide-react'

const features = [
  { name: 'Adaptive, voice-first sessions', prepzo: true, others: false },
  { name: 'Honest per-student guidance', prepzo: true, others: false },
  { name: 'A helping hand for teachers', prepzo: true, others: false },
  { name: 'Institution-wide dashboard', prepzo: true, others: 'partial' },
  { name: 'Resume to profile intelligence', prepzo: true, others: 'partial' },
  { name: 'Department-level view', prepzo: true, others: false },
  { name: 'Personalised improvement plan', prepzo: true, others: false },
  { name: 'Semester-long readiness view', prepzo: true, others: false },
]

const metrics = [
  { value: '120B', label: 'Our Own Model Parameters', sublabel: 'built in-house, tuned for guidance' },
  { value: '6', label: 'Steps to Readiness Profile', sublabel: 'adaptive per student' },
  { value: '35K+', label: 'Students, Jodhpur', sublabel: 'higher-education traction' },
  { value: '1 day', label: 'Response Time', sublabel: 'on tailored plan requests' },
]

export default function Features() {
  const ref = useRef(null)

  return (
    <section id="features" ref={ref} className="py-28 mesh-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-4"
          >
            <span className="tag">Why Prepzo</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-800 text-gray-900 leading-tight mb-5"
          >
            Static prep gives drills.{' '}
            <span className="gradient-text">Prepzo gives direction.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500 max-w-xl mx-auto font-body"
          >
            One platform: adaptive sessions, honest per-student guidance, a helping hand for teachers, and a dashboard institutions can actually act on.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Comparison table */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-100 px-6 py-4">
                <span className="text-sm font-display font-700 text-gray-500">Feature</span>
                <span className="text-sm font-display font-700 text-orange-600 text-center">Prepzo</span>
                <span className="text-sm font-display font-700 text-gray-400 text-center">Others</span>
              </div>
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`grid grid-cols-3 px-6 py-4 border-b border-gray-50 ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}
                >
                  <span className="text-sm text-gray-600 font-body">{f.name}</span>
                  <div className="flex justify-center">
                    <CheckCircle size={18} className="text-primary-500" />
                  </div>
                  <div className="flex justify-center">
                    {f.others === true ? (
                      <CheckCircle size={18} className="text-green-400" />
                    ) : f.others === 'partial' ? (
                      <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                    ) : (
                      <X size={18} className="text-rose-400" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center font-body">
              Compared to legacy prep portals and generic test platforms
            </p>
          </motion.div>

          {/* Metrics */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h3 className="font-display font-700 text-xl text-gray-900 mb-2">Built on our own model</h3>
              <p className="text-gray-500 text-sm font-body mb-6">Prepzo runs on our own 120 billion parameter model, built in-house and tuned for guidance, not chat. Not a chat wrapper around someone else's API.</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                  className="stat-card bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
                >
                  <div className="text-3xl font-display font-800 gradient-text mb-1">{m.value}</div>
                  <div className="text-sm font-display font-600 text-gray-800 mb-1">{m.label}</div>
                  <div className="text-xs text-gray-400 font-body">{m.sublabel}</div>
                </motion.div>
              ))}
            </div>

            {/* Flywheel callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="gradient-border"
            >
              <div className="bg-white rounded-2xl p-6">
                <h4 className="font-display font-700 text-gray-900 mb-2 flex items-center gap-2">
                  <Zap size={16} className="text-primary-500" />
                  The flywheel
                </h4>
                <p className="text-gray-500 text-sm font-body leading-relaxed">
                  Every session sharpens Prepzo. More students, more signal, a sharper model, better guidance, more institutions. Over time, Prepzo becomes the guidance layer Indian education is built on.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
