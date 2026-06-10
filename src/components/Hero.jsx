import { Sparkles, Brain, GraduationCap, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end bg-black text-white overflow-hidden select-none">
      {/* Fullscreen Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4"
          type="video/mp4"
        />
      </video>

      {/* Bottom Blur Overlay (No gradient darkening, only blur) */}
      <div
        className="absolute inset-0 pointer-events-none backdrop-blur-xl bottom-blur-mask z-10"
      />

      {/* Hero Content (bottom of viewport) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-8 md:pb-16 pt-32 flex flex-col md:flex-row items-end justify-between gap-8">
        {/* Left Side */}
        <div className="flex-1 w-full text-left">
          {/* Metadata / Trust Row */}
          <div
            className="flex flex-wrap items-center gap-3 sm:gap-6 mb-6 md:mb-8 text-xs sm:text-sm text-gray-200 animate-blur-fade-up"
            style={{ animationDelay: '300ms' }}
          >
            <div className="flex items-center gap-1.5 font-medium">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white" />
              <span>Prepzo AI · 120B Model</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-300">
              <Brain className="w-4 h-4" />
              <span>Brain-mapping Engine</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-300">
              <GraduationCap className="w-4 h-4" />
              <span>Built with TPO Cells</span>
            </div>
          </div>

          {/* Title */}
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[-0.04em] mb-4 md:mb-6 leading-none animate-blur-fade-up"
            style={{ animationDelay: '400ms' }}
          >
            Map the skill. <br />
            <span className="text-gray-400">Map the mind.</span>
          </h1>

          {/* Description */}
          <p
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-12 max-w-2xl leading-relaxed animate-blur-fade-up"
            style={{ animationDelay: '500ms' }}
          >
            Prepzo is a skill analyser & brain-mapping platform built for universities and TPO cells — turning every student session into a precise readiness profile, semester after semester.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="bg-white text-black rounded-full font-medium px-6 sm:px-8 py-2.5 sm:py-3 flex items-center gap-2 hover:bg-gray-200 transition-all cursor-pointer animate-blur-fade-up"
              style={{ animationDelay: '600ms' }}
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#how-it-works"
              className="rounded-full font-medium liquid-glass px-6 sm:px-8 py-2.5 sm:py-3 text-white hover:scale-[1.03] transition-transform duration-300 cursor-pointer active:scale-[0.98] animate-blur-fade-up inline-flex items-center"
              style={{ animationDelay: '700ms' }}
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Right Side (Navigation Arrows) */}
        <div
          className="flex items-center gap-3 w-full md:w-auto justify-start md:justify-end shrink-0"
        >
          <button
            className="rounded-full liquid-glass px-4 sm:px-6 py-2.5 sm:py-3 text-white hover:scale-[1.03] transition-transform duration-300 cursor-pointer active:scale-[0.98] animate-blur-fade-up flex items-center justify-center"
            style={{ animationDelay: '800ms' }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            className="rounded-full liquid-glass px-4 sm:px-6 py-2.5 sm:py-3 text-white hover:scale-[1.03] transition-transform duration-300 cursor-pointer active:scale-[0.98] animate-blur-fade-up flex items-center justify-center"
            style={{ animationDelay: '900ms' }}
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
