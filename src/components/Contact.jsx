import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

// Supabase client — replace with your actual keys
const SUPABASE_URL = 'https://your-project.supabase.co'
const SUPABASE_ANON_KEY = 'your-anon-key'

async function submitToSupabase(data) {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/contact_submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify(data),
    })
    return res.ok
  } catch {
    return false
  }
}

export default function Contact() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', institution: '', role: 'student', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const ok = await submitToSupabase({ ...form, submitted_at: new Date().toISOString() })
    setStatus(ok ? 'success' : 'error')
  }

  return (
    <section id="contact" ref={ref} className="py-28 bg-gray-50/60 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex justify-center mb-4">
            <span className="tag">
              <Mail size={13} />
              Get In Touch
            </span>
          </div>
          <h2 className="reveal text-4xl md:text-5xl font-display font-800 text-gray-900 leading-tight mb-5">
            Ready to Transform{' '}
            <span className="gradient-text">Your Placements?</span>
          </h2>
          <p className="reveal text-lg text-gray-500 max-w-xl mx-auto font-body">
            Whether you're a university, a student, or a recruiter — let's talk about how Prepzo can work for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — contact info */}
          <div className="space-y-8">
            <div className="reveal">
              <h3 className="font-display font-700 text-xl text-gray-900 mb-6">Let's Build Together</h3>
              <div className="space-y-5">
                {[
                  { icon: <Mail size={18} />, label: 'Email', value: 'sharmadivyanshu281@gmail.com', href: 'mailto:sharmadivyanshu281@gmail.com' },
                  { icon: <Phone size={18} />, label: 'Phone', value: '+91 6378763168', href: 'tel:+916378763168' },
                  { icon: <MapPin size={18} />, label: 'Location', value: 'India — Targeting Pan-India Universities', href: null },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-body mb-0.5">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-gray-800 font-body text-sm hover:text-purple-600 transition-colors">{c.value}</a>
                      ) : (
                        <p className="text-gray-800 font-body text-sm">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* GTM phases */}
            <div className="reveal bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h4 className="font-display font-700 text-gray-900 mb-4">Our Go-To-Market Journey</h4>
              <div className="space-y-4">
                {[
                  { phase: '01 Launch', desc: 'Pilot programs at Tier-2 & Tier-3 universities', active: true },
                  { phase: '02 Prove', desc: 'Demonstrate improved readiness within one semester', active: false },
                  { phase: '03 Scale', desc: 'Convert pilots into multi-year SaaS contracts', active: false },
                ].map((p, i) => (
                  <div key={i} className={`flex items-start gap-3 p-3 rounded-xl transition-colors ${p.active ? 'bg-purple-50' : ''}`}>
                    <span className={`text-xs font-display font-700 px-2.5 py-1 rounded-full flex-shrink-0 ${p.active ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                      {p.phase}
                    </span>
                    <p className="text-sm text-gray-600 font-body pt-0.5">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Funding ask */}
            <div className="reveal gradient-border">
              <div className="bg-white rounded-2xl p-6">
                <p className="text-xs text-gray-400 font-body mb-1 uppercase tracking-widest">Current Raise</p>
                <p className="text-2xl font-display font-800 gradient-text mb-2">₹15L – ₹40L</p>
                <p className="text-sm text-gray-500 font-body">To finalize the MVP, execute initial pilot partnerships, and ignite the data flywheel.</p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={48} className="text-purple-500 mb-4" />
                  <h3 className="font-display font-700 text-xl text-gray-900 mb-2">Message Received!</h3>
                  <p className="text-gray-500 font-body text-sm">We'll get back to you within 24 hours. Thank you for your interest in Prepzo.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display font-700 text-lg text-gray-900 mb-6">Send us a message</h3>

                  {/* Role selector */}
                  <div>
                    <label className="text-xs font-display font-600 text-gray-500 uppercase tracking-wider mb-2 block">I am a...</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['student', 'university', 'recruiter'].map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setForm({ ...form, role: r })}
                          className={`py-2 px-3 rounded-lg text-sm font-display font-600 border transition-all capitalize ${
                            form.role === r
                              ? 'bg-purple-600 text-white border-purple-600'
                              : 'bg-gray-50 text-gray-500 border-gray-100 hover:border-purple-200 hover:text-purple-600'
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name + Email */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'name', label: 'Full Name', placeholder: 'Divyanshu Sharma', type: 'text' },
                      { name: 'email', label: 'Email', placeholder: 'you@university.ac.in', type: 'email' },
                    ].map((f) => (
                      <div key={f.name}>
                        <label className="text-xs font-display font-600 text-gray-500 uppercase tracking-wider mb-2 block">{f.label}</label>
                        <input
                          type={f.type}
                          name={f.name}
                          value={form[f.name]}
                          onChange={handleChange}
                          placeholder={f.placeholder}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 font-body placeholder-gray-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Institution */}
                  <div>
                    <label className="text-xs font-display font-600 text-gray-500 uppercase tracking-wider mb-2 block">Institution / Company</label>
                    <input
                      type="text"
                      name="institution"
                      value={form.institution}
                      onChange={handleChange}
                      placeholder="Your university or company name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 font-body placeholder-gray-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-display font-600 text-gray-500 uppercase tracking-wider mb-2 block">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your placement challenges or what you're looking for..."
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 font-body placeholder-gray-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full justify-center"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>

                  {status === 'error' && (
                    <p className="text-rose-500 text-xs text-center font-body">Something went wrong. Please email us directly.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
    </section>
  )
}
