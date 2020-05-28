module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "prettier",
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
    "prettier/prettier": ["error"],
  },
  settings: {
    react: {
      pragma: "React",
      version: "16.8.4",
    },
  },
}
