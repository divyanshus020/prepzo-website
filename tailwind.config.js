/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Coral palette from the Prepzo design system
        primary: {
          DEFAULT: '#FF6A3D',
          50:  '#FFF1EB',
          100: '#FFD4C2',
          200: '#FFB59A',
          300: '#FF9772',
          400: '#FF8A5F',
          500: '#FF6A3D',
          600: '#E8501F',
          700: '#C2400F',
          800: '#9C320A',
          900: '#6E1F03',
        },
        coral:      '#FF6A3D',
        'coral-2':  '#E8501F',
        'coral-soft':'#FFD4C2',
        ink:        '#0E1116',
        'ink-2':    '#16191F',
        'ink-3':    '#1F232B',
        paper:      '#FAF7F2',
        'paper-2':  '#F2EDE5',
        cream: {
          DEFAULT:  '#FAF7F2',
          50:       '#FAF7F2',
          100:      '#F2EDE5',
        },
      },
      fontFamily: {
        // Geist for everything; Instrument Serif for italic em emphasis; JetBrains Mono for kickers
        display: ['Geist', 'system-ui', 'sans-serif'],
        body:    ['Geist', 'system-ui', 'sans-serif'],
        serif:   ['"Instrument Serif"', 'Georgia', 'serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        sm:   '10px',
        md:   '16px',
        lg:   '24px',
        xl:   '32px',
      },
      boxShadow: {
        'sm-soft':  '0 1px 2px rgba(14,17,22,.06), 0 2px 6px rgba(14,17,22,.04)',
        'md-soft':  '0 6px 16px -4px rgba(14,17,22,.10), 0 12px 32px -10px rgba(14,17,22,.10)',
        'lg-soft':  '0 18px 36px -16px rgba(14,17,22,.18), 0 32px 80px -28px rgba(14,17,22,.22)',
        coral:      '0 18px 40px -16px rgba(255,106,61,.45), 0 4px 12px rgba(255,106,61,.25)',
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow':  'spin 20s linear infinite',
        'gradient':   'gradient 8s ease infinite',
        'shimmer':    'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
