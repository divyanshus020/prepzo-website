import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

// Coral squircle Prepzo mark — chat-bubble silhouette with AI spark
function PrepzoMark({ size = 28 }) {
  return (
    <svg viewBox="0 0 160 160" width={size} height={size} aria-hidden="true">
      <path d="M40 4 H120 a36 36 0 0 1 36 36 V120 a36 36 0 0 1 -36 36 H40 a36 36 0 0 1 -36 -36 V40 a36 36 0 0 1 36 -36 Z" fill="#FF6A3D" />
      <path d="M44 36 H116 a16 16 0 0 1 16 16 V92 a16 16 0 0 1 -16 16 H78 L62 130 V108 H44 a16 16 0 0 1 -16 -16 V52 a16 16 0 0 1 16 -16 Z" fill="#FAF7F2" />
      <path d="M80 56 L86 70 L100 76 L86 82 L80 96 L74 82 L60 76 L74 70 Z" fill="#FF6A3D" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-3 left-0 right-0 z-50 flex justify-center px-6"
    >
      <div className={`w-full max-w-[1100px] flex items-center justify-between pl-5 pr-2 py-2 rounded-full transition-all duration-500 backdrop-blur-md ${scrolled
        ? 'bg-paper/80 border border-ink/10 shadow-[0_8px_30px_rgba(14,17,22,0.06)]'
        : 'bg-paper/60 border border-ink/5 shadow-[0_4px_24px_rgba(14,17,22,0.04)]'
        }`}>

        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 group pl-1">
          <PrepzoMark size={28} />
          <span className="font-display font-700 text-lg tracking-[-0.04em] text-ink group-hover:text-coral-2 transition-colors">
            prepzo
          </span>
        </Link>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-9">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium text-[#2A2F36] hover:text-coral-2 transition-colors tracking-tight"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA cluster */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://beta.prepzo.space"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-coral-2/10 text-coral-2 border border-coral-2/30 px-4 py-2.5 rounded-full font-semibold text-sm tracking-tight hover:bg-coral-2 hover:text-paper hover:-translate-y-0.5 transition-all"
          >
            <Sparkles size={14} /> Try Beta
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-2.5 rounded-full font-medium text-sm tracking-tight hover:-translate-y-0.5 transition-all shadow-[0_10px_24px_-10px_rgba(14,17,22,0.5)]"
          >
            Talk to us <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-ink hover:bg-ink/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-[68px] left-6 right-6 glass rounded-2xl shadow-md-soft overflow-hidden"
          >
            <div className="p-5 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 text-base font-medium text-ink hover:bg-ink/5 rounded-xl transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://beta.prepzo.space"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 bg-coral-2/10 text-coral-2 border border-coral-2/30 px-5 py-3 rounded-full font-semibold text-sm"
              >
                <Sparkles size={14} /> Try Beta
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-ink text-paper px-5 py-3 rounded-full font-medium text-sm"
              >
                Talk to us <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
