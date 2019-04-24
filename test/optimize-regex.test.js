'use strict';

const rule = require('../../../lib/rules/optimize-regex'),
  RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();
ruleTester.run('optimize-regex', rule, {
  valid: [
    'let foo = /baz/i',
    'let foo = /bar/mig',
    'let foo = /\\/\\./',
    'let foo = /[/\\\\]$/',
  ],

  invalid: [
    {
      code: 'var re = /[a-zA-Z_0-9][A-Z_\\da-z]*\\e{1,}/',
      output: 'let re = /\\w+e+/',
      errors: [
        {
          message:
            '/[a-zA-Z_0-9][A-Z_\\da-z]*\\e{1,}/ can be optimized to /\\w+e+/',
          type: 'Literal',
        },
      ],
    },
    {
      code: 'let re = /foooooo/',
      output: 'let re = /fo{6}/',
      errors: [
        {
          message: '/foooooo/ can be optimized to /fo{6}/',
          type: 'Literal',
        },
      ],
    },
  ],
});
