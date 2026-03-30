import { Zap, Linkedin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import prepzoLogo from '../assets/prepzo_logo.png'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-700/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-700/10 blur-[120px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col items-center text-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2.5 mb-8 group">
            <img src={prepzoLogo} alt="Prepzo" className="h-14 w-auto group-hover:scale-105 transition-transform duration-500 hover:brightness-110" />
          </Link>

          {/* Slogan */}
          <h2 className="font-display font-800 text-2xl md:text-3xl lg:text-4xl text-white mb-6 leading-tight max-w-2xl">
            The AI Career Operating System for <span className="text-purple-400">Universities.</span>
          </h2>

          <p className="text-gray-400 font-body text-base md:text-lg mb-10 max-w-xl leading-relaxed">
            Preparing India's next generation for the future of work through realistic AI mock interviews and deep placement analytics.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <Link to="/contact"
              className="bg-white text-gray-950 px-8 py-4 rounded-full font-display font-700 text-sm hover:bg-purple-50 transition-all shadow-xl shadow-white/5 active:scale-95">
              Book a Free Demo
            </Link>
            <a href="https://www.linkedin.com/in/sharma-divyanshu/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white font-display font-700 text-sm hover:bg-white/5 transition-all active:scale-95">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>

          {/* Quick links as small tags */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16 py-8 border-y border-white/5 w-full max-w-3xl">
            {[
              { label: 'Privacy Policy', to: '/privacy' },
              { label: 'Terms of Service', to: '/terms' },
              { label: 'Contact Us', to: '/contact' },
              { label: 'About', to: '/about' },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-gray-500 hover:text-purple-400 text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
          <p className="text-gray-600 text-xs font-body tracking-wider">
            © 2026 PREPZO · ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em]">Service Operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
