import { Zap, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react'

const links = {
  Product: ['AI Interviews', 'Analytics Dashboard', 'Resume Builder', 'Pricing'],
  Company: ['About Us', 'Blog', 'Careers', 'Press'],
  Resources: ['Documentation', 'Case Studies', 'API Reference', 'Support'],
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      {/* Purple glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-purple-700/20 rounded-full blur-3xl pointer-events-none" />

      {/* CTA Banner */}
      <div className="relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display font-800 text-3xl md:text-4xl text-white mb-2">
              Ready to transform{' '}
              <span className="shimmer-text">placements?</span>
            </h3>
            <p className="text-gray-400 font-body text-base">
              Join Prepzo's early university partner program. Limited spots available.
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <a href="#contact" className="btn-primary whitespace-nowrap">
              Partner With Us
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center shadow-md">
                <Zap size={18} className="text-white" fill="white" />
              </div>
              <span className="font-display font-800 text-xl text-white tracking-tight">
                Prep<span className="text-purple-400">zo</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm font-body leading-relaxed max-w-xs mb-6">
              The AI Career Operating System for Universities. Preparing India's next generation for the future of work.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Github size={16} />, href: 'https://github.com/divyanshus020' },
                { icon: <Linkedin size={16} />, href: '#' },
                { icon: <Twitter size={16} />, href: '#' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/30 hover:bg-purple-500/10 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-display font-700 text-sm text-white mb-4 tracking-wide">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 text-sm font-body hover:text-purple-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-body">
            © 2025 Prepzo · A{' '}
            <span className="text-purple-400">DCodecafe</span> Innovation · Built by{' '}
            <span className="text-purple-400">Divyanshu Sharma</span>
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((l) => (
              <a key={l} href="#" className="text-gray-500 text-xs font-body hover:text-purple-400 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
