'use strict';

const rule = require('../rules/no-loops.js');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();
ruleTester.run('no-loops', rule, {
  valid: [
    {
      code: '[1, 2, 3].map(function (i) { console.log(i); });'
    }
  ],

  invalid: [
    {
      code: 'for (let i; i <= n; i++) { console.log(i); }',
      errors: [ { message: 'loops are not allowed' } ]
    },
    {
      code: 'for (i in [1, 2, 3]) { console.log(i); }',
      errors: [ { message: 'loops are not allowed' } ]
    },
    {
      code: 'while (i <= n) { console.log(i); }',
      errors: [ { message: 'loops are not allowed' } ]
    },
    {
      code: 'do { console.log(i); } while (i <= n)',
      errors: [ { message: 'loops are not allowed' } ]
    },
    {
      code: 'for (i of [1, 2, 3]) { console.log(i) }',
      parser: 'babel-eslint',
      errors: [ { message: 'loops are not allowed' } ]
    }
  ]
});
