# duplival
[![npm version](https://img.shields.io/npm/v/duplival.svg)](https://www.npmjs.com/package/duplival)
[![Build Status](https://travis-ci.org/dawsonbotsford/duplival.svg?branch=master)](https://travis-ci.org/dawsonbotsford/duplival)
[![npm download count](http://img.shields.io/npm/dm/duplival.svg?style=flat)](http://npmjs.org/duplival)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Alias JSON values to reduce code duplication

<br>



## Install

```
npm install --save duplival
```


<br>

## Usage

```js
const duplival = require('duplival');

duplival({key1: 'value1', key2: '<%= key1 %>'});
//=> {key1: 'value1', key2: 'value1'}

duplival({key1: 'value1', key2: '<% key1 %>'});
//=> {key1: 'value1', key2: 'value1'}
```

<br>

## API

### duplival(target)

##### target

Type: `object`

Performs a find and replace on all strings in the target object. Operates on the [yeoman](https://github.com/yeoman/yeoman) style string delimeters (`<%= value =>`).

<br>

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)

<br>

---
If you like this, star it. If you want to follow me, follow me.
