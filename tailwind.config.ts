import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "786px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px", // Small Landscape
        md: "667px",
        mdl: "768px", // Medium Landscape
        lg: "960px",
        lgl: "1024px", // Large Landscape
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors: {
        bodyColor: "#0A192F",
        textGreen: "#64FFDA",
        textLight: "#CCD6F6",
        textDark: "#8892B0",
        hoverColor: "rgba(100,255,218,0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
