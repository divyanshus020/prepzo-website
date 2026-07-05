import { useEffect, useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { Linkedin, ArrowRight, Brain, Target, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Seo, { breadcrumbLd } from '../components/Seo'
import founderAvatar from '../assets/Divyanshu.jpeg'
import CoAvatar from '../assets/Akshay.jpeg'
import Arjun from '../assets/Arjun.jpeg'

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

/* ---------- 3D hero centrepiece: a distorted "mind" blob ---------- */
function MindBlob() {
  const mesh = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (!mesh.current) return
    // slow auto-spin + gentle pointer parallax
    mesh.current.rotation.y = t * 0.18 + state.pointer.x * 0.4
    mesh.current.rotation.x = state.pointer.y * -0.3
  })
  return (
    <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.4}>
      <mesh ref={mesh} scale={1.55}>
        <icosahedronGeometry args={[1, 12]} />
        <MeshDistortMaterial
          color="#FF6A3D"
          distort={0.42}
          speed={1.8}
          roughness={0.15}
          metalness={0.35}
          emissive="#E8501F"
          emissiveIntensity={0.12}
        />
      </mesh>
    </Float>
  )
}

function SatelliteRing() {
  return (
    <Float speed={3} rotationIntensity={1.4} floatIntensity={2}>
      <mesh position={[2.1, 1.3, -1]} rotation={[0.6, 0.2, 0]}>
        <torusGeometry args={[0.42, 0.13, 24, 80]} />
        <meshStandardMaterial color="#FF8A5F" roughness={0.25} metalness={0.5} />
      </mesh>
    </Float>
  )
}

function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 5, 5]} intensity={1.4} />
      <pointLight position={[-4, -2, 2]} intensity={2} color="#FFB59A" />
      <pointLight position={[3, -3, -2]} intensity={1.5} color="#FF6A3D" />
      <MindBlob />
      <SatelliteRing />
    </Canvas>
  )
}

