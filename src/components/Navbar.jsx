import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import prepzoLogo from '../assets/prepzo_logo.png'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navBg = scrolled || !isHome

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg ? 'glass shadow-lg shadow-orange-100/50' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 group">
          <span className="font-display font-900 text-3xl tracking-tighter text-gray-900 flex items-baseline pointer-events-none group-hover:scale-105 transition-transform duration-300">
            Prep<span className="text-[#ff4500]">zo</span>
            <div className="w-2 h-2 rounded-full bg-[#ff4500] ml-1 mb-1.5" />
          </span>
        </Link>

        {/* Desktop nav & Action */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 mr-4">
            {navItems.map((item) => (
              <Link key={item.label} to={item.href} className="nav-link text-sm font-medium uppercase tracking-wide">{item.label}</Link>
            ))}
          </div>
          <Link to="/contact" className="bg-[#ff4500] text-white px-6 py-2.5 rounded-xl font-display font-700 text-xs hover:bg-[#d33a00] transition-all shadow-lg shadow-orange-600/20 active:scale-95">
            Book Demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-primary-50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-primary-100"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <Link key={item.label} to={item.href} className="text-gray-700 font-medium hover:text-primary-600 transition-colors py-1" onClick={() => setMobileOpen(false)}>{item.label}</Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

