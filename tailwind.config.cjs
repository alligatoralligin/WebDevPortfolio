/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  plugins: [require("tw-elements/dist/plugin")],
  theme: {
    extend: {
      maxHeight: {
        35: "40%",
      },
      height: {
        75: "75",
        500: "500px",
      },
      width: {
        500: "500px",
      },
      translate: {
        700: "700px",
      },
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%": { borderColor: "transparent" },
          "50%": { borderColor: "black" },
        },
        pop: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        borderAni: {
          "0%": { borderColor: "transparent" },
          "100%": { borderColor: "visible" },
        },
        borderTB: {
          "0%": { width: "0%" },
          "100%": { width: "80%" },
        },
      },
      animation: {
        typing: "typing 4s steps(30,end),blink .75s step-end infinite",
        pop: "pop 4s",
        fastPop: "pop 2s",
        borderAni: "borderAni 6s",
        borderTB: "borderTB 6s,ease-in",
      },
    },
  },
  plugins: [],
};
