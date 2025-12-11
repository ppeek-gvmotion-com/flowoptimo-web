import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f5ff",
          100: "#e0ebff",
          200: "#c7d7fe",
          300: "#a3bffa",
          400: "#7c9cf5",
          500: "#5a78ed",
          600: "#1e3a5f",
          700: "#1a3354",
          800: "#162b48",
          900: "#12233c",
        },
        accent: {
          DEFAULT: "#f97316",
          dark: "#ea580c",
          light: "#fb923c",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
