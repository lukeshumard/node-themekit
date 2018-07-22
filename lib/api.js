const command = require('./command');
const {emptyFn, isArray, isFn, isObj, objIsEmpty} = require('./_utils');

function api(commands = [], opts = {}, cb = emptyFn) {
  const commandsNotArray = !isArray(commands);
  const optsNotObj = !isObj(opts);
  const callbackNotFn = !isFn(cb);
  if (commandsNotArray) {
    throw new Error('API Commands is not an Array');
  }
  if (optsNotObj) {
    throw new Error('API Options is not an Object');
  }
  if (callbackNotFn) {
    throw new Error('API Callback is not a Function');
  }
  command(commands, opts, cb);
}

function callApi(commands = [], opts = {}, cb = emptyFn) {
  const callback = (isFn(opts)) ? opts : cb;
  const noOpts = !isObj(opts) || objIsEmpty(opts);
  const options = (noOpts) ? {} : opts;
  api(commands, options, callback);
}

function apiCommand({args, opts = {}}, cb) {
  callApi(args, opts, cb);
}

callApi.command = apiCommand;

module.exports = callApi;
