/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./Components/**/*.{html,js,php,twig}",
    "./templates/**/*.{html,js,php,twig}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003268",
        secondary: "#4A85DD",
        warning: "#FF6846",
        dark: "#00162D",
        gray: "#64626A",
      },
      borderRadius: {
        DEFAULT: "6px",
      },
    },
    fontFamily: {
      display: ["LibreBaskerville", "sans-serif"],
      body: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
