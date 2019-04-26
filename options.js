const path = require('path');
const pkg = require('./package.json');
const eslint = require('eslint');

module.exports = {
	cmd: 'pragmatic',
	version: pkg.version,
	homepage: pkg.homepage,
	bugs: pkg.bugs.url,
	eslint,
	tagline: 'Clean, modern and correct code',
	eslintConfig: {
		configFile: path.join(__dirname, 'eslintrc.json')
	}
};
