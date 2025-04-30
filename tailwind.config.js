/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alex: ['"Alex Brush"', 'cursive'],
        montez: ['"Montez"', 'cursive'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        oooh: ['"Oooh Baby"', 'cursive'],
      },
    },
  },
  plugins: [],
}