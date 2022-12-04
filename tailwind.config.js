/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-1": "rgb(var(--surface-1), <alpha-value>)",
        "surface-2": "rgb(var(--surface-2), <alpha-value>)",
        "on-surface-normal": "rgb(var(--on-surface-normal), <alpha-value>)",
        "on-surface-light": "rgb(var(--on-surface-light), <alpha-value>)",
      },
    },
  },
  plugins: [],
};
