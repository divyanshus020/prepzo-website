import Seo from '../components/Seo'
import { faqJsonLd } from '../data/faq'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Solution from '../components/Solution'
import AudienceSection from '../components/AudienceSection'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Seo
        title="Prepzo | AI Learning & Human Capital Intelligence Platform"
        description="Prepzo is an AI-native learning and human capital intelligence platform for schools and universities — mapping student strengths, gaps, and career readiness."
        path="/"
        keywords="Prepzo, Prepzo AI, AI learning platform, human capital intelligence platform, education intelligence, AI for schools, AI for colleges, AI teacher assistant, student intelligence, employability intelligence, career intelligence"
        jsonLd={faqJsonLd()}
      />
      <Hero />
      <Problem />
      <Solution />
      <AudienceSection />
      <HowItWorks />
      <Features />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
