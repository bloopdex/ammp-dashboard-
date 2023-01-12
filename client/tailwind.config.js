/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue" : "#4285f4",
        "red" : "#ea4334",
        "green" : "#0d9d58",
        "yellow" : "#fcbc05",
        "secondary" : "#a4a8b1",
      }
    },
  },
  plugins: [],
}
