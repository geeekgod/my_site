module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: (theme) => ({}),
    extend: {
      colors: {
        primary: "#4361EE",
      },
      screens: {
        // breakpoint at 968px - slg
        slg: "968px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
