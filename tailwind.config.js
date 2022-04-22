module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  // ...
  theme: {
    extend: {
      fontSize: {
        nav: "1.25vh",
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      colors: {
        redquote: "#FF1616",
      },
      fontFamily: {
        sans: ["Jost", "sans-serif"],
        barlow: ["Barlow Condensed", "sans-serif"],
      },
      boxShadow: {
        shadowcarousel1: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
        shadowcarousel2: "inset 0px -20px 100px 10px rgba(0, 0, 0, 0.7)",
        shadowcarousel3: "inset 0px -20px 60px 10px rgba(0, 0, 0, 0.5)",
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
