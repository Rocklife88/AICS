/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066b3',
        primaryLighter: '#004a81',
        primaryDarker: '#174d81',
        accent: '#d20222', 
        secondaryAccent: '#318343' 
      },
      linearGradientColors: {
        'blue-gradient': ['#0066b3', '#174d81'],
      },
    },
  },
  
}
