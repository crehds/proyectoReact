module.exports = {
  "env": {
      "es6": true,
      "browser": true,
      "node": true,
    },
  "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true,
        },
    },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  "plugins": [
      "react"
  ],
  "rules": {
      "no-console": "off",
      "semi": [
          "error",
          "always",
      ],
    },
};
