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
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
      },
      colors: {
        'main': {
          '300': "#27272A",
          '400': "#18181B",

        },

        'green': {
          '400': "#4CFDC7",
          '800': "#01271C"
        }
      }
    },
  },
  plugins: [],
}