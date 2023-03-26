/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#FAA916',
        'orange-700': 'rgba(250,169,22,0.7)',
        'orange-300': 'rgba(250,169,22,0.3)',
      }
    },
  },
  plugins: [],
}
