import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const sections = [
  { title: '1. Acceptance of Terms', content: `By accessing or using Prepzo ("the Platform"), you agree to be bound by these Terms of Service. If you are using Prepzo on behalf of a university or organisation, you represent that you have authority to bind that organisation to these terms.\n\nPrepzo is operated from India. These terms apply to all users including students, university administrators, placement officers, and recruiters.` },
  { title: '2. Description of Service', content: `Prepzo provides an AI-powered placement preparation ecosystem that includes:\n\n• AI-driven mock interview simulations\n• Resume ingestion and analysis\n• Skill gap identification and improvement roadmaps\n• Placement readiness scoring\n• University-level placement analytics dashboards\n• Recruiter talent discovery features\n\nFeatures may be updated, added, or removed at our discretion. We will notify users of significant changes.` },
  { title: '3. User Accounts & Eligibility', content: `To use Prepzo, you must:\n\n• Be at least 18 years of age, or a university student using the platform through your institution\n• Provide accurate, current, and complete registration information\n• Maintain the security of your account credentials\n• Notify us immediately of any unauthorised account access\n\nUniversities accessing Prepzo do so through institutional accounts administered by authorised placement officers.` },
  { title: '4. Acceptable Use', content: `You agree not to:\n\n• Use the platform for any unlawful purpose or in violation of any regulations\n• Attempt to access, reverse engineer, or copy any part of the platform's AI systems\n• Share account credentials with unauthorised users\n• Upload false, misleading, or fraudulent resume information\n• Harass, abuse, or harm other users through any platform feature\n• Use automated scripts or bots to interact with the platform\n• Attempt to disrupt or interfere with platform security or functionality\n\nViolation of these terms may result in immediate account suspension.` },
  { title: '5. Intellectual Property', content: `All content, features, AI models, design, code, and technology that form Prepzo are owned by Prepzo and protected by Indian and international intellectual property laws.\n\nYou retain ownership of the resume data and content you upload. By uploading content, you grant Prepzo a limited, non-exclusive licence to use that content solely for the purpose of providing the services (generating interviews, analysis, and reports).\n\nYou may not reproduce, distribute, or create derivative works from any part of Prepzo without express written permission.` },
  { title: '6. AI-Generated Content Disclaimer', content: `Prepzo's AI systems generate interview questions, feedback, readiness scores, and improvement suggestions. While we strive for accuracy and quality:\n\n• AI-generated feedback is for preparation purposes and does not guarantee employment outcomes\n• Placement readiness scores are indicative, not definitive measures of job readiness\n• Prepzo does not guarantee that use of the platform will result in job placement\n• Interview simulation content is generated dynamically and may vary between sessions` },
  { title: '7. University & Institutional Terms', content: `Universities accessing Prepzo under institutional SaaS agreements are subject to additional terms in their service contracts. Institutional administrators are responsible for:\n\n• Ensuring students are informed about the platform's data collection practices\n• Managing student access and account deactivation upon graduation or withdrawal\n• Using analytics dashboards only for legitimate placement improvement purposes\n• Complying with applicable student data protection laws` },
  { title: '8. Payments & Refunds', content: `Institutional SaaS subscriptions are billed annually per student. Payment terms are outlined in individual university contracts.\n\nRefund Policy: Refund requests must be submitted within 30 days of payment. Refunds are evaluated on a case-by-case basis. Prepzo reserves the right to decline refunds for services already rendered. Contact connect@prepzo.space for all billing queries.` },
  { title: '9. Limitation of Liability', content: `To the maximum extent permitted by law, Prepzo shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the platform — including but not limited to loss of employment opportunity, income, or data.\n\nOur total liability for any claim arising from these terms shall not exceed the amount you paid to Prepzo in the 12 months preceding the claim.` },
  { title: '10. Termination', content: `Either party may terminate access to Prepzo at any time. Prepzo may suspend or terminate your account immediately if you violate these terms. Upon termination:\n\n• Your access to the platform will cease\n• Data deletion will occur per our Privacy Policy retention timelines\n• Active subscription fees are non-refundable unless otherwise agreed in writing` },
  { title: '11. Governing Law', content: `These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts located in Rajasthan, India. If any provision of these terms is found unenforceable, the remaining provisions continue in full force.` },
  { title: '12. Changes to Terms', content: `We may revise these Terms at any time. Material changes will be communicated via email to registered users at least 14 days before taking effect. Continued use after changes take effect constitutes acceptance of the new terms.` },
  { title: '13. Contact', content: `For any questions about these Terms of Service:\n\nDivyanshu Sharma — Founder, Prepzo\nEmail: connect@prepzo.space\nPhone: +91 6378763168\nIndia` },
]

export default function Terms() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="tag mb-4 inline-flex">Legal</span>
            <h1 className="text-4xl md:text-5xl font-display font-800 text-gray-900 mb-3">Terms of Service</h1>
            <p className="text-gray-400 font-body text-sm">Last updated: March 2026 · By using Prepzo, you agree to these terms.</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-10">
          <p className="text-amber-700 font-body text-sm leading-relaxed">
            <strong className="font-display">Please read these terms carefully.</strong> These Terms of Service constitute a legally binding agreement between you and Prepzo. If you do not agree to these terms, please do not use the platform.
          </p>
        </motion.div>

        <div className="space-y-10">
          {sections.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.04 * i }}>
              <h2 className="font-display font-700 text-xl text-gray-900 mb-3">{s.title}</h2>
              <div className="text-gray-500 font-body text-sm leading-relaxed whitespace-pre-line">{s.content}</div>
              {i < sections.length - 1 && <div className="mt-8 h-px bg-gray-100" />}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap gap-4 items-center justify-between">
          <p className="text-gray-400 text-sm font-body">© 2026 Prepzo</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-orange-600 text-sm font-body hover:underline">Privacy Policy</Link>
            <Link to="/contact" className="text-primary-600 text-sm font-body hover:underline">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
