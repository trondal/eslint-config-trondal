module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier" // remove conflicting rules with pretter, prettier command must be run i parent project.
  ],
  overrides: [
    {
      files: ["**/*.test.js", "**/*.test.jsx"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended", "plugin:jest/style"],
      env: {
        "jest/globals": true,
      },
    },
  ],
  // Enabling/disabling/changing level of rules
  // "rules" always wins over "extends"
  rules: {
    // 'react/self-closing-comp': 1
  },
  env: {
    browser: true, // allow browser global variables
  },
};
