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
    screens: {
      slg: "968px",
    },
    typography: (theme) => ({}),
    extend: {
      colors: {
        primary: "#4361EE",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
