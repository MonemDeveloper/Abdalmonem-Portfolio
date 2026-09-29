/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05070c',
          900: '#090c14',
          800: '#0e121c',
          700: '#151a27',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'none' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(6%, -4%, 0) scale(1.08)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        float: 'float 7s ease-in-out infinite',
        drift: 'drift 20s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
