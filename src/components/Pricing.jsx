import { useEffect, useRef, useState } from 'react'
import { Send, CheckCircle, Sparkles } from 'lucide-react'

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

export default function Pricing() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', institution: '', cohort: '', role: 'university', message: '' })
  const [status, setStatus] = useState('idle')

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const ok = await submitToSupabase({
      name: form.name,
      email: form.email,
      institution: form.institution,
      role: form.role,
      message: `[Pricing enquiry] cohort: ${form.cohort || 'n/a'} — ${form.message}`,
      submitted_at: new Date().toISOString(),
    })
    setStatus(ok ? 'success' : 'error')
  }

  return (
    <section id="pricing" ref={ref} className="py-28 bg-gray-50/60 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <div className="reveal flex justify-center mb-4">
            <span className="tag"><Sparkles size={12} />Pricing</span>
          </div>
          <h2 className="reveal text-4xl md:text-5xl font-display font-800 text-gray-900 leading-tight mb-5">
            Built for institutions.{' '}
            <span className="gradient-text">Priced for them.</span>
          </h2>
          <p className="reveal text-lg text-gray-500 max-w-2xl mx-auto font-body">
            Every TPO cell is sized differently — every cohort is sized differently. Tell us a little about your institution and we'll send back a plan that actually fits.
          </p>
        </div>

        <div className="reveal max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={48} className="text-primary-500 mb-4" />
                <h3 className="font-display font-700 text-xl text-gray-900 mb-2">Request received.</h3>
                <p className="text-gray-500 font-body text-sm max-w-sm">We'll get back to you within one business day with a tailored plan and next steps.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-display font-700 text-lg text-gray-900 mb-1">Request access</h3>
                  <p className="text-sm text-gray-400 font-body">No tiers, no surprises. We'll come back with a plan suited to your cohort size.</p>
                </div>

                <div>
                  <label className="text-xs font-display font-600 text-gray-400 uppercase tracking-wider mb-2 block">I'm reaching out as a...</label>
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
                  <div>
                    <label className="text-xs font-display font-600 text-gray-400 uppercase tracking-wider mb-2 block">Full name</label>
                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name" required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 font-body placeholder-gray-300 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all" />
                  </div>
                  <div>
                    <label className="text-xs font-display font-600 text-gray-400 uppercase tracking-wider mb-2 block">Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@institution.edu" required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 font-body placeholder-gray-300 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-display font-600 text-gray-400 uppercase tracking-wider mb-2 block">Institution</label>
                    <input type="text" value={form.institution} onChange={(e) => setForm({ ...form, institution: e.target.value })}
                      placeholder="University / college name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 font-body placeholder-gray-300 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all" />
                  </div>
                  <div>
                    <label className="text-xs font-display font-600 text-gray-400 uppercase tracking-wider mb-2 block">Cohort size</label>
                    <select value={form.cohort} onChange={(e) => setForm({ ...form, cohort: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 font-body focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all bg-white">
                      <option value="">Select range</option>
                      <option value="<200">Under 200 students</option>
                      <option value="200-1000">200 – 1,000</option>
                      <option value="1000-5000">1,000 – 5,000</option>
                      <option value="5000+">5,000+</option>
                      <option value="na">Not applicable</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-display font-600 text-gray-400 uppercase tracking-wider mb-2 block">What are you looking to solve?</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4} placeholder="Tell us about your placement goals, current prep stack, or anything specific to your cohort." required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 font-body placeholder-gray-300 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all resize-none" />
                </div>

                <button type="submit" disabled={status === 'loading'} className="btn-primary w-full justify-center">
                  {status === 'loading'
                    ? <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Sending...</span>
                    : <><Send size={16} />Request a tailored plan</>}
                </button>
                {status === 'error' && <p className="text-rose-500 text-xs text-center font-body">Something went wrong. Please email connect@prepzo.space directly.</p>}
                <p className="text-[11px] text-gray-400 text-center font-body pt-1">We reply within one business day. No spam, no autoresponders.</p>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
    </section>
  )
}
