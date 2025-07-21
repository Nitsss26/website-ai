import tailwindScrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
       backdropBlur: {
      xs: '2px',
      },
      colors: {
        primary: {
          DEFAULT: "#02091a", // your primary color (e.g., blue-800)
        },
        secondary: {
          DEFAULT: "#fff", // your secondary color (e.g., green-600)
        },
        dark: {
          DEFAULT: "#02091a", // your dark color (e.g., gray-900)
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      plugins: [tailwindScrollbar],
    },
  },
};
