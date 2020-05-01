module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "standard",
    "standard-react",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "react/prop-types": 0,
    "object-curly-spacing": ["error", "never"],
  },
  settings: {
    react: {
      pragma: "React",
      version: "16.8.4",
    },
  },
}
