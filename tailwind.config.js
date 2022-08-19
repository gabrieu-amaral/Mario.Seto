/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mental': "url('/image/background.png')",
      }
    },

    theme: {
      fontFamily: {
        
      }
    }
  },
  plugins: [],
  variants: {
    extends: {
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus']
    },
  }
}