import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo, { breadcrumbLd } from '../components/Seo'
import PragatiHero from '../components/PragatiHero'

/* What NEP 2020 asks of institutions, in plain language. */
const NEP_ASKS = [
  {
    n: '01',
    title: 'Learning by doing',
    body: 'NEP 2020 pushes experiential and hands-on learning over rote study. A student running a real venture is the clearest form of it.',
  },
  {
    n: '02',
    title: 'Incubation on campus',
    body: 'It asks universities to host start-up incubation centres, technology development centres and real industry linkage — not just lectures about them.',
  },
  {
    n: '03',
    title: 'Entrepreneurship as a skill',
    body: 'Vocational and skill exposure is meant to start early and continue through college, with entrepreneurship treated as a core capability.',
  },
  {
    n: '04',
    title: 'Credit for real work',
    body: 'With multiple entry–exit and the Academic Bank of Credits, projects, internships and ventures can carry academic credit — if the work is documented.',
  },
]

/* NEP / NISP ask → what Pragati does → what the institution can show. */
const MAPPING = [
  {
    ask: 'Experiential, hands-on learning',
    does: 'Every student works on their own venture, week after week, instead of submitting a theory assignment.',
    shows: 'Active student ventures, with a dated record of work.',
  },
  {
    ask: 'Campus incubation and pre-incubation',
    does: 'Gives the Innovation Lab a structured intake, a stage ladder and an AI mentor available at 2 a.m.',
    shows: 'How many ideas entered, and how many moved a stage.',
  },
  {
    ask: 'Entrepreneurship skilling',
    does: 'Workshops that end in an assignment against the student’s own venture, not a generic quiz.',
    shows: 'Workshops held, attendance, and what changed after.',
  },
  {
    ask: 'Mentorship hours',
    does: 'An AI board reviews each venture weekly and sets three commitments; faculty mentors step in on top.',
    shows: 'Mentorship sessions and review history per student.',
  },
  {
    ask: 'Credit-worthy documentation',
    does: 'Every claim, number and piece of proof is stored with a date and a source.',
    shows: 'An auditable file per venture — enough to justify credit.',
  },
  {
    ask: 'Annual innovation reporting',
    does: 'Keeps the data live all year instead of reconstructing it in March.',
    shows: 'CSV export shaped for IIC and NISP reporting.',
  },
]

const CELLS = [
  {
    title: 'Innovation Lab',
    lead: 'Where ideas become something testable.',
    points: [
      'Structured intake so an idea arrives with a problem, a user and a first proof — not a slide.',
      'A stage ladder: idea → prototype → pilot → revenue, with workshops gated to the stage a student has reached.',
      'An honest picture of the portfolio, so the lab knows which teams are actually moving.',
    ],
  },
  {
    title: 'E-Cell',
    lead: 'Where students learn to run the thing.',
    points: [
      'A weekly board review that asks what changed, not what looks good.',
      'Unit economics taught on the student’s own numbers — their price, their cost, their customer.',
      'Proof logs: an LOI, a pilot, a first paying user — the evidence investors and juries actually ask for.',
    ],
  },
]

const FRAMEWORKS = [
  { name: 'IIC', body: 'The Institution’s Innovation Council mandated on AICTE/UGC campuses — activities, participation and outcomes stay recorded as they happen.' },
  { name: 'NISP', body: 'The National Innovation and Startup Policy for students and faculty — pre-incubation, mentorship and venture records in one place.' },
  { name: 'NIRF / innovation ranking', body: 'Idea counts, stage progression and student venture outcomes, ready to submit rather than reconstructed.' },
  { name: 'AIM / Atal ecosystem', body: 'Tinkering and incubation efforts on campus get a common record instead of scattered spreadsheets.' },
]

const LOOP = [
  { n: '01', title: 'Student applies', body: 'A guided form turns a rough idea into a real profile: the problem, the user, the money, the proof.' },
  { n: '02', title: 'AI mentor asks', body: 'It opens on the weakest part of the idea and asks one sharp question at a time.' },
  { n: '03', title: 'Numbers get built', body: 'The student’s assumptions go into a calculator, not a chatbot — so the projections hold up to scrutiny.' },
  { n: '04', title: 'Proof gets logged', body: 'An interview, a pilot, a first sale. The weekly review grades what moved and sets the next three commitments.' },
]

