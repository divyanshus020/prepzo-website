import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Brain, Sparkles, Users, BookOpen, ShieldCheck, Cpu, PlusCircle } from 'lucide-react'

const FEATURES = [
  {
    icon: <Brain size={20} />,
    title: 'A personal counsellor for every student',
    desc: 'Prepzo understands how each student thinks and where they are strong, then guides the decisions that matter, stream, subjects, and the careers they are genuinely built for, including the ones no one ever told them about.',
  },
  {
    icon: <Sparkles size={20} />,
    title: 'AI guidance that unlocks real potential',
    desc: 'Every student gets clear, personalised guidance toward their real strengths, so they can see and reach a potential they did not know they had.',
  },
  {
    icon: <Users size={20} />,
    title: 'Real-time tracking',
    desc: 'Students, teachers, and parents see strengths and progress in real time, not once a term when it is already too late to act.',
  },
  {
    icon: <BookOpen size={20} />,
    title: 'A helping hand for every teacher',
    desc: 'Lesson plans, worksheets, homework, and slides on a single command. And teachers can analyse how the class is doing and foresee exactly where it is falling behind, before it ever shows up in a result. The hours lost to admin, handed back.',
  },
  {
    icon: <Users size={20} />,
    title: 'Guidance parents can see',
    desc: 'Clear, honest reports that show parents their child\'s strengths and direction. The counselling your school can now offer without hiring for it.',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Safe with children\'s data',
    desc: 'Built for younger students from the ground up: parental consent, strict privacy, and compliance with India\'s data protection rules. The student owns their data, and the school is its trusted custodian, never the product.',
  },
  {
    icon: <Cpu size={20} />,
    title: 'Our own 120B model',
    desc: 'Prepzo runs on our own 120 billion parameter model, built in-house and grounded on the Indian school curriculum and boards. Not a general chatbot, a model built for this.',
  },
  {
    icon: <PlusCircle size={20} />,
    title: 'More on the way',
    desc: 'We are rolling out new features continuously, built from what schools, teachers, and parents actually ask for. The platform you see today is the smallest it will ever be.',
  },
]

// Curvy center beam that crosses the midline at each card row and bulges between
const BEAM_PATH =
  'M50,0 C80,30 80,95 50,125 C20,155 20,220 50,250 C80,280 80,345 50,375 C20,405 20,470 50,500 C80,530 80,595 50,625 C20,655 20,720 50,750 C80,780 80,845 50,875 C20,905 20,970 50,1000'

export default function FeatureJourney() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })
  const pathLength = useTransform(scrollYProgress, [0, 1], [0.02, 1])

  return (
    <div ref={ref} className="relative max-w-5xl mx-auto">
      {/* Curvy animated beam (desktop) */}
      <svg
        className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 h-full w-[180px] z-0"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d={BEAM_PATH} stroke="#FFE0D2" strokeWidth="2" />
        <motion.path
          d={BEAM_PATH}
          stroke="url(#beamGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          style={{ pathLength }}
        />
        <defs>
          <linearGradient id="beamGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF6A3D" />
            <stop offset="50%" stopColor="#FF8A5F" />
            <stop offset="100%" stopColor="#FFB59A" />
          </linearGradient>
        </defs>
      </svg>

      {/* Cards alternating left / right */}
      <div className="relative z-10 flex flex-col gap-10 md:gap-24">
        {FEATURES.map((f, i) => {
          const left = i % 2 === 0
          return (
            <div key={i} className="relative md:grid md:grid-cols-2 md:items-center">
              {/* Beam node */}
              <span className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary-500 ring-4 ring-primary-100 z-20 shadow-[0_0_16px_rgba(255,106,61,0.5)]" />

              <div
                style={{ perspective: 1100 }}
                className={left ? 'md:pr-16' : 'md:pl-16 md:col-start-2'}
              >
                <motion.div
                  initial={{ opacity: 0, x: left ? -70 : 70, rotateY: left ? 18 : -18, scale: 0.96 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-90px' }}
                  transition={{ type: 'spring', stiffness: 55, damping: 15 }}
                  className="group p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-500 will-change-transform"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <h3 className="font-display font-700 text-gray-900 text-lg mb-3 leading-tight">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-body">{f.desc}</p>
                </motion.div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
