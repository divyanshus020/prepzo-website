import { ArrowRight } from 'lucide-react'
import Seo, { breadcrumbLd } from '../components/Seo'
import PragatiHero, { PRAGATI_APP } from '../components/PragatiHero'

const WHY_PRAGATI = [
  'Validate startup ideas',
  'Build business models',
  'Create financial projections',
  'Receive AI mentorship',
  'Track startup progress',
  'Prepare for incubation and funding',
]

const NEP_THEMES = [
  'Innovation & Design Thinking',
  'Entrepreneurship Development',
  'Experiential Learning',
  'Startup Ecosystem',
  'Industry Collaboration',
  'Skill Development',
  'Problem Solving',
  'Research & Innovation Culture',
]

const JOURNEY = [
  {
    icon: '💡',
    title: 'Idea Validation',
    body: 'Understand whether your startup solves a real problem.',
  },
  {
    icon: '🚀',
    title: 'Startup Builder',
    body: 'Convert ideas into structured ventures with AI guidance.',
  },
  {
    icon: '📈',
    title: 'Business & Financial Planning',
    body: 'Generate business models, revenue plans, cost analysis and projections using AI-assisted workflows backed by deterministic calculations.',
  },
  {
    icon: '🤖',
    title: 'AI Startup Mentor',
    body: 'Receive personalized mentorship based on your startup stage instead of generic chatbot conversations.',
  },
  {
    icon: '📚',
    title: 'Workshops & Learning',
    body: 'Access entrepreneurship workshops, startup resources and guided assignments.',
  },
  {
    icon: '📊',
    title: 'Progress & Evidence Tracking',
    body: 'Track startup milestones, achievements and real-world validation through an evidence-based system.',
  },
]

const RIGOR = [
  {
    n: '01',
    title: 'Startup DNA',
    body: 'Ten strands — problem, customer, unit economics, moat, traction. Each carries how well established it is and where it came from. Confidence decays if you stop feeding it, because a traction claim from six weeks ago tells nobody anything.',
  },
  {
    n: '02',
    title: 'Financials that are computed, not written',
    body: 'The AI never does arithmetic. It extracts your assumptions; a deterministic engine builds the P&L, cost sheet, cash flow, CAC/LTV, break-even and runway. Every number traces to a formula and a named source.',
  },
  {
    n: '03',
    title: 'What actually moves the outcome',
    body: 'Swing each assumption across its range and sort by impact. Most founders discover their venture is 80% two variables, and the thing they have been arguing about is noise.',
  },
  {
    n: '04',
    title: 'A weekly board review',
    body: 'A grade, the change since last week, and three things to come back with. Evidence closes them — customer interviews, signups, revenue, letters of intent.',
  },
]

const GUARANTEES = [
  'No hallucinated financials — structurally impossible',
  'Nothing an AI says changes your numbers without you accepting it',
]

const STAKEHOLDERS = [
  { title: 'Students', body: 'Turn ideas into startups with AI guidance.' },
  { title: 'Faculty Mentors', body: 'Track startup progress and mentor students effectively.' },
  {
    title: 'Colleges & Universities',
    body: 'Strengthen Innovation Cells, Entrepreneurship Development Cells (EDC), Incubation Centres and startup initiatives with real-time analytics.',
  },
]

const PERFECT_FOR = [
  'Institution Innovation Council (IIC)',
  'Entrepreneurship Development Cell (EDC)',
  'Incubation Centres',
  'Startup Clubs',
  'Innovation Labs',
  'Engineering Colleges',
  'Universities',
  'Skill Development Centres',
]

const REASONS = [
  'AI Startup Mentor',
  'Startup Validation',
  'Business Model Builder',
  'Financial Planning Engine',
  'Evidence-Based Progress Tracking',
  'Innovation Workshops',
  'Entrepreneurship Dashboard',
  'College Analytics',
]

/* Shared surface tokens — the hero's glass card, restated for opaque sections. */
const CARD = 'rounded-[36px] border-2 border-white bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.15)]'
/* Inverted fill so cards on a white ground still read as raised. */
const CARD_WARM = 'rounded-[36px] border-2 border-white bg-[#f7f3ec] shadow-[0_0_4px_0_rgba(0,0,0,0.15)]'
const PAPER = 'bg-[#f7f3ec]'

