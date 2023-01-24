/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#152C5B",
        secondPrimary: `#3252DF`,
        secondary: `#FF498B`,
        gray: `#B0B0B0`,
      },
    },
  },
  plugins: [],
};
