/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      backgroundImage: {
        gradient:
          "radial-gradient(at 0% 100%, rgb(254, 202, 202), rgb(252, 165, 165), rgb(254, 240, 138))",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#333",
            textDecoration: "drop-shadow",
            a: {
              textDecoration: "none",
              color: "#0818A8"
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
