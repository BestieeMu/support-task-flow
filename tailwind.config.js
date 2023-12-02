/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        text: "#01000a",
        background: "#e2e1fe",
        primary: "#0a04c3",
        secondary: "#c0befe",
        accent: "#0c05eb",
        Third: "#FFFFFF"
      },
    },
  },
  plugins: [],
};