/** Section heading: typewriter kicker, tight headline, muted lede. */
function Head({ kicker, title, lede }) {
  return (
    <>
      <p className="font-typewriter text-[15px] uppercase tracking-[0.12em] text-wandor-prompt">{kicker}</p>
      <h2 className="mt-4 max-w-[820px] font-sans text-[clamp(32px,4.5vw,52px)] font-medium leading-[1.05] tracking-[-0.04em] text-wandor-text">
        {title}
      </h2>
      {lede && (
        <p className="mt-5 max-w-[620px] font-sans text-xl font-medium leading-relaxed text-wandor-muted">{lede}</p>
      )}
    </>
  )
}

export default function Pragati() {
  return (
    <div className="bg-white font-sans">
      <Seo
        title="Pragati AI Innovation Lab by Prepzo — Innovation & Entrepreneurship for Campuses"
        description="Pragati AI is an AI-powered Innovation & Entrepreneurship platform that helps students transform ideas into real startups — idea validation, business models, financial planning, AI mentorship, workshops and progress tracking in one place. Designed to support the vision of NEP 2020."
        path="/pragati"
        keywords="Pragati AI, Prepzo, NEP 2020, innovation lab, entrepreneurship development cell, EDC, IIC, incubation centre, student startup, AI startup mentor, business model builder"
        jsonLd={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Pragati AI', path: '/pragati' },
        ])}
      />

      <PragatiHero />

      {/* ================================================= Why Pragati ===== */}
      <section id="why" className="mx-auto max-w-[1360px] px-20 py-24 max-md:px-6 max-md:py-16">
        <Head
          kicker="Why Pragati?"
          title="Innovation cannot grow with spreadsheets and PDFs."
          lede="Students need continuous mentorship, structured guidance and real-world startup experience. Pragati provides an AI-powered ecosystem where students can:"
        />

        <div className="mt-12 grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {WHY_PRAGATI.map((w) => (
            <div key={w} className={`${CARD_WARM} flex items-center gap-4 px-7 py-6 max-md:px-6`}>
              <span className="h-2 w-2 shrink-0 rounded-full bg-wandor-prompt" />
              <span className="font-sans text-[17px] font-medium text-wandor-text">{w}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================== Supporting NEP ===== */}
      <section id="nep" className={PAPER}>
        <div className="mx-auto max-w-[1360px] px-20 py-24 max-md:px-6 max-md:py-16">
          <Head
            kicker="Supporting NEP 2020"
            title="Designed to support the vision of NEP 2020."
            lede="For Innovation, Entrepreneurship and Experiential Learning — Pragati is built to promote:"
          />

          <div className="mt-12 flex flex-wrap gap-3">
            {NEP_THEMES.map((t) => (
              <span
                key={t}
                className="rounded-full border-2 border-white bg-white px-6 py-3.5 font-sans text-[16px] font-medium text-wandor-text shadow-[0_0_4px_0_rgba(0,0,0,0.15)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== AI Innovation Journey ===== */}
      <section id="journey">
        <div className="mx-auto max-w-[1360px] px-20 py-24 max-md:px-6 max-md:py-16">
          <Head
            kicker="AI Innovation Journey"
            title="From a rough idea to a fundable venture."
            lede="Six stages, all inside one platform."
          />

          <div className="mt-14 grid grid-cols-3 gap-5 max-md:grid-cols-1">
            {JOURNEY.map((j) => (
              <div key={j.title} className={`${CARD_WARM} px-7 py-8 max-md:px-6`}>
                <span className="text-[28px] leading-none">{j.icon}</span>
                <h3 className="mt-4 font-sans text-lg font-semibold tracking-[-0.02em] text-wandor-text">{j.title}</h3>
                <p className="mt-2 font-sans text-[15px] leading-relaxed text-wandor-muted">{j.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================== The rigor ===== */}
      <section id="rigor" className={PAPER}>
        <div className="mx-auto max-w-[1360px] px-20 py-24 max-md:px-6 max-md:py-16">
          <Head
            kicker="The difference"
            title={
              <>
                Your startup,
                <br />
                interrogated weekly.
              </>
            }
            lede="Not a chatbot that agrees with you. A board that reads your venture, remembers what you claimed last week, and asks for the evidence."
          />

          <div className="mt-14 grid grid-cols-2 gap-5 max-md:grid-cols-1">
            {RIGOR.map((r) => (
              <div key={r.n} className={`${CARD} px-8 py-9 max-md:px-6`}>
                <span className="font-typewriter text-[17px] text-wandor-prompt">{r.n}</span>
                <h3 className="mt-3 font-sans text-[22px] font-medium leading-[1.2] tracking-[-0.02em] text-wandor-text">
                  {r.title}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-wandor-muted">{r.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-5 max-md:grid-cols-1">
            {GUARANTEES.map((g) => (
              <div
                key={g}
                className="flex items-center gap-4 rounded-[36px] bg-gray-950 px-8 py-7 max-md:px-6"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-wandor-prompt" />
                <span className="font-sans text-[17px] font-medium leading-snug text-white">{g}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================== Stakeholders ===== */}
      <section id="stakeholders">
        <div className="mx-auto max-w-[1360px] px-20 py-24 max-md:px-6 max-md:py-16">
          <Head kicker="Built for every stakeholder" title="One platform, three points of view." />

          <div className="mt-14 grid grid-cols-3 gap-5 max-md:grid-cols-1">
            {STAKEHOLDERS.map((s) => (
              <div key={s.title} className={`${CARD_WARM} px-8 py-10 max-md:px-6`}>
                <h3 className="font-typewriter text-[clamp(22px,2.6vw,28px)] leading-[1.15] text-wandor-text">
                  {s.title}
                </h3>
                <p className="mt-4 font-sans text-[15px] leading-relaxed text-wandor-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= Perfect for ===== */}
      <section id="perfect-for" className={PAPER}>
        <div className="mx-auto max-w-[1360px] px-20 py-24 max-md:px-6 max-md:py-16">
          <Head kicker="Perfect for" title="Wherever innovation already lives on campus." />

          <div className="mt-12 flex flex-wrap gap-3">
            {PERFECT_FOR.map((p) => (
              <span
                key={p}
                className="rounded-full border-2 border-white bg-white px-6 py-3.5 font-sans text-[16px] font-medium text-wandor-text shadow-[0_0_4px_0_rgba(0,0,0,0.15)]"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ Why choose Pragati ===== */}
      <section id="why-choose">
        <div className="mx-auto max-w-[1360px] px-20 py-24 max-md:px-6 max-md:py-16">
          <Head kicker="Why choose Pragati?" title="Everything the innovation cell needs, in one place." />

          <div className="mt-12 grid grid-cols-4 gap-4 max-md:grid-cols-1">
            {REASONS.map((r) => (
              <div key={r} className={`${CARD_WARM} flex items-center gap-3 px-6 py-5`}>
                <span className="text-[18px] leading-none">✅</span>
                <span className="font-sans text-[16px] font-medium text-wandor-text">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================= CTA ===== */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        {/* Same warm glow the footer carries, so the two read as one block */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-[400px] w-[400px] bg-orange-700/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1360px] px-20 py-28 text-center max-md:px-6 max-md:py-20">
          <p className="font-typewriter text-[15px] uppercase tracking-[0.12em] text-wandor-prompt">
            Start your innovation journey today
          </p>
          <h2 className="mx-auto mt-5 max-w-[820px] font-sans text-[clamp(30px,4vw,46px)] font-medium leading-[1.08] tracking-[-0.04em]">
            Ready to build the next startup?
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] font-sans text-lg leading-relaxed text-white/60">
            Whether you’re a student with an idea or a university building an innovation ecosystem, Pragati helps
            transform ideas into impactful ventures.
          </p>

          <a
            href={PRAGATI_APP}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-sans text-[15px] font-medium text-gray-950 shadow-xl shadow-white/5 transition-all hover:bg-white/90 active:scale-95"
          >
            Get Started
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>
    </div>
  )
}
