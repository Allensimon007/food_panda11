/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        sans: ["Poppins","sans-serf"],
        system_ui: ["Fascinate Inline","system_ui"],
      },
      colors:{
        primary: "#FFBB55",
        secondary:"#E2D6BD",
        brandDark:"#776951",
      },
      container: {
        center:true,
        padding: {
          Default: "1rem",
          sm: "2rem",
        },
      }

    },
  },
  plugins: [],
}