import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

async function submitToSupabase(data) {
  try {
    const res = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/contact_submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify(data),
    })
    return res.ok
  } catch { return false }
}

export default function Contact() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', institution: '', role: 'university', message: '' })
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100)
          })
        }
      })
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const ok = await submitToSupabase({ ...form, submitted_at: new Date().toISOString() })
    setStatus(ok ? 'success' : 'error')
  }

  return (
    <section id="contact" ref={ref} className="py-28 mesh-bg relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="reveal flex justify-center mb-4">
            <span className="tag"><Mail size={13} />Get In Touch</span>
          </div>
          <h2 className="reveal text-4xl md:text-5xl font-display font-800 text-gray-900 leading-tight mb-5">
            Let's Talk <span className="gradient-text">Readiness</span>
          </h2>
          <p className="reveal text-lg text-gray-500 max-w-xl mx-auto font-body">
            Universities, TPO cells, and students — drop us a line. We'll get back to you within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="space-y-6">
            <div className="reveal space-y-5">
              {[
                { icon: <Mail size={18} />, label: 'Email', value: 'connect@prepzo.space', href: 'mailto:connect@prepzo.space' },
                { icon: <Phone size={18} />, label: 'Phone', value: '+91 6378763168', href: 'tel:+916378763168' },
                { icon: <MapPin size={18} />, label: 'Location', value: 'India — Serving Universities Pan-India', href: null },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600 flex-shrink-0">{c.icon}</div>
                  <div>
                    <p className="text-xs text-gray-400 font-body mb-0.5 uppercase tracking-wider">{c.label}</p>
                    {c.href ? <a href={c.href} className="text-gray-800 font-body text-sm hover:text-primary-600 transition-colors">{c.value}</a>
                      : <p className="text-gray-800 font-body text-sm">{c.value}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h4 className="font-display font-700 text-gray-900 mb-1">Who Should Reach Out?</h4>
              <p className="text-gray-400 text-xs font-body mb-5">Prepzo is built for institutions and the students inside them</p>
              <div className="space-y-3">
                {[
                  { emoji: '🏛️', title: 'Universities & Placement Cells', desc: 'Cohort-level readiness mapping and a TPO command centre' },
                  { emoji: '🧭', title: 'TPO Officers', desc: 'Department heatmaps, weekly deltas, and the names that need attention' },
                  { emoji: '🎓', title: 'Students', desc: 'Map your strengths, find your gaps, build a readiness profile that lasts' },
                ].map((w, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors">
                    <span className="text-xl">{w.emoji}</span>
                    <div>
                      <p className="text-sm font-display font-600 text-gray-800">{w.title}</p>
                      <p className="text-xs text-gray-400 font-body">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={48} className="text-primary-500 mb-4" />
                  <h3 className="font-display font-700 text-xl text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 font-body text-sm">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display font-700 text-lg text-gray-900 mb-2">Send us a message</h3>
                  <div>
                    <label className="text-xs font-display font-600 text-gray-400 uppercase tracking-wider mb-2 block">I am a...</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { key: 'university', label: 'University' },
                        { key: 'tpo', label: 'TPO Cell' },
                        { key: 'student', label: 'Student' },
                      ].map((r) => (
                        <button key={r.key} type="button" onClick={() => setForm({ ...form, role: r.key })}
                          className={`py-2 px-3 rounded-lg text-sm font-display font-600 border transition-all ${form.role === r.key ? 'bg-primary-600 text-white border-primary-600' : 'bg-gray-50 text-gray-500 border-gray-100 hover:border-primary-200 hover:text-primary-600'}`}>
                          {r.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[{ name: 'name', label: 'Full Name', placeholder: 'Your name', type: 'text' }, { name: 'email', label: 'Email', placeholder: 'you@example.com', type: 'email' }].map((f) => (
                      <div key={f.name}>
                        <label className="text-xs font-display font-600 text-gray-400 uppercase tracking-wider mb-2 block">{f.label}</label>
                        <input type={f.type} name={f.name} value={form[f.name]} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                          placeholder={f.placeholder} required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 font-body placeholder-gray-300 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="text-xs font-display font-600 text-gray-400 uppercase tracking-wider mb-2 block">Institution / Company</label>
                    <input type="text" name="institution" value={form.institution} onChange={(e) => setForm({ ...form, institution: e.target.value })}
                      placeholder="Your university or company"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 font-body placeholder-gray-300 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all" />
                  </div>
                  <div>
                    <label className="text-xs font-display font-600 text-gray-400 uppercase tracking-wider mb-2 block">Message</label>
                    <textarea name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4} placeholder="Tell us what you're looking for..." required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 font-body placeholder-gray-300 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all resize-none" />
                  </div>
                  <button type="submit" disabled={status === 'loading'} className="btn-primary w-full justify-center">
                    {status === 'loading' ? <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Sending...</span>
                      : <><Send size={16} />Send Message</>}
                  </button>
                  {status === 'error' && <p className="text-rose-500 text-xs text-center font-body">Something went wrong. Please email us directly.</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
