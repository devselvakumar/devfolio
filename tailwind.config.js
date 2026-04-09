/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        mono: ['Poppins', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#2563EB',
          light: '#3B82F6',
          glow: '#60A5FA',
        },
        dark: '#0A0A0F',
        surface: '#F7F7FA',
        muted: '#6B7280',
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-mid': 'floatMid 6s ease-in-out infinite',
        'float-fast': 'floatFast 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-24px) rotate(5deg)' },
        },
        floatMid: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(-4deg)' },
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
