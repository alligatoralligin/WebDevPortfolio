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
      },
      animation: {
        typing: "typing 4s steps(30,end),blink .75s step-end infinite",
        pop: "pop 4s",
        borderAni: "borderAni 6s",
      },
    },
  },
  plugins: [],
};
