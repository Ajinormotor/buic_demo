/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        secGreen: '#091D0B',
        priGreen: '#62C712',
      },
      fontFamily:{
        'tekmont': ['Montserrat, sans-serif'],
        'inter': [' Inter, sans-serif'],
      }
    },
  },
  plugins: [],
}