module.exports = {
  extends: ["airbnb", "airbnb-typescript", "airbnb/hooks", "prettier"],
  overrides: [
    {
      files: ["**/*.test.js", "**/*.test.jsx", "**/*.test.ts", "**/*.test.tsx"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended", "plugin:jest/style"],
      env: {
        "jest/globals": true,
      },
    },
  ],
  plugins: ["deprecation"],
  // Enabling/disabling/changing level of rules
  // "rules" always wins over "extends"
  rules: {
    // "react/self-closing-comp": 1,
    // "@typescript-eslint/comma-dangle": 0,
  },
};
