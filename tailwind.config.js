/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FBFEF9",
        secondary: "#F7BC50",
        accent: "#DE1A1A",
        textColorDark: "#28262C",
        error: "#E11D48",
        success: "#059669",
        warning: "#ffcc00",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
