#!/usr/bin/env node
const minimist = require('minimist');
const install = require('./install');
const command = require('./command');

const options = process.argv.slice(2);
const args = minimist(options);
const method = args._[0];

if (method === 'install') {
  install();
} else {
  command(options);
}
