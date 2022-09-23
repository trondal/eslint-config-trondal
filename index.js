module.exports = {
  extends: ["airbnb", "airbnb/hooks", "prettier"],
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
    // 'react/self-closing-comp': 1,
  },
};
