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
        primary: '#e79802'
      },
      fontSize: {
        mxs: ['13px', '18px']
      }
    },
  },
  plugins: [require("daisyui")],
}
