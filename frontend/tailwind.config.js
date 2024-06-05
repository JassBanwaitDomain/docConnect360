/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        logoColor:"#0ea5e9",
        primaryColor: "#0067FF",
        yellowColor:"#FEB60D",
        greenColor:"#ecfccb",
        neutralColor:'#bae6fd',
        purpleColor:"#9771FF",
        irisBlueColor:"#01B5C5",
        headingColor:"#181A1E",
        textColor:"#4E545F",
      },

      boxShadow:{
        logoShadow:"4px 4px 6px 2px rgb(0 0 0 / 0.1), -4px 2px 4px 2px rgb(0 0 0 / 0.1)",
        panelShadow: "rgba(17,12,46,0.15) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
}

