'use strict';
const dbs = require('deep-blue-string');
const regs = require('regs');

module.exports = function (obj) {
  const argLength = arguments.length;

  // validate arguments
  if (typeof obj !== 'object') {
    throw new TypeError(`Expected an object, got ${typeof obj}`);
  }
  if (argLength !== 1) {
    throw new Error(`Expected 1 arguments, got ${argLength}`);
  }

  const strObj = JSON.stringify(obj);
  const regResults = regs.yeoman('g').exec(strObj);

  return dbs(obj, String.prototype.replace, [regResults[0], obj[regResults[1]]]);
};
