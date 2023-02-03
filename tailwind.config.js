/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#173B6D",
        accentPrimary: "#149DDE",
        accentPrimaryTint: "#2ca7e1",
        secondaryColor: "#de1438",
        secondaryColorTint: "#e12c4c",
        softPrimary: "#F5F8FD",
        textColor: "#272829",
        darkColor: "#1D1D1D",
        darkColorTint: "#323232f6",
        mobileNavColor: "#323232f6",
        lightGrey: "#A8A9B4",
      },
    },
  },
  plugins: [],
};
