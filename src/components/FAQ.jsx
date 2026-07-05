import { Plus, HelpCircle } from 'lucide-react'
import { faqs } from '../data/faq'

// Accessible, keyboard-friendly FAQ using native <details>/<summary>.
// Mirrors data/faq.js which also feeds the FAQPage JSON-LD.
export default function FAQ() {
  return (
    <section id="faq" className="py-28 px-6 mesh-bg relative border-t border-gray-100">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <span className="tag">
              <HelpCircle size={13} />
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-800 text-gray-900 mb-4">
            Questions, <span className="gradient-text">answered.</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto font-body">
            What Prepzo is, who it is for, and how the AI actually helps students and institutions.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group bg-white border border-gray-100 rounded-2xl px-6 py-5 shadow-sm open:shadow-md transition-shadow [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display font-700 text-gray-900 text-base md:text-lg">
                {f.q}
                <Plus
                  size={20}
                  className="flex-shrink-0 text-primary-500 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed font-body">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
