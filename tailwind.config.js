/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBackgroundImage:
          "url('./src/assets/images/home/scandinavian-interior-mockup-wall-decal-background 1.jpg')",
      },
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
        poppinsLight: ["Poppins Light", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        poppinsMedium: ["Poppins Medium", "sans-serif"],
        poppinsSemibold: ["Poppins Semibold", "sans-serif"],
        poppinsBold: ["Poppins Bold", "sans-serif"],
        montserrat: ["Montserrat Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
