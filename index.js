'use strict';
const dbs = require('deep-blue-string');
module.exports = function (obj) {
  const argLength = arguments.length;

  // validate arguments
  if (typeof obj !== 'object') {
    throw new TypeError(`Expected an object, got ${typeof obj}`);
  }
  if (argLength !== 1) {
    throw new Error(`Expected 1 arguments, got ${argLength}`);
  }

  const reg = new RegExp(/<%=\s*(.*)\s+=>/g);

  const strObj = JSON.stringify(obj);
  const regResults = reg.exec(strObj);

  return dbs(obj, String.prototype.replace, [regResults[0], obj[regResults[1]]]);
};
