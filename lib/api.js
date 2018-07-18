const command = require('./command');
const {emptyFn} = require('./_utils');

function api(commands = [], cb = emptyFn) {
  const commandsNotArray = !Array.isArray(commands);
  const callbackNotFn = (typeof cb !== 'function');
  if (commandsNotArray) {
    throw new Error('API Commands is not an Array');
  }
  if (callbackNotFn) {
    throw new Error('API Callback is not a Function');
  }
  command(commands, {}, cb);
}

function apiCommand(...args) {
  api(...args);
}

api.command = apiCommand;

module.exports = api;
