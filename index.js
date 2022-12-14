module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb"
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "rules": {
    "indent": [2, "tab"],
    "no-tabs": 0,
    "semi": ["error", "never"],
    "prefer-template": 0,
    "consistent-return": 0,
    "comma-dangle": 0,
    "no-use-before-define": 0,
    "max-len": ["error", 120],
    "brace-style": ["error", "stroustrup", {
      "allowSingleLine": true
    }],
    "import/no-unresolved": [2, {
      "ignore": ["electron"]
    }],
    "unicorn/filename-case": ["error", {
      "case": "snakeCase"
    }],
    "react/jsx-indent": [2, "tab"],
    "react/jsx-indent-props": [2, "tab"],
    "react/jsx-no-bind": 0,
    "react/jsx-filename-extension": ["error", {
      "extensions": [".js", ".jsx"]
    }],
    "react/prefer-stateless-function": 0
  },
  "plugins": [
    "import",
    "react",
    "unicorn"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js"]
      }
    }
  }
}