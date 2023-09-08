module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
    browser: true,
  },
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  extends: [
    "eslint:recommended",
    "google",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    arraysInObjects: 0,
    'max-len': ["error", { "code": 180 }],
    "object-curly-spacing": [2, "always"],
    'indent': 'off',
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/prop-types": "off",
  },
  overrides: [
    {
      files: ["**/*.spec.*"],
      env: {
        mocha: true,
      },
      rules: {},
    },
  ],
  globals: {},
};
