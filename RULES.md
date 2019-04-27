# Pragmatic Style Guide

> _Rules have been decided, but are still being compiled here_

This is a summary of Pragmatic JavaScript style. Rules are rougly organized by
topic.

- Always use a `return` statement within Array method callbacks [array-callback-return] [problem]
- Always use dot notation to access object properties when possible [dot-notation] [problem]
- Always use `===` for comparisons [exceptions] [eqeqeq] [problem]
- Never use `callee` or `caller` [no-caller] [optimization]
- Never use arrow functions in a way which may be confused for comparison operators [no-confusing-arrow] [problem]
- Never duplicate import statements [no-duplicate-imports] [problem]
- Never use `eval` [no-eval] [problem]
- Never extend native objects [no-extend-native] [problem]
- Never use `bind` when unnecessary [no-extra-bind] [problem]
- Never implicitly declare global variables [no-implicit-global] [problem]
- Never use `setTimeout` or `setInterval` to execute a string [no-implied-eval] [problem]
- Never use `this` in an invalid context [no-invalid-this] [problem]
- Never use labels [no-labels] [problem]
- Never create a multi-line string via escaped newlines [no-multi-str] [clean]
- Never create functions via the `Function` constructor [no-new-func] [problem]
- Avoid creating primitive types via theiar wrappers [no-new-wrappers] [problem]

