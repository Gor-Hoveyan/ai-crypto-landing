/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neonGreen: "#39FF14",
        neonBlue: "#00B5E2",
        neonPurple: "#9B00FF",
      },
      boxShadow: {
        neonGreen:
          "0 0 20px rgba(57, 255, 20, 0.8), 0 0 60px rgba(57, 255, 20, 0.6)",
        neonBlue:
          "0 0 20px rgba(0, 181, 226, 0.8), 0 0 60px rgba(0, 181, 226, 0.6)",
        neonPurple:
          "0 0 20px rgba(155, 0, 255, 0.8), 0 0 60px rgba(155, 0, 255, 0.6)",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        "slide-in": "slideIn 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
