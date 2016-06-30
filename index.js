'use strict';
const ejs = require('ejs');

module.exports = function (obj) {
  // validate arguments
  if (typeof obj !== 'object') {
    throw new TypeError(`Expected an object, got ${typeof obj}`);
  }

  const strObj = JSON.stringify(obj);
  return JSON.parse(ejs.render(strObj, obj));
};