/* ---------- 3D tilt-on-hover card ---------- */
function TiltCard({ children, className, delay = 0 }) {
  const ref = useRef(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const sx = useSpring(rx, { stiffness: 150, damping: 16 })
  const sy = useSpring(ry, { stiffness: 150, damping: 16 })

  function onMove(e) {
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    ry.set(px * 10)
    rx.set(-py * 10)
  }
  function onLeave() {
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX: sx, rotateY: sy, transformPerspective: 1200 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* small reusable scroll-in wrapper */
function Reveal({ children, className, delay = 0, y = 40 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  // parallax for hero copy as you scroll away
  const heroRef = useRef(null)
  const { scrollYProgress: heroP } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroTextY = useTransform(heroP, [0, 1], [0, -120])
  const heroFade = useTransform(heroP, [0, 0.7], [1, 0])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-cream pt-20 overflow-hidden font-body">
      <Seo
        title="About Prepzo | The AI Brain-Mapping Platform for Education"
        description="Prepzo builds the brain map students never had — an AI skill analyser and human capital intelligence platform powered by our own 120B model. Meet the founders."
        path="/about"
        keywords="About Prepzo, Prepzo founders, AI brain mapping, education intelligence, human capital intelligence platform, Divyanshu Sharma"
        jsonLd={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-1 origin-left z-[60] bg-gradient-to-r from-primary-500 via-orange-400 to-primary-600"
      />

      {/* Background blueprint grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* ===== Hero with live 3D ===== */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-center px-6 overflow-hidden">
        {/* warm ambient glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(255,106,61,0.14) 0%, transparent 55%)' }}
        />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center relative z-10">
          {/* Copy */}
          <motion.div style={{ y: heroTextY, opacity: heroFade }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-gray-200 rounded-full px-4 py-2 shadow-sm mb-8"
            >
              <Sparkles size={14} className="text-primary-600" />
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">About Prepzo</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-800 text-[#1a1a2e] leading-[1.03] mb-6"
            >
              We're building the{' '}
              <span className="gradient-text">brain map</span>{' '}
              students never had.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed mb-8"
            >
              Prepzo is a skill analyser and brain-mapping platform built for universities and TPO cells. Behind it sits Prepzo AI — our own 120B-parameter model, fine-tuned for cognitive assessment, not chat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <Link to="/contact" className="btn-primary">Talk to us <ArrowRight size={18} /></Link>
            </motion.div>
          </motion.div>

          {/* 3D object */}
          <div className="relative h-[360px] sm:h-[440px] lg:h-[560px]">
            <HeroScene />
          </div>
        </div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="w-5 h-8 rounded-full border-2 border-gray-300 flex justify-center pt-1.5"
          >
            <span className="w-1 h-1.5 rounded-full bg-primary-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== Mission ===== */}
      <section className="py-28 px-6 bg-white/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <Reveal className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 border border-primary-100 rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
                Why we exist
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-800 text-gray-900 leading-tight">
                Curriculum is generic. <span className="gradient-text">Students aren't.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed font-medium italic border-l-4 border-primary-200 pl-6">
                "India produces 5 million graduates every year — yet only ~45% are considered employable. The system doesn't lack effort. It lacks a per-student map of what each one actually knows."
              </p>
            </Reveal>
            <Reveal delay={0.15} className="space-y-6 text-gray-500 font-body text-lg leading-relaxed">
              <p>Prepzo is the answer to that gap. We give every student a precise, evolving map of their strengths and weak areas — and we give the TPO cell a department-wide view of where the cohort actually stands, week by week.</p>
              <p>Behind the scenes sits <strong className="text-gray-900">Prepzo AI</strong>, our own 120 billion parameter language model, tuned for structured cognitive assessment. The result is a platform that doesn't guess — it measures, maps, and tells the institution what to do next.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Pillars ===== */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Reveal><h2 className="text-3xl md:text-4xl font-display font-800 text-gray-900 mb-4">Three pillars, <span className="text-primary-600 italic font-display">nothing more.</span></h2></Reveal>
            <Reveal delay={0.1}><p className="text-gray-500 max-w-xl mx-auto">How we decide what ships and what doesn't.</p></Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6" style={{ perspective: 1200 }}>
            {[
              { icon: <Brain size={22} />, title: 'Map first, drill later', desc: 'A drill is only useful if it closes a real gap. Every interaction in Prepzo refines the per-student map before it prescribes anything.' },
              { icon: <Target size={22} />, title: 'Honest, not nice', desc: 'A readiness profile that overstates is worse than no profile. We grade on the same rubric an institution would defend in front of a committee.' },
              { icon: <Sparkles size={22} />, title: 'Built for the institution', desc: 'Students benefit individually. But Prepzo is designed for the TPO cell — semester-long signal, cohort-level decisions, real follow-through.' },
            ].map((p, i) => (
              <TiltCard
                key={i}
                delay={i * 0.12}
                className="group relative p-8 bg-white border border-gray-100 rounded-3xl shadow-[0_2px_20px_-8px_rgba(14,17,22,0.08)] hover:shadow-[0_30px_60px_-25px_rgba(255,106,61,0.3)] transition-shadow duration-500 overflow-hidden"
              >
                <span className="absolute top-5 right-6 font-display font-800 text-5xl text-gray-900/[0.04] group-hover:text-primary-500/[0.12] transition-colors select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-600 to-orange-500 flex items-center justify-center text-white mb-5 shadow-md group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-500">
                  {p.icon}
                </div>
                <h3 className="font-display font-700 text-gray-900 text-lg mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Co-founders ===== */}
      <section className="py-28 px-6 bg-white/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Reveal className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 border border-primary-100 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                The Founders
              </span>
            </Reveal>
            <Reveal delay={0.1}><h2 className="text-3xl md:text-4xl font-display font-800 text-gray-900 mb-4">Three people. <span className="text-primary-600 italic font-display">One mission.</span></h2></Reveal>
            <Reveal delay={0.2}><p className="text-gray-500 max-w-xl mx-auto">The team building Prepzo from the ground up.</p></Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cofounders.map((p, i) => (
              <TiltCard
                key={i}
                delay={i * 0.12}
                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-shadow duration-500 overflow-hidden flex flex-col"
              >
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
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Quote / Signoff ===== */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="w-16 h-1 max-w-[80px] bg-primary-200 mx-auto rounded-full mb-12" />
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-800 text-[#1a1a2e] leading-snug mb-10 lowercase">
              "first we map the <em className="text-primary-600">mind</em>, then we close the <em className="text-primary-600">gap</em>."
            </h3>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex justify-center">
              <Link to="/contact" className="btn-primary scale-110">Talk to us <ArrowRight size={18} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
