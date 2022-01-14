module.exports = {
  darkMode: "class",
  purge: {
    enabled: true,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  theme: {
    typography: (theme) => ({}),
    extend: {
      colors: {
        primary: "#4361EE",
      },
      screens: {
        slg: "968px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
