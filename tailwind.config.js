/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FFF3E3",
          DEFAULT: "#B88E2F",
        },
        "text-color": {
          DEFAULT: "#000000",
          100: "#333333",
          200: "#666666",
          300: "#898989",
          400: "#9F9F9F",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
