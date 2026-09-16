/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        bg: '#0a0f0d',
        'bg-elevated': '#0f1714',
        surface: '#131c19',
        border: '#1e2b27',
        accent: '#2dd4bf',
        'accent-bright': '#5eead4',
        'accent-dim': '#134e4a',
      },
    },
  },
  plugins: [],
};
