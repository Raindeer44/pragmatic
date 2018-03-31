# Pragmatic Style Guide

[![CC BY-SA 3.0](https://img.shields.io/badge/license-CC%20BY--SA%203.0-green.svg)](https://creativecommons.org/licenses/by-sa/3.0/)

Pragmatic Style is a guide for writing consistent, readable and aesthetically pleasing javascript code. It is inspired by what is popular within the community, and flavored with some personal opinions. It is designed to be what it is named for: pragmatic. This means writing human readable which is inherently easier to debug than what some may call more "succinct" coding.

Pragmatic Style emphasizes human-readability, debug-ability and consistency.

## The TL;DR

- Two spaces for indentation
- Use semicolons everywhere except after closing braces
- Use single quotes for strings
  - Except for using backticks for interpolation
  - Except for in JSON
- Whitespace around conditionals
- No whitespace after function name
- Initialize one variable at a time
- Use camelCase for variables, properties and functions
  - Except constants may be entirely uppercase
- Class names should use CapitalizedCamelCase
- Use const and let in lieu of var
- Use `===` for equality unless you're certain you want `==`
- Tend towards small, atomic functions
- Return early from functions
- Avoid nested closures
- Avoid `eval`

**_A complete set of rules and rationale can be found in the [RULES.md](./RULES.md) file.

---

[![CC BY-SA 3.0](https://i.creativecommons.org/l/by-sa/3.0/88x31.png)](https://creativecommons.org/licenses/by-sa/3.0/)
