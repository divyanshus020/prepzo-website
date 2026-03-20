import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us when using Prepzo. This includes:

• Account Information: Name, email address, institution name, and role (student, university administrator, recruiter).
• Resume & Profile Data: Resume content, academic background, target roles, and skills that you upload for AI interview personalisation.
• Interview Session Data: Responses given during AI mock interviews, performance scores, feedback received, and improvement metrics.
• Communication Data: Messages you send via our contact forms or support channels.
• Usage Data: Pages visited, features used, session duration, and device information collected automatically.`
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:

• Provide and personalise AI mock interview sessions based on your resume and target role.
• Generate skill gap analyses, readiness scores, and improvement roadmaps.
• Provide university placement cells with anonymised and aggregated cohort analytics.
• Improve the accuracy and quality of our AI interview and evaluation models.
• Communicate with you about your account, updates, and support requests.
• Send service-related notifications (not marketing, unless you opt in).
• Comply with legal obligations.`
  },
  {
    title: '3. Data Sharing & Disclosure',
    content: `We do not sell your personal information. We may share your data only in the following circumstances:

• With Your University: Placement cells and administrators from your institution may see your readiness scores and aggregated performance data as part of the institutional dashboard. Individual detailed responses are not shared without your consent.
• With Recruiters: Only if you explicitly opt in to the recruiter talent visibility feature.
• Service Providers: We work with trusted third-party providers (cloud hosting, analytics) who process data only on our behalf and under strict data processing agreements.
• Legal Requirements: We may disclose data when required by law, court order, or governmental authority.`
  },
  {
    title: '4. Data Retention',
    content: `We retain your personal data for as long as your account remains active, or as needed to provide our services. Interview session data and performance records are retained for up to 3 years to enable historical progress tracking. You may request deletion of your account and associated data at any time by contacting us at connect@prepzo.space.`
  },
  {
    title: '5. Data Security',
    content: `We implement industry-standard security measures to protect your data, including encrypted data transmission (TLS/SSL), encrypted data storage, access controls limiting who within Prepzo can access your data, and regular security audits. No system is completely secure. If you suspect unauthorised access to your account, please contact us immediately.`
  },
  {
    title: '6. Your Rights',
    content: `You have the right to:

• Access the personal data we hold about you.
• Request correction of inaccurate data.
• Request deletion of your personal data ("right to be forgotten").
• Object to or restrict how we process your data.
• Data portability — receive your data in a structured, machine-readable format.

To exercise any of these rights, contact us at connect@prepzo.space. We will respond within 30 days.`
  },
  {
    title: '7. Cookies',
    content: `Prepzo uses cookies and similar tracking technologies to maintain session state, remember your preferences, and understand how our platform is used. You can control cookie settings through your browser. Disabling certain cookies may affect functionality.`
  },
  {
    title: '8. Children\'s Privacy',
    content: `Prepzo is designed for university students (typically 18 years and older) and institutional users. We do not knowingly collect personal information from individuals under 18. If you believe a minor has provided us with their information, please contact us immediately.`
  },
  {
    title: '9. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify registered users of material changes via email and update the "Last Updated" date on this page. Continued use of Prepzo after changes constitutes acceptance of the updated policy.`
  },
  {
    title: '10. Contact Us',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy, please contact:\n\nDivyanshu Sharma — Founder, Prepzo\nEmail: connect@prepzo.space\nPhone: +91 6378763168`
  },
]

export default function Privacy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="tag mb-4 inline-flex">Legal</span>
            <h1 className="text-4xl md:text-5xl font-display font-800 text-gray-900 mb-3">Privacy Policy</h1>
            <p className="text-gray-400 font-body text-sm">Last updated: March 2026 · Effective immediately upon use of Prepzo.</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-purple-50 border border-purple-100 rounded-2xl p-6 mb-10">
          <p className="text-purple-700 font-body text-sm leading-relaxed">
            <strong className="font-display">Your privacy matters to us.</strong> Prepzo is built on trust — with students sharing their career data, universities sharing cohort data, and recruiters sharing hiring needs. We take that responsibility seriously and are committed to being transparent about how your data is collected, used, and protected.
          </p>
        </motion.div>

        <div className="space-y-10">
          {sections.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 * i }}>
              <h2 className="font-display font-700 text-xl text-gray-900 mb-3">{s.title}</h2>
              <div className="text-gray-500 font-body text-sm leading-relaxed whitespace-pre-line">{s.content}</div>
              {i < sections.length - 1 && <div className="mt-8 h-px bg-gray-100" />}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap gap-4 items-center justify-between">
          <p className="text-gray-400 text-sm font-body">© 2026 Prepzo</p>
          <div className="flex gap-4">
            <Link to="/terms" className="text-purple-600 text-sm font-body hover:underline">Terms of Service</Link>
            <Link to="/contact" className="text-purple-600 text-sm font-body hover:underline">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
