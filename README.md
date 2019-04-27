# Pragmatic Style

Pragmatic is a guide for writing clean, modern and problem-free JavaScript.

[![pipeline status](https://gitlab.com/thornjad/pragmatic/badges/master/pipeline.svg?style=flat-square)](https://gitlab.com/thornjad/pragmatic/commits/master)
[![npm](https://img.shields.io/npm/v/pragmatic-style.svg?style=flat-square)](https://www.npmjs.com/package/pragmatic-style)
[![license](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://gitlab.com/thornjad/pragmatic/blob/master/LICENSE)

## Installation

```
npm install pragmatic
```

## Rules:

All rules are documented in [RULES.md](./RULES.md). Pragmatic inherits from `standard` style, but with significant differences. Some of the most important include:

- Semicolons are required
- Modern syntax is enforced
- Explicit loops are disallowed
- Optimization suggestions for regular expressions are provided

## Usage

The easiest way to use this Pragmatic style checker is to install it globally.

```shell
npm install -g pragmatic
```

Once installed, simply run in your project directory with:

```shell
pragmatic
```

### Run as a test

To automate the process, you can use Pragmatic style as part of your testing process.

```shell
npm install --save-dev pragmatic
```

Then in your `package.json`:

```json
{
	"scripts": {
		"test": "pragmatic && other-tests"
	}
}
```

### Ignoring files

Pragmatic automatically ignores:

- `node_modules/**`
- `*.min.js`
- `bundle.js`
- `coverage/**`
- `.*`
- Anything in `.gitignore`

If you would like to ignore additional folders, add a `pragmatic.ignore` property to `package.json`:

```json
{
	"pragmatic": {
		"ignore": [
			"**/out/",
			"tmp.js"
		]
	}
}
```

## License

Copyright (c) 2019 Jade Michael Thornton

Permission to use, copy, modify, and/or distribute this software for any purpose
with or without fee is hereby granted, provided that the above copyright notice
and this permission notice appear in all copies.

See [LICENSE](./LICENSE) for more.
