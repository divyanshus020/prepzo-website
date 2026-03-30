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
      className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-6 transition-all duration-500`}
    >
      <div className={`w-full max-w-[1000px] flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${navBg ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(255,69,0,0.08)] border border-orange-100/50' : 'bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(255,69,0,0.05)] border border-orange-50/30'
        }`}>

        {/* Logo (Left) */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center gap-1 group">
            <span className="font-display font-900 text-2xl tracking-tighter text-gray-900 flex items-baseline pointer-events-none group-hover:scale-105 transition-transform duration-300">
              Prep<span className="text-[#ff4500]">zo</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff4500] ml-1 mb-1.5" />
            </span>
          </Link>
        </div>

        {/* Desktop nav (Center) */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.label} to={item.href} className="nav-link text-xs font-700 text-gray-500 hover:text-gray-900 uppercase tracking-widest transition-colors">{item.label}</Link>
          ))}
        </div>

        {/* Action (Right) */}
        <div className="hidden md:flex flex-1 justify-end items-center">
          <Link to="/contact" className="bg-[#ff4500] text-white px-7 py-3 rounded-full font-display font-700 text-xs hover:bg-[#d33a00] transition-transform shadow-[0_8px_20px_rgb(255,69,0,0.3)] hover:shadow-[0_8px_25px_rgb(255,69,0,0.4)] hover:-translate-y-0.5 active:scale-95 active:translate-y-0">
            Book Demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex-1 flex justify-end p-2 text-gray-700 hover:bg-primary-50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} className="ml-auto" /> : <Menu size={22} className="ml-auto" />}
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

