module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  // ...
  theme: {
    extend: {
      colors: {
        redquote: "#FF1616",
      },
      fontFamily: {
        barlow: ["Barlow Condensed", "sans-serif"],
      },
      animation: {
        "slide-in-bck-bottom-first":
          "slide 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-in-bck-bottom-second":
          "slide 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.6s both",
        "slide-in-bck-bottom-last":
          "slide 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.2s both",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateZ(700px) translateY(1000px)" },
          "100%": { transform: "translateZ(0) translateY(0)" },
        },
      },
    },
  },
};
