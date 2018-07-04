const localInstall = require('./install-local');
const remoteInstall = require('./install-remote');
const defaults = require('./config');
const {emptyFn} = require('./_utils');

module.exports = function install(opts = {}, cb = emptyFn) {
  const options = Object.assign({}, defaults, opts);
  const fns = [localInstall, remoteInstall];
  fns.some(fn => fn(options, cb));
};
