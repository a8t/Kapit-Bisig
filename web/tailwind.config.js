const { colors } = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      display: ['"Nunito Sans"', "sans-serif"],
      body: ["Nunito", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "1rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          "100": "#cce0f5",
          "200": "#99c2eb",
          "300": "#66a3e0",
          "400": "#3385d6",
          "500": "#0066cc",
          "600": "#005CB8",
          "700": "#0052A3",
          "800": "#00478F",
          "900": "#003D7A",
        },
      },
    },
  },
  variants: {
    display: ["responsive", "hover", "focus", "group-hover"],
    borderWidth: ["responsive", "hover", "focus"],
  },
  plugins: [],
}
