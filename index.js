'use strict';

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
  },
  extends: 'eslint:recommended',
  plugins: [
    'promise',
  ],
  rules: {
    // first reduce some recommended levels
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-mixed-spaces-and-tabs': 'off',
    'no-octal': 'off',

    // now load our rules
    ...require('./rules/detect-problems'),
    ...require('./rules/modern-js'),
    ...require('./rules/promises'),
    ...require('./rules/clean-code')
  },
};

console.log(module.exports);
