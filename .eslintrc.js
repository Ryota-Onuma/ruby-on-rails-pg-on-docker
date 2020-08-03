module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["html", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    Vue: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    indent: ["error", 2],
    "prettier/prettier": "error",
  },
};
