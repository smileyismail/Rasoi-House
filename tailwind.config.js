/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        headingColor: "#222831",
        textColor: "#393E49",
        secondaryColor: "#00ADB5",
        primaryColor: "#EEEEEE",
        overlay: "rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};
