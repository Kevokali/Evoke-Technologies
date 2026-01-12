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
        charcoal: '#2C3E50',
        'deep-blue': '#1A365D',
        slate: '#475569',
        accent: '#3B82F6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-wave': 'pulseWave 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radiate': 'radiate 2s ease-out infinite',
        'radiate-left': 'radiateLeft 2s ease-out infinite',
        'radiate-right': 'radiateRight 2s ease-out infinite',
        'radiate-horizontal': 'radiateHorizontal 2s ease-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseWave: {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '0.6',
          },
          '50%': { 
            transform: 'scale(1.5)',
            opacity: '0',
          },
        },
        radiate: {
          '0%': { 
            transform: 'scale(0.8)',
            opacity: '0.8',
          },
          '100%': { 
            transform: 'scale(2)',
            opacity: '0',
          },
        },
        radiateLeft: {
          '0%': { 
            transform: 'scale(0.6)',
            opacity: '0.8',
          },
          '100%': { 
            transform: 'scale(1.3)',
            opacity: '0',
          },
        },
        radiateRight: {
          '0%': { 
            transform: 'scale(0.6)',
            opacity: '0.8',
          },
          '100%': { 
            transform: 'scale(1.3)',
            opacity: '0',
          },
        },
        radiateHorizontal: {
          '0%': { 
            transform: 'translateX(-50%) scaleX(0.5)',
            opacity: '0.6',
          },
          '100%': { 
            transform: 'translateX(-50%) scaleX(2.5)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}
