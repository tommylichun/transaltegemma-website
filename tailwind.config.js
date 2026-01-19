/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAFA',
        foreground: '#0F172A',
        muted: {
          DEFAULT: '#F1F5F9',
          foreground: '#64748B',
        },
        accent: {
          DEFAULT: '#0052FF',
          secondary: '#4D7CFF',
          foreground: '#FFFFFF',
        },
        border: '#E2E8F0',
        card: '#FFFFFF',
        ring: '#0052FF',
      },
      fontFamily: {
        display: ['"Calistoga"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        '5xl': ['5.25rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '3xl': ['3.25rem', { lineHeight: '1.15' }],
      },
      boxShadow: {
        'accent': '0 4px 14px rgba(0, 82, 255, 0.25)',
        'accent-lg': '0 8px 24px rgba(0, 82, 255, 0.35)',
      },
      animation: {
        'float-1': 'float 5s ease-in-out infinite',
        'float-2': 'float 4s ease-in-out infinite 1s',
        'rotate-slow': 'rotate 60s linear infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-dot': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.3)', opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
