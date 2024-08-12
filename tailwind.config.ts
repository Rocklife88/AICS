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
        primary: '#900001',         
        primaryLighter: '#b40000', 
        primaryLight: '#d20000',    
        primaryDark: '#710000',    
        primaryDarker: '#7f0000',   
        primaryAccent: '#d20222',  
        secondaryAccent: '#318343',
      },
      linearGradientColors: {
        'blue-gradient':['#d20000', '#900001', '#540000'],  
        'primary-gradient': ['#d20000', '#900001', '#540000'], 
      },
    },
  },
  
  
}
