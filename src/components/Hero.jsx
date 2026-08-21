import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './hero.css'

export default function Hero() {
  // One-shot entrance timeline; cleared on the demo card's animationend
  // (3500ms fallback in case the animation never fires).
  const [motionPending, setMotionPending] = useState(true)
  const fallbackRef = useRef(null)

  useEffect(() => {
    fallbackRef.current = setTimeout(() => setMotionPending(false), 3500)
    return () => clearTimeout(fallbackRef.current)
  }, [])

  const endMotion = () => {
    clearTimeout(fallbackRef.current)
    setMotionPending(false)
  }

  return (
    <section className={`vt-hero${motionPending ? ' motion-pending' : ''}`}>
      <video
        className="vt-background"
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        aria-hidden="true"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_064556_051587f1-74a1-4336-8c05-4dde3594ed05.mp4"
          type="video/mp4"
        />
      </video>

      <div className="vt-hero-content">
        <h1 className="vt-title">
          <span className="vt-line vt-line-one">
            <span className="vt-line-reveal">An AI counsellor</span>
          </span>
          <span className="vt-line vt-line-two">
            <span className="vt-line-reveal">for every classroom in India.</span>
          </span>
        </h1>

        <p className="vt-copy">
          Prepzo shows students the career paths they are genuinely built for,<br />
          and gives teachers a real helping hand with their everyday work.<br />
          One platform, built for the Indian education context.
        </p>

        <Link className="vt-primary-cta" to="/contact">
          <span className="vt-cta-label">Book a Demo</span>
          <span className="vt-arrow-box" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 7h8M7.5 3.5 11 7l-3.5 3.5"
                stroke="#fff"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>

      <article className="vt-demo-card" onAnimationEnd={endMotion}>
        <div className="vt-demo-visual">
          <div className="vt-demo-smoke" role="img" aria-label="Abstract red and blue smoke" />
          <button className="vt-play" type="button" aria-label="Play demo">
            <svg viewBox="0 0 12 14" fill="none" aria-hidden="true">
              <path d="M1 1.2 11 7 1 12.8V1.2Z" fill="#fff" />
            </svg>
          </button>
        </div>
        <a className="vt-watch-button" href="#how-it-works">Watch Demo</a>
      </article>
    </section>
  )
}
