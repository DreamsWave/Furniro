import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssTypography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssTypography],
};
