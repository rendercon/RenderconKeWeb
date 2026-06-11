const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#6D3AA8',
          'purple-light': '#8B5CF6',
          gold: '#F4B942',
          dark: '#0F0B1E',
          'dark-card': '#1A1530',
          'dark-border': '#2D2550',
        },
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        display: ['Poppins', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', 'Fira Code', ...defaultTheme.fontFamily.mono],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glow-purple': 'radial-gradient(ellipse at center, rgba(109,58,168,0.4) 0%, transparent 70%)',
        'glow-gold': 'radial-gradient(ellipse at center, rgba(244,185,66,0.2) 0%, transparent 70%)',
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(109,58,168,0.3) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-purple': '0 0 40px rgba(109,58,168,0.4)',
        'glow-gold': '0 0 40px rgba(244,185,66,0.3)',
        'card': '0 1px 1px rgba(0,0,0,0.5), 0 0 0 1px rgba(45,37,80,0.8)',
        'card-hover': '0 0 0 1px rgba(109,58,168,0.5), 0 8px 32px rgba(109,58,168,0.2)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'spin-slower': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'orbit': 'orbit 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
}
