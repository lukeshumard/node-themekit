const {exec} = require('child_process');

const commands = process.argv.slice(2);
const command = `theme ${commands.join(' ')}`;

exec(command, (err, stdout, stderr) => {
  if (err) {
    // stderr will show the message
  }
  const msg = stderr || stdout;
  console.log(msg);
});
