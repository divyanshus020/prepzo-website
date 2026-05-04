import { Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-orange-700/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-700/10 blur-[120px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col items-center text-center">
          {/* Logo Section — coral squircle mark + wordmark */}
          <Link to="/" className="flex items-center gap-3 mb-8 group">
            <svg viewBox="0 0 160 160" width="40" height="40" aria-hidden="true" className="group-hover:scale-105 transition-transform duration-500">
              <path d="M40 4 H120 a36 36 0 0 1 36 36 V120 a36 36 0 0 1 -36 36 H40 a36 36 0 0 1 -36 -36 V40 a36 36 0 0 1 36 -36 Z" fill="#FF6A3D" />
              <path d="M44 36 H116 a16 16 0 0 1 16 16 V92 a16 16 0 0 1 -16 16 H78 L62 130 V108 H44 a16 16 0 0 1 -16 -16 V52 a16 16 0 0 1 16 -16 Z" fill="#FAF7F2" />
              <path d="M80 56 L86 70 L100 76 L86 82 L80 96 L74 82 L60 76 L74 70 Z" fill="#FF6A3D" />
            </svg>
            <span className="font-display font-700 text-3xl md:text-4xl tracking-[-0.04em] text-white">
              prepzo
            </span>
          </Link>

          {/* Slogan */}
          <h2 className="font-display font-800 text-2xl md:text-3xl lg:text-4xl text-white mb-6 leading-tight max-w-2xl">
            The skill analyser & brain-mapping platform for <span className="text-primary-400">universities.</span>
          </h2>

          <p className="text-gray-400 font-body text-base md:text-lg mb-10 max-w-xl leading-relaxed">
            Powered by Prepzo AI — our own 70B-parameter model. Built with TPO cells, for the cohorts they actually have to place.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <Link to="/contact"
              className="bg-white text-gray-950 px-8 py-4 rounded-full font-display font-700 text-sm hover:bg-primary-50 transition-all shadow-xl shadow-white/5 active:scale-95">
              Book a Free Demo
            </Link>
            <a href="https://www.linkedin.com/in/divyanshu-sharma-2a0060244/" target="_blank" rel="noopener noreferrer"
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
                className="text-gray-500 hover:text-primary-400 text-sm font-medium transition-colors"
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
