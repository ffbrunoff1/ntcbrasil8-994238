/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#FFFFFF',
        'brand-secondary': '#55A9E9',
        'brand-accent': '#0D47A1',
        'brand-text': '#1f2937',
        'brand-light-gray': '#f9fafb',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 4px 12px rgba(0, 0, 0, 0.05)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'gradient-pan': 'gradient-pan 6s ease infinite',
      },
      keyframes: {
        'gradient-pan': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};
