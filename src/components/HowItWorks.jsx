import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { LogIn, FileText, Brain, BarChart2, Map, Trophy } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: <LogIn size={22} />,
    title: 'Onboarding',
    desc: 'Students sign in through their institution\'s Prepzo portal, set up by department and year. Simple, secure, single sign-on.',
    color: 'from-orange-600 to-orange-500',
  },
  {
    step: '02',
    icon: <FileText size={22} />,
    title: 'Understanding the student',
    desc: 'Resume, target role, and academic record become a starting picture of where each student is today and where they want to go.',
    color: 'from-primary-500 to-primary-400',
  },
  {
    step: '03',
    icon: <Brain size={22} />,
    title: 'A real session',
    desc: 'Prepzo runs an adaptive, voice-first session. Reasoning, communication, structure, and subject depth, all in one sitting.',
    color: 'from-primary-500 to-orange-400',
  },
  {
    step: '04',
    icon: <BarChart2 size={22} />,
    title: 'The honest picture',
    desc: 'Every answer is read closely and turned into a clear map of strengths and gaps, down to the moment something broke down.',
    color: 'from-orange-500 to-primary-500',
  },
  {
    step: '05',
    icon: <Map size={22} />,
    title: 'A personal plan',
    desc: 'Prepzo returns a specific plan: the drills, lessons, and next target tied to the exact gaps it found.',
    color: 'from-primary-600 to-primary-500',
  },
  {
    step: '06',
    icon: <Trophy size={22} />,
    title: 'Direction that lasts',
    desc: 'Students build a profile they can stand behind. Institutions see how every cohort is moving, all semester.',
    color: 'from-primary-600 to-primary-600',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const lineWidth = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '100%'])

  return (
    <section id="how-it-works" ref={ref} className="py-28 bg-gray-50/60 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(124,58,237,0.05) 0%, transparent 60%)' }} />

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
            <span className="tag">How It Works</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-800 text-gray-900 leading-tight mb-5"
          >
            From login to a{' '}
            <span className="gradient-text">readiness profile</span>
            {' '}in six steps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500 max-w-xl mx-auto font-body"
          >
            One continuous loop, adaptive per student, visible to the institution, running all semester.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Animated connecting line */}
          <div className="absolute top-16 left-0 right-0 hidden lg:block pointer-events-none mx-16 overflow-hidden h-px bg-primary-100">
            <motion.div style={{ width: lineWidth }} className="h-full bg-gradient-to-r from-primary-400 to-primary-200" />
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative bg-white rounded-2xl border border-gray-100 p-7 shadow-sm feature-card hover:border-primary-100"
            >
              {/* Step number */}
              <div className="flex items-start justify-between mb-5">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-md`}>
                  {s.icon}
                </div>
                <span className="text-4xl font-display font-800 text-gray-100 leading-none">{s.step}</span>
              </div>
              <h3 className="font-display font-700 text-gray-900 text-base mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-body">{s.desc}</p>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-3 z-10">
                  <div className="w-6 h-6 rounded-full bg-primary-100 border border-primary-200 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Loop indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-primary-50 border border-primary-100 rounded-full px-6 py-3">
            <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-primary-700 text-sm font-display font-600">
              The loop repeats every cycle. The picture sharpens, the gaps shrink, and the student walks in ready.
            </span>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
    </section>
  )
}
