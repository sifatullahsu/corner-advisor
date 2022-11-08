/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '.5rem'
      },
      colors: {
        primary: '#e79802',
        gray: '#f9f9f9',
        border: '#e6e6e6',
        secondary: '#242d60',
        text: '#53616d'
      },
      fontSize: {
        mxs: ['13px', '18px']
      }
    },
  },
  plugins: [require("daisyui")],
}
