# duplival
[![npm version](https://img.shields.io/npm/v/duplival.svg)](https://www.npmjs.com/package/duplival)
[![Build Status](https://travis-ci.org/dawsonbotsford/duplival.svg?branch=master)](https://travis-ci.org/dawsonbotsford/duplival)
[![npm download count](http://img.shields.io/npm/dm/duplival.svg?style=flat)](http://npmjs.org/duplival)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> JSON + variables === <3 in only 292 bytes

<br>

## Usage

```js
const duplival = require('duplival');

duplival({
  key1: 'value1',
  key2: '<%= key1 %>'
});
/*
{
  key1: 'value1',
  key2: 'value1'
};
*/
```

<br>

## Install

```
npm install --save duplival
```

<br>

## Advanced Example
```js
const duplival = require('duplival');

duplival({
  key1: 1,
  key2: '<%= key1 %>',
  key3: '<%= key1 + 2 %>'
});
/*
{
  key1: 1,
  key2: '1',
  key3: '3'
};
*/


const piglatin = require('piglatin');

const piglatinTemplate = {
  translate: piglatin,
  englishSentence: 'This is a very very long string you would not want to duplicate or type out. Yet you do want to do some type of operation with it. Let\'s say for example that you want to translate this. With english as your base and pig-latin as your goal, let\'s have some fun',
  piglatinSentence: `<%= translate(englishSentence) %>`
};
duplival(piglatinTemplate).piglatinSentence;
/*
'histay is a eryvay eryvay onglay tringsay ouyay ouldway otnay antway to uplicateday or ypetay utoay etyay ouyay do antway to do omesay ypetay of perationoay ithway it etlay s aysay orfay xampleeay hattay ouyay antway to ranslatetay histay ithway nglisheay as ouryay asebay ndaay igpay atinlay as ouryay oalgay etlay s avehay omesay unfay';
*/
```

<br>

#### How did that just happen?

`duplival` is powered by mighty [ejs templating](http://ejs.co/). Although originally intended for html, ejs can easily be hijacked into being our engine. It means we can now use variables, conditionals, and even loops inside of JSON objects.

<br>

## API

### duplival(target)

##### target

Type: `object`

Powered by [ejs](http://ejs.co/)'s powerful templating, this **tiny module** can help reduce code duplication create smaller JSON objects in your code.

<br>

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)

<br>

---
If you like this, star it. If you want to follow me, follow me.
