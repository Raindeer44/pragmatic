const rule = require('../rules/lib/no-iife');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({
  parserOptions: {ecmaVersion: 2018}
});

const errors = [{
	ruleId: 'no-iife',
	message: 'Immediately-invoked function expressions are not allowed'
}];

ruleTester.run('no-iife', rule, {
  valid: [
    'foo()',
    'bar(a, b, c)',
    'function baz() {}; baz();',
    'var x = function() {}; var y = x();'
  ],
  invalid: [
    {
      code: 'var x = function() {}();',
      errors,
    },
    {
      code: 'var x = (function () {})();',
      errors,
    },
    {
      code: 'var x = (function () {}())',
      errors,
    },
    {
      code: '(function x() {})();',
      errors,
    },
    {
      code: '(function x() {}());',
      errors,
    },
  ],
});
