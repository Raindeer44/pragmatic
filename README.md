# Pragmatic Style Guide

[![CC BY-SA 3.0](https://img.shields.io/badge/license-CC%20BY--SA%203.0-green.svg)](https://creativecommons.org/licenses/by-sa/3.0/)

Pragmatic Style is a guide for writing consistent, readable and aesthetically pleasing javascript code. It is inspired by what is popular within the community, and flavored with some personal opinions. It is designed to be what it is named for: pragmatic. This means writing human readable which is inherently easier to debug than what some may call more "succinct" coding.

Pragmatic Style emphasizes human-readability, debug-ability and consistency.

## Table of contents

<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Table of contents](#table-of-contents)
- [Formatting](#formatting)
	- [Two spaces for indentation](#two-spaces-for-indentation)
	- [Newlines](#newlines)
	- [No trailing whitespace](#no-trailing-whitespace)
	- [Use Semicolons](#use-semicolons)
	- [80 characters per line](#80-characters-per-line)
	- [Use single quotes](#use-single-quotes)
	- [Opening braces go on the same line](#opening-braces-go-on-the-same-line)
	- [Whitespace around conditionals and not before arguments](#whitespace-around-conditionals-and-not-before-arguments)
	- [Initialize one variable at a time](#initialize-one-variable-at-a-time)
- [Naming Conventions](#naming-conventions)
	- [Use lowerCamelCase for variables, properties and function names](#use-lowercamelcase-for-variables-properties-and-function-names)
	- [Use UpperCamelCase for class names](#use-uppercamelcase-for-class-names)
- [Variables](#variables)
	- [Const and let](#const-and-let)
	- [Object / Array creation](#object-array-creation)
- [Conditionals](#conditionals)
	- [Use the === operator](#use-the-operator)
	- [Use descriptive conditions](#use-descriptive-conditions)
- [Functions](#functions)
	- [Write small functions](#write-small-functions)
	- [Return early from functions](#return-early-from-functions)
	- [No nested closures](#no-nested-closures)
	- [Method chaining](#method-chaining)
- [Miscellaneous](#miscellaneous)
	- [Object.freeze, Object.preventExtensions, Object.seal, with, eval](#objectfreeze-objectpreventextensions-objectseal-with-eval)
	- [Requires At Top](#requires-at-top)
	- [Getters and setters](#getters-and-setters)

<!-- /TOC -->

## Formatting

You may want to use [editorconfig.org](https://editorconfig.org/) to enforce the formatting settings in your editor. Use the [Pragmatic Style Guide .editorconfig file](.editorconfig) to have indentation, newlines and whitespace behavior automatically set to the rules set up below.

Also included are .jshintrc and .eslintrc pre-made for your linting convenience.

### Two spaces for indentation

Use two spaces for indenting your code, never use tabs. More important than using spaces or tabs is that you never ever mix the use of spaces and tabs within a project.

### Newlines

Use UNIX-style newlines (`\n`). Never use Windows-style (`\r\n`) nor old-school Mac-style (`\r`).

Every file must end with a single newline.

### No trailing whitespace

Just like you brush your teeth after every meal, you clean up any trailing whitespace in your JS files before committing. Otherwise the rotten smell of careless neglect will eventually drive away contributors and/or co-workers. Luckily most modern editors do this automatically.

### Use Semicolons

According to [scientific research][1], the usage of semicolons is a core value of our community. Consider the points of [the opposition][2], but be a traditionalist when it comes to abusing error correction mechanisms for cheap syntactic pleasures. If you still really don't like semicolons, consider [Coffeescript][3] instead.

[1]: https://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: https://news.ycombinator.com/item?id=1547647
[3]: http://coffeescript.org/

### 80 characters per line

Limit your lines to 80 characters. Yes, screens have gotten much bigger over the last few years, but your brain has not. Use the additional room for tiling or some other good use of space.

### Use single quotes

Use single quoted strings, except in JSON.

*Right:*

```js
var foo = 'bar';
```

*Wrong:*

```js
var foo = "bar";
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
### Whitespace around conditionals and not before arguments

There should be whitespace before and after conditional statements. However, there is no whitespace between a function name and its arguments. The pattern here is to put whitespace after keywords (function names are not keywords).

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
    console.log('I cause mild confusion');
  }
}
```

### Initialize one variable at a time

Initialize one variable at a time. This makes the initialization value more clear, and aids refactoring. However, ignore [Crockford][4] when it comes to declaring variables deeper inside a function, just put the declarations wherever they make the most sense, keeping in mind the temporal dead zone.

*Right:*

```js
var keys = ['foo', 'bar'];
var values = [23, 42];
var keyTmp = keys;

var object = {};
while (keys.length) {
  var key = keys.pop();
  object[key] = values.pop();
}
```

*Wrong:*

```js
var keyTmp = keys = ['foo', 'bar'];
var values = [23, 42];

var object = {};
while (keys.length) {
  var key = keys.pop();
  object[key] = values.pop();
}
```

[4]: https://javascript.crockford.com/code.html



## Naming Conventions

### Use lowerCamelCase for variables, properties and function names

Variables, properties and function names should use `lowerCamelCase`.  They should also be descriptive. Single character variables and uncommon abbreviations should be avoided in most situations. Single-character variables are acceptable for extremely obvious cases, such as a loop incrementer `i` or coordinates `[x, y]`, etc..

*Right:*

```js
var adminUser = db.query('select * from users ...');
```

*Wrong:*

```js
var admin_user = db.query('select * from users ...');
```
*Wrong:*

```js
var au = db.query('select * from users ...');
```

### Use UpperCamelCase for class names

Class names should be capitalized using `UpperCamelCase`.

*Right:*

```js
class BankAccount {

}
```

*Wrong:*

```js
class bank_account {

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

### Object / Array creation

Use trailing commas and put *short* declarations on a single line. Only quote
keys when you need to use illegal symbol characters (like hyphens or spaces):

*Right:*

```js
var a = ['hello', 'world'];
var b = {
  good: 'code',
  'is generally': 'pretty',
};
```

*Wrong:*

```js
var a = [
  'hello', 'world'
];
var b = {"good": 'code'
        , is generally: 'pretty'
        };
```



## Conditionals

### Use the === operator

Programming is not about remembering [stupid rules][6]. Use the triple equality operator as it will work just as expected.

*Right:*

```js
var a = 0;
if (a !== '') {
  console.log('winning');
}

```

*Wrong:*

```js
var a = 0;
if (a == '') {
  console.log('losing');
}
```

[6]: https://developer.mozilla.org/en/JavaScript/Reference/Operators/Comparison_Operators

### Use descriptive conditions

Any non-trivial conditions should be assigned to a descriptively named variable or function:

*Right:*

```js
var isValidPassword = password.length >= 4 && /^(?=.*\d).{4,}$/.test(password);

if (isValidPassword) {
  console.log('winning');
}
```

*Wrong:*

```js
if (password.length >= 4 && /^(?=.*\d).{4,}$/.test(password)) {
  console.log('losing');
}
```

## Functions

### Write small functions

Keep your functions short. A good function fits on a slide that the people in
the last row of a big room can comfortably read. So don't count on them having
perfect vision and limit yourself to ~15 lines of code per function. When in
doubt, make it shorter.

### Return early from functions

Avoid deep nesting of if-statements, always return a function's value as early as possible.

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

### No nested closures

Use closures, but don't nest them. Otherwise your code will become a mess.

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

### Method chaining

One method per line should be used if you want to chain methods. Make it look like Coffeescript, if you can.

You should also indent these methods so it's easier to tell they are part of the same chain.

*Right:*

```js
User
  .findOne({ name: 'foo' })
  .populate('bar')
  .exec(function(err, user) {
    return true;
  });
```

*Wrong:*

```js
User
.findOne({ name: 'foo' })
.populate('bar')
.exec(function(err, user) {
  return true;
});

User.findOne({ name: 'foo' })
  .populate('bar')
  .exec(function(err, user) {
    return true;
  });

User.findOne({ name: 'foo' }).populate('bar')
.exec(function(err, user) {
  return true;
});

User.findOne({ name: 'foo' }).populate('bar')
  .exec(function(err, user) {
    return true;
  });
```



## Miscellaneous

### Object.freeze, Object.preventExtensions, Object.seal, with, eval

Crazy shit you will probably never need. Stay away from it.

### Requires At Top

Always put requires at top of file to clearly illustrate a file's dependencies. Besides giving an overview for others at a quick glance of dependencies and possible memory impact, it allows one to determine if they need a package.json file should they choose to use the file elsewhere.

### Getters and setters

Do not use setters, they cause more problems for people who try to use your software than they can solve. Encapsulation is your friend.

Feel free to use getters that are free from [side effects][7], like providing a length property for a collection class.

[7]: https://en.wikipedia.org/wiki/Side_effect_(computer_science)

---

[![CC BY-SA 3.0](https://i.creativecommons.org/l/by-sa/3.0/88x31.png)](https://creativecommons.org/licenses/by-sa/3.0/)
