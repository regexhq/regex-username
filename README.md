# regex-username
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Regular expression for usernames - it follows the same rules that GitHub uses.

## Installation

```sh
npm install regex-username
```

## Usage

```js
var regex = require('regex-username');

regex().test('foo-bar'); // => true
regex().test('foobar'); // => true
regex().test('3foobar'); // => true
regex().test('3foo-bar'); // => true
regex().test('foo-bar-'); // => false
regex().test('-foo-bar'); // => false
regex().test('foo--bar'); // => false
regex().test('~derp@darp---++asdf'); // => false
regex().test('derp@mail.com'); // => false
```

## Why?
Which usernames to allow typically varies between applications. For prototypes
however it's nice to have an off the shelf solution. This module is that
solution. It follows the same rules GitHub uses:

> Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen.

## See Also
- [regex-email](https://github.com/regexhq/regex-email)
- [youtube-regex](https://github.com/regexhq/youtube-regex)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/regex-username.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/regex-username
[travis-image]: https://img.shields.io/travis/regexhq/regex-username.svg?style=flat-square
[travis-url]: https://travis-ci.org/regexhq/regex-username
[coveralls-image]: https://img.shields.io/coveralls/regexhq/regex-username.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/regexhq/regex-username?branch=master
[downloads-image]: http://img.shields.io/npm/dm/regex-username.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/regex-username
