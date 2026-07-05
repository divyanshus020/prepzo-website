// Single source of truth for homepage FAQ — rendered visibly AND emitted as
// FAQPage JSON-LD, so structured data always matches on-page content.
export const faqs = [
  {
    q: 'What is Prepzo?',
    a: 'Prepzo is an AI-native learning and human capital intelligence platform for schools and universities. It maps each student’s cognitive strengths, gaps, and career readiness, and gives teachers and placement cells a clear, cohort-level view of where everyone actually stands.',
  },
  {
    q: 'What is Prepzo AI?',
    a: 'Prepzo AI is our own 120-billion-parameter model, fine-tuned for structured cognitive assessment and career guidance rather than open-ended chat. It powers the brain-mapping, mock interviews, and readiness scoring across the platform.',
  },
  {
    q: 'Who is Prepzo built for?',
    a: 'Prepzo is built for schools, universities, and TPO/placement cells, along with the students and teachers inside them. It is designed specifically for the Indian education context.',
  },
  {
    q: 'How does Prepzo help with placements and employability?',
    a: 'Prepzo runs AI mock interviews, adaptive aptitude testing, technical-round preparation, and cognitive mapping. Together these give placement cells a semester-long employability signal, so they can act on gaps before the season instead of after it.',
  },
  {
    q: 'Is Prepzo free for students?',
    a: 'Students never pay. Prepzo is provided to students through their institution, so the school or university is the customer, not the learner.',
  },
]

export function faqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}
