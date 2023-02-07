/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./app/*.js"],
  theme: {
    extend: {
      colors: {
        moderateCyan: "hsl(176, 50%, 47%)",
        darkCyan: "hsl(176, 72%, 28%)",
        black: "hsl(0, 0%, 0%)",
        darkGray: "hsl(0, 0%, 48%)",
      },
    },

    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1240px",
    },

    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
  },
  plugins: [],
};
