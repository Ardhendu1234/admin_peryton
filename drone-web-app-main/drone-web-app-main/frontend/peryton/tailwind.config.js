/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://i.postimg.cc/ryPqm2Gk/hero-pattern-trans.png')"
      }
    },
  },
  plugins: [],
}

