import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        header: ["var(--header-font)"],
        body: "var(--body-font)",
      },
      fontSize: {
        "10xl": ["10rem", "1"],
        "12xl": ["12rem", "1"],
      },
      animation: {
        "fade-in": "fade-in 300ms ease-in-out",
        "fade-in-2": "delayed-fade-in 800ms ease-in-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "delayed-fade-in": {
          "0%": { opacity: "0" },
          "45%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
