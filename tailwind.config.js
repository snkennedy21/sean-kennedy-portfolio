/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#173B6D",
        accentPrimary: "#149DDE",
        softPrimary: "#F5F8FD",
        textColor: "#272829",
        darkColor: "#1D1D1D",
        mobileNavColor: "#343434ca;",
        lightGrey: "#A8A9B4",
      },
    },
  },
  plugins: [],
};
