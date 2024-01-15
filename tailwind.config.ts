import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media'
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#1F2937",
          100: "#1F2937",
          200: "#4B5563",
          300: "#6B7280",
          400: "#9CA3AF",
          500: "#D1D5DB",
          600: "#E5E7EB",
          700: "#F3F4F6",
          800: "#F9FAFB",
          900: "#F9FAFB",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
