import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Contact from '../components/Contact'
import { Mail, Phone, MapPin, Github } from 'lucide-react'

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="py-16 mesh-bg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex justify-center mb-4">
            <span className="tag"><Mail size={13} />Contact</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-800 text-gray-900 mb-4">
            Get In <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
            className="text-gray-500 font-body text-lg max-w-lg mx-auto">
            We respond within 24 hours. No automated responses — just real people who care.
          </motion.p>
        </div>
      </div>
      <Contact />
    </div>
  )
}
