'use strict';
const f = require('file-bytes');

console.log('index.js is ' + f.sync('./index.js') + ' bytes');
