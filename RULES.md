This is an explanation and reasoning of the style rules in Pragmatic Style. A shorter, tl;dr version can be found on the [main page](./README.md).

## Formatting

You may want to use [editorconfig.org](https://editorconfig.org/) to enforce the formatting settings in your editor. Use the [Pragmatic Style Guide .editorconfig file](.editorconfig) to automatically lint for these rules.

Also included are .jshintrc and .eslintrc pre-made for your linting convenience.

### Two spaces for indentation

Use two spaces for indenting your code, never use tabs. More important than using spaces or tabs is that you never ever mix the use of spaces and tabs within a project.

### Use Semicolons

According to [scientific research][1], the usage of semicolons is a core value of our community. Consider the points of [the opposition][2], but be a traditionalist when it comes to abusing error correction mechanisms for cheap syntactic pleasures. The JS engine your code runs on will not be as smart as you when it tries to guess where you meant to put semicolons, and guesses wrong more often than some people seem to think.

Semicolons, if you're not aware, are one of two ways to mark the end of a statement, the other being braces. The primary reason to use them is to explicitly define where a statement ends, without leaving it up to an algorithm. 

Note: Semicolons are redundant following a closing brace, and so should not be used in that situation.

If you still really don't like semicolons, consider [Coffeescript][3] instead.

[1]: https://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: https://news.ycombinator.com/item?id=1547647
[3]: http://coffeescript.org/

### Use single quotes

Use single quoted strings, except in JSON. Also, of course, use back ticks for interpolation.

*Right:*

```js
const foo = 'bar';
```

*Wrong:*

```js
const foo = "bar";
```

### Opening braces go on the same line

Opening braces go on the same line as the statement. The 'wrong' way shown below is a remnant of early versions of C, but is no longer relevant to modern programming methods.

*Right:*

```js
if (true) {
  console.log('winning');
}
```

*Wrong:*

```js
if (true)
{
  console.log('losing');
}
```

### Whitespace around conditionals but not after function names

There should be whitespace before and after conditional statements, since whitespace should follow keyword operators. However, there is no whitespace between a function name and its arguments (a rule borrowed from Coffeescript, where whitespace here is in fact a syntax error).

*Right:*

```js
function infiniteFun() {
  while (true) {
    console.log('I am human readable');
  }
}
```

*Wrong:*

```js
function infiniteFun () {
  while(true) {
    console.log('I cause mild discomfort');
  }
}
```

### Initialize one variable at a time

Initialize one variable at a time. This makes the initialization value more clear, and aids refactoring. However, ignore [Crockford][4] when it comes to declaring variables deeper inside a function, just put the declarations wherever they make the most sense, keeping in mind the temporal dead zone.

*Right:*

```js
const keys = ['foo', 'bar'];
const values = [23, 42];
const keyTmp = keys;

const object = {};
let key;
while (keys.length) {
  key = keys.pop();
  object[key] = values.pop();
}
```

*Wrong:*

```js
var keyTmp = keys = ['foo', 'bar'];
const values = [23, 42];

const object = {};
while (keys.length) {
  var key = keys.pop();
  object[key] = values.pop();
}
```

[4]: https://javascript.crockford.com/code.html



## Naming Conventions

### Use camelCase for variables, properties and function names, except sometimes constants

Variables, properties and function names should use `camelCase`.  They should also be descriptive. Single character variables and uncommon abbreviations should be avoided in most situations. Single-character variables are acceptable for extremely obvious cases, such as a loop incrementer `i` or coordinates `[x, y]`, etc..

The exception to this is constant values, which may be acceptably named using upper-case names (i.e. `PI`).

*Right:*

```js
const adminUser = db.query('select * from users ...');
```

*Wrong:*

```js
const admin_user = db.query('select * from users ...');
```
*Wrong:*

```js
const au = db.query('select * from users ...');
```

### Use CapitalizedCamelCase for class names

Class names should be easily recognized by using `CapitalizedCamelCase`.

*Right:*

```js
class BankAccount {
  constructor() {}
}
```

*Wrong:*

```js
class bank_account {
  constructor() {}
}
```



## Variables

### Const and let

Use `const` whenever possible, and use `let` in cases when the variable will be reassigned. Avoid using `var` unless working with legacy code (pre-ES6). Using these instead of `var` signals intent about how the variable will be used. This allows better reasoning about code and therefore easier-to-find bugs. Compilers can also generate better optimizations when they know what you're thinking.

The associated behavior known as the [Temporal Dead Zone][5] enforces readability since humans read top-to-bottom. Keep this behavior in mind and you'll be fine.

*Right:*

```js
const fs = require('fs');

let a = {
  phone: 'home',
};
```

*Wrong:*

```js
var fs = require('fs');

var a = {
  name: 'bad guy'
}
```

[5]: https://gist.github.com/Raindeer44/52f3607058f74cea069911fcb5bd5c6a#file-tdz-bad-js


## Conditionals

### Use the === operator

There is a high probability that every time you want to compare two things, what you want is the triple equals. This 'strict equality' actually tests if two objects are equal, rather than just if they look like each other. This is a rule that can be bent if you really know what you're doing, but try not to bend it anyway.

*Right:*

```js
const a = 0;
if (a !== '') {
  console.log('winning');
}

```

*Wrong:*

```js
const a = 0;
if (a == '') {
  console.log('losing');
}
```

## Functions

### Write small, atomic functions

Keep your functions short. A good function fits on a slide that the people in the last row of a big room can comfortably read. So don't count on them having perfect vision and limit yourself to around 16 lines of code per function, hopefully less. When in doubt, make it shorter.

### Return early from functions

Avoid deep nesting of `if` statements and return a function's value as early as possible. This avoid unnecessary code from being written and/or possibly executed.

*Right:*

```js
function isPercentage(val) {
  if (val < 0) {
    return false;
  }

  if (val > 100) {
    return false;
  }

  return true;
}
```

*Wrong:*

```js
function isPercentage(val) {
  let outValue;
  if (val >= 0) {
    if (val < 100) {
      outValue = true;
    } else {
      outValue = false;
    }
  } else {
    outValue = false;
  }
  return outValue;
}
```

This particular example can actually be shortened significantly:

```js
const isPercentage = val => (val >= 0 && val <= 100);
```

### Avoid nested closures

Use closures, but try not to nest them. Doing so makes it difficult to reason about execution, especially when variable shadowing enters the picture.

*Right:*

```js
const sky = 'blue';
setTimeout(() => {
  console.log(sky);
  client.connect(afterConnect);
}, 1000);

function afterConnect() {
  console.log('is the sky');
}
```

*Wrong:*

```js
const sky = 'blue';
setTimeout(() => {
  console.log(sky);
  client.connect(() => {
    console.log('is not the sky');
  });
}, 1000);
```

## Miscellaneous

### `eval`

`eval` is unsafe and very rarely useful. It's use is typically a sign of bad code. Avoid at all costs.

