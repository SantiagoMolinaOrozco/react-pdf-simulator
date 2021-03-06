/*
  Rules: http://eslint.org/docs/rules/
  "off" or 0 - turn the rule off
  "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
  "error" or 2 - turn the rule on as an error (exit code will be 1)
*/
module.exports = {
  "parser": "babel-eslint",
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "mocha": true,
    "es6": true
  },
  "rules": {
    // require file to end with single newline
    "eol-last": 2,
    // use the type-safe equality operators === and !== instead of their regular counterparts == and !=
    "eqeqeq": 1,
    // suggest to use let or const instead of var
    "no-var": 0,
    // If a variable is never modified, using the const declaration is better
    "prefer-const": 2,
    // disallow trailing spaces at the end of lines
    "no-trailing-spaces": 2,
    // disallow the space around a semicolon
    "semi-spacing": 2,
    // require Space Before Blocks
    "space-before-blocks": [2, { "keywords": "always" }],
    // require space before and after arrow function's arrow
    "arrow-spacing": [2, { "before": true, "after": true }],
    // enforces spacing after commas
    "comma-spacing": [2, {"before": false, "after": true}],
    // trailing commas in object literals
    "comma-dangle": [2, "always-multiline"],
    // disallow Use of console
    "no-console": 1,
    // disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs": 1,
    // don't allow unused vars and functions. allow unused function params.
    "no-unused-vars": [1, { "args": "none" }],
    // semicolons must be used any place where they are valid.
    "semi": [2, "always"],
    // only allow single quotes in javascript
    "quotes": [1, "single"],
    // enforce consistent spacing inside braces (object-curly-spacing)
    "object-curly-spacing": [2, "always"],
    // disallow multiple empty lines (no-multiple-empty-lines)
    "no-multiple-empty-lines": [2, { "max": 1 }],
    // only allow double quotes for jsx attributes, unless the attr contains quotes (since escaping is impossible)
    "jsx-quotes": [1, "prefer-double"],
    // all components must be defined in the module
    "react/jsx-no-undef": 2,
    // closing brackets on new line for multiline component def
    "react/jsx-closing-bracket-location": 1,
    // only add spaces inside object def curlies, not jsx curlies
    "react/jsx-curly-spacing": [1, "never"],
    "react/jsx-indent-props": [0, "tab"],
    "react/jsx-no-duplicate-props": 2,
    // don't mark `React` as unused
    "react/jsx-uses-react": 1,
    // don't marke vars only used in jsx as unused
    "react/jsx-uses-vars": 1,
    // checks for illegal state mutations:
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-direct-mutation-state": 1,
    // don't allow unknown props like `class`
    "react/no-unknown-property": 1,
    // don't allow '.jsx' or '.js' extensions in require calls
    'react/require-extension': ['off', { extensions: ['.jsx', '.js'] }],
    // jsx tags should be self closing if they don't have children
    "react/self-closing-comp": 1,
    // multiline jsx should be wrapped in parens
    "react/jsx-wrap-multilines": 1,
    // Enforce component methods order (react/sort-comp)
    "react/sort-comp": 2
  },
  "plugins": [
    "react"
  ]
}