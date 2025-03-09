/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "doge-yellow": "#f2a900",
        "doge-yellow-dark": "#cb9700",
        "doge-bg": "#fff8e7",
      },
      fontFamily: {
        comic: ['"Comic Sans MS"', '"Comic Sans"', "cursive", "sans-serif"],
      },
    },
  },
  plugins: [],
};
