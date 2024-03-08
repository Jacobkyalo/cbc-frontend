/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        "2xl": "1400px",
      },
      colors: {
        "bg-home": "#A8DFDC",
        "text-blue": "#265CAC",
        "btn-color": "#18FCEE",
        "text-pink": "#F00D88",
        "text-green": "#59D3A7",
        "text-bg": "#D9D9D9",
        "text-bg-dark": "#A9B1AF",
      },
    },
  },
  plugins: [],
};
