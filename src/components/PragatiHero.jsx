import { Link } from 'react-router-dom'

const HERO_VIDEO =
  'https://pollen-batch-41236914.figma.site/_components/v2/f0ee2dae7671c170c34f12e31c4cb41418976c98/769c564298c132f7919405cd9f17c1b1231f341d.769c5642.mp4'

export default function PragatiHero() {
  return (
    <section className="relative min-h-svh w-full overflow-hidden">
      {/* Ambient background video */}
      <video
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      {/* White-to-transparent fade so nav and headline stay legible */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[687px]"
        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)' }}
      />

      {/* Bottom fade so the video dissolves into the page instead of cutting */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-b from-transparent to-white" />

      <div className="relative z-[2] mx-auto max-w-[1360px]">
        {/* Hero body — top padding clears the site's fixed navbar */}
        <div className="flex flex-col items-center px-6 pt-36 pb-24 text-center max-md:pt-28">
          <span className="mb-6 select-none font-typewriter text-[40px] leading-none text-black max-md:text-[32px]">
            Pragati AI
          </span>
          <h1 className="font-sans text-[clamp(40px,6vw,68px)] font-medium text-wandor-text leading-[1.05] tracking-[-0.04em] max-w-[820px] mb-5">
            What are you building?
          </h1>
          <p className="font-sans text-xl font-medium text-wandor-muted leading-relaxed max-w-[500px] mb-10">
            Tell Pragati what your venture is and what you have proof of. It holds the whole thing in memory and holds
            you to it every week.
          </p>

          {/* Liquid-glass prompt card */}
          <div className="relative w-[701px] max-md:w-[calc(100vw-48px)] min-h-[208px] bg-white/[0.06] border-[3px] border-white rounded-[44px] shadow-[0_0_4px_0_rgba(0,0,0,0.15)] overflow-hidden backdrop-blur-[20px]">
            <p className="absolute left-[29px] top-[57px] -translate-y-1/2 w-[609px] max-md:w-[calc(100%-58px)] font-sans text-xl max-md:text-[17px] font-medium text-wandor-prompt leading-relaxed break-words">
              We charge ₹1,200 a month, 40 signups so far, two paying. CAC is maybe ₹800. Tell me what breaks first....
            </p>

            <Link
              to="/contact?subject=Pragati AI"
              className="absolute bottom-[21px] right-[21px] w-[156px] h-14 bg-black border-none rounded-[44px] shadow-[0_0_2px_0_rgba(0,0,0,0.05)] cursor-pointer flex items-center justify-center font-sans text-base font-medium text-[#fafafa] uppercase tracking-[0.02em] transition-all hover:bg-[#333] active:scale-95"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
