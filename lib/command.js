const {spawn} = require('child_process');
const {join} = require('path');
const {binName, destination, local} = require('./config');
const {emptyFn} = require('./_utils');

const defaultOpts = {binName, destination, local};

module.exports = function(commands = [], options = {}, cb = emptyFn) {

  const opts = Object.assign({}, defaultOpts, options);
  const installPath = opts.local ? 'theme' : join(opts.destination, opts.binName);
  const child = spawn(installPath, commands);
  child.stdout.setEncoding('utf8');
  child.stdout.pipe(process.stdout);

  child.on('error', (err) => {
    console.error('Theme Kit Error: ', err);
    cb(err);
  });

  child.on('close', () => {
    cb();
  });

};