/* Shared surface tokens — the hero's glass card, restated for opaque sections. */
const CARD = 'rounded-[36px] border-2 border-white bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.15)]'
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

/** Numbered card used by the NEP-asks and how-it-works strips. */
function StepCard({ n, title, body }) {
  return (
    <div className={`${CARD} px-7 py-8 max-md:px-6`}>
      <span className="font-typewriter text-[17px] text-wandor-prompt">{n}</span>
      <h3 className="mt-3 font-sans text-lg font-semibold tracking-[-0.02em] text-wandor-text">{title}</h3>
      <p className="mt-2 font-sans text-[15px] leading-relaxed text-wandor-muted">{body}</p>
    </div>
  )
}

export default function Pragati() {
  return (
    <div className="bg-white font-sans">
      <Seo
        title="Pragati AI by Prepzo — an NEP-aligned innovation lab for your campus"
        description="Pragati AI turns NEP 2020's push for experiential learning, campus incubation and entrepreneurship into something a college can actually run and report — powering the Innovation Lab, the E-Cell, and IIC/NISP reporting."
        path="/pragati"
        keywords="Pragati AI, Prepzo, NEP 2020, innovation lab, entrepreneurship cell, E-Cell, IIC, NISP, student startup, campus incubation, AICTE, UGC"
        jsonLd={breadcrumbLd([
          { name: 'Home', path: '/' },
          { name: 'Pragati AI', path: '/pragati' },
        ])}
      />

      <PragatiHero />

      {/* ================================================= In one line ===== */}
      <section className="mx-auto max-w-[1360px] px-20 py-24 max-md:px-6 max-md:py-16">
        <Head
          kicker="In one line"
          title="An innovation lab your campus can actually run."
          lede="NEP 2020 asks colleges to teach by doing, incubate real ventures and build entrepreneurs. Pragati is the software that makes that a weekly habit — and leaves a record you can report."
        />
      </section>

      {/* ================================================== What NEP asks ===== */}
      <section id="nep" className={PAPER}>
        <div className="mx-auto max-w-[1360px] px-20 py-24 max-md:px-6 max-md:py-16">
          <Head
            kicker="NEP 2020"
            title="What the policy asks for."
            lede="Four themes run through the National Education Policy for higher education. Each one is hard to deliver with lectures alone."
          />

          <div className="mt-14 grid grid-cols-4 gap-5 max-md:grid-cols-1">
            {NEP_ASKS.map((a) => (
              <StepCard key={a.n} n={a.n} title={a.title} body={a.body} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== Mapping ===== */}
      <section id="mapping">
        <div className="mx-auto max-w-[1360px] px-20 py-24 max-md:px-6 max-md:py-16">
          <Head
            kicker="How it connects"
            title="Policy on one side. Proof on the other."
            lede="The same table a coordinator can take into an IIC or NAAC conversation."
          />

          <div className={`mt-14 overflow-x-auto ${CARD}`}>
            <table className="w-full min-w-[860px] border-collapse text-left">
              <thead>
                <tr className="border-b border-black/10 bg-[#f7f3ec] font-typewriter text-[13px] uppercase tracking-[0.12em] text-wandor-prompt">
                  <th className="px-8 py-5 font-normal max-md:px-5">What NEP / NISP asks</th>
                  <th className="px-8 py-5 font-normal max-md:px-5">What Pragati does</th>
                  <th className="px-8 py-5 font-normal max-md:px-5">What the institution can show</th>
                </tr>
              </thead>
              <tbody>
                {MAPPING.map((m) => (
                  <tr key={m.ask} className="border-b border-black/[0.06] last:border-b-0">
                    <td className="px-8 py-5 align-top text-[15px] font-medium text-wandor-text max-md:px-5">{m.ask}</td>
                    <td className="px-8 py-5 align-top text-[15px] leading-relaxed text-wandor-muted max-md:px-5">{m.does}</td>
                    <td className="px-8 py-5 align-top text-[15px] leading-relaxed text-wandor-prompt max-md:px-5">{m.shows}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ======================================= Innovation Lab & E-Cell ===== */}
      <section id="cells" className={PAPER}>
        <div className="mx-auto max-w-[1360px] px-20 py-24 max-md:px-6 max-md:py-16">
          <Head
            kicker="On campus"
            title="One system behind both."
            lede="Most colleges already have an Innovation Lab and an E-Cell. Usually they run on enthusiasm, a WhatsApp group and one overworked faculty coordinator."
          />

          <div className="mt-14 grid grid-cols-2 gap-6 max-md:grid-cols-1">
            {CELLS.map((c) => (
              <div key={c.title} className={`${CARD} px-9 py-11 max-md:px-6`}>
                <h3 className="font-typewriter text-[clamp(26px,3.2vw,36px)] leading-[1.1] text-wandor-text">
                  {c.title}
                </h3>
                <p className="mt-3 font-sans text-lg font-medium text-wandor-prompt">{c.lead}</p>
                <ul className="mt-6 space-y-4">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-3 font-sans text-[15px] leading-relaxed text-wandor-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-wandor-prompt" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== How it works ===== */}
      <section id="loop">
        <div className="mx-auto max-w-[1360px] px-20 py-24 max-md:px-6 max-md:py-16">
          <Head
            kicker="How it works"
            title="Four steps, every week."
            lede="Simple enough to explain to a first-year student in one minute."
          />

          <div className="mt-14 grid grid-cols-4 gap-5 max-md:grid-cols-1">
            {LOOP.map((s) => (
              <StepCard key={s.n} n={s.n} title={s.title} body={s.body} />
            ))}
          </div>

          <p className="mt-10 max-w-[720px] font-sans text-[15px] leading-relaxed text-wandor-muted">
            Under the hood: a venture profile that ages if it isn’t updated, financials produced by a calculator rather
            than a language model, and a proof log where a signed letter of intent counts for more than a screenshot.
            The student never has to think about any of that.
          </p>
        </div>
      </section>

      {/* =================================================== Reporting ===== */}
      <section id="reporting" className={PAPER}>
        <div className="mx-auto max-w-[1360px] px-20 py-24 max-md:px-6 max-md:py-16">
          <Head
            kicker="Reporting"
            title="The year-end file writes itself."
            lede="Innovation reporting is usually rebuilt from memory in a single panicked week. Pragati keeps it current because the students are the ones filling it in."
          />

          <div className="mt-14 grid grid-cols-4 gap-5 max-md:grid-cols-1">
            {FRAMEWORKS.map((f) => (
              <div key={f.name} className={`${CARD} px-7 py-8 max-md:px-6`}>
                <h3 className="font-typewriter text-[19px] text-wandor-text">{f.name}</h3>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-wandor-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= CTA ===== */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        {/* Same warm glow the footer carries, so the two read as one block */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-[400px] w-[400px] bg-orange-700/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1360px] px-20 py-28 text-center max-md:px-6 max-md:py-20">
          <p className="font-typewriter text-[15px] uppercase tracking-[0.12em] text-wandor-prompt">Get started</p>
          <h2 className="mx-auto mt-5 max-w-[820px] font-sans text-[clamp(30px,4vw,46px)] font-medium leading-[1.08] tracking-[-0.04em]">
            Run a pilot cohort this semester.
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] font-sans text-lg leading-relaxed text-white/60">
            Students get a mentor that remembers everything. Your IIC gets a record it doesn’t have to rebuild.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact?subject=Pragati AI"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-sans text-[15px] font-medium text-gray-950 shadow-xl shadow-white/5 transition-all hover:bg-white/90 active:scale-95"
            >
              Bring it to your campus
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <a
              href="https://pragati.prepzo.space"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/15 px-7 py-4 font-sans text-[15px] font-medium text-white transition-all hover:bg-white/5 active:scale-95"
            >
              See the product
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
