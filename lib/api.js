const command = require('./command');
const {emptyFn} = require('./_utils');

module.exports = function api(commands = [], cb = emptyFn) {
  if (!Array.isArray(commands)) {
    throw new Error('API Commands is not an Array');
  }
  command(commands, {}, cb);
};
