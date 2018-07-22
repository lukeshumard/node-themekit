const {execSync} = require('child_process');

function run(command) {
  return execSync(command, (err, stdout, stderr) => {
    if (err) { console.error(err); }
    if (stderr) { console.error(stderr); }
  }).toString();
}

function exists(command) {
  const which = process.platform === 'win32' ? 'where' : 'which';
  const value = run(`${which} ${command}`);
  const noLength = (value.trim().length === 0);
  if (noLength) {
    return false;
  }

  const notFound = value.match(/^[\w]+ not found/g);
  if (notFound) {
    return false;
  }

  return true;
}

module.exports = exists;
