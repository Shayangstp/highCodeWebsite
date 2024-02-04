/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-transparent": "rgba(0, 179, 255, 0.22)",
        "gray-opacity": "rgba(175, 175, 175, 0.29)",
      },
    },
  },
  plugins: [],
};
