const theme = require('./theme');

console.log('command file');
const commands = process.argv.slice(2);
theme(commands, {local: true});
