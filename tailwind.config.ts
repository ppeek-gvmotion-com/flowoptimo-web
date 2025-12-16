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
          DEFAULT: "#0A2540",
          dark: "#0A2540",
          orange: "#F06723",
          blue: "#2563EB",
          50: "#f0f5ff",
          100: "#e0ebff",
          200: "#c7d7fe",
          300: "#a3bffa",
          400: "#7c9cf5",
          500: "#5a78ed",
          600: "#0A2540",
          700: "#081d33",
          800: "#061626",
          900: "#040f19",
        },
        accent: {
          DEFAULT: "#10B981",
          green: "#10B981",
          dark: "#059669",
          light: "#34D399",
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
