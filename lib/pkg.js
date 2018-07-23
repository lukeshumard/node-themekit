const command = require('./command');

const commands = process.argv.slice(2);
const opts = {local: true};
command(commands, opts);
