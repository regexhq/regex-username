# regex-username
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Regular expression for usernames.

## Installation
```bash
npm install regex-username
```

## Usage
```js
var regex = require('regex-username');

regex().test('tobi-ferret');
// => true
```

## Why?
Which usernames to allow typically varies between applications. For prototypes
however it's nice to have an off the shelf solution. This module is that
solution. It follows the same rules GitHub uses:
> Username may only contain alphanumeric characters or dashes and cannot begin
with a dash

## See Also
- [regex-email](https://github.com/regexps/email)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/regex-username.svg?style=flat-square
[npm-url]: https://npmjs.org/package/regex-username
[travis-image]: https://img.shields.io/travis/regexps/regex-username.svg?style=flat-square
[travis-url]: https://travis-ci.org/regexps/regex-username
[coveralls-image]: https://img.shields.io/coveralls/regexps/regex-username.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/regexps/regex-username?branch=master
[downloads-image]: http://img.shields.io/npm/dm/regex-username.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/regex-username
