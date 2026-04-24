/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#d4f6ac', // lime-green / neon-green
          dark: '#111827', // slate-900
          darker: '#030712', // grayish black
          red: '#dc2626', // bold red accent
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
        accent: ['Caveat', 'cursive'],
      }
    },
  },
  plugins: [],
}
