#!/usr/bin/env node
const parsedArgv = require('minimist')(process.argv.slice(2));
const install = require('./install');
const command = require('./command');


if (parsedArgv._[0] === 'install') {
  console.log('args', parsedArgv);
  install(parsedArgv);
} else {
  const options = {
    args: process.argv.slice(2)
  };

  if (parsedArgv.logLevel) {
    options.logLevel = parsedArgv.logLevel;
  }

  command(options);
}
