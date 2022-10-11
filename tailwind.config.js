/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}", "./src/**/*.{css,scss}", "./index.html", "index.html"],
  theme: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      colors: {
        primary: {
          teal: "#0FEFFD",
          bg: "#1D1D1D",
          bg50: "#1D1D1D80",
          transparentGradient: "linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent",
        },
      },
      fontFamily: {
        poppins: ["Roboto", "sans-serif"],
      },
      screens: {
        'mobile': '420px',
      },
      boxShadow: {
        movieCard: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;',
      },
    },
  },
};