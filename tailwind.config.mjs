/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
          glow: 'rgba(59, 130, 246, 0.15)',
        },
        accent: {
          DEFAULT: '#06b6d4',
        },
        surface: {
          primary: '#0a0a0f',
          secondary: '#111118',
          card: '#16161f',
          'card-hover': '#1c1c28',
        },
        txt: {
          primary: '#f0f0f5',
          secondary: '#9898a8',
          muted: '#5a5a6e',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.06)',
          hover: 'rgba(255,255,255,0.12)',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        'card-sm': '10px',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        orbFloat: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(-40px, 30px) scale(1.1)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.5)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out both',
        'fadeInUp-1': 'fadeInUp 0.8s ease-out 0.1s both',
        'fadeInUp-2': 'fadeInUp 0.8s ease-out 0.2s both',
        'fadeInUp-3': 'fadeInUp 0.8s ease-out 0.3s both',
        'fadeInUp-5': 'fadeInUp 0.8s ease-out 0.5s both',
        fadeInDown: 'fadeInDown 0.8s ease-out both',
        orbFloat: 'orbFloat 12s ease-in-out infinite alternate',
        pulse: 'pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
