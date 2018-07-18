const {execSync} = require('child_process');

function run(command) {
  return execSync(command, (err, stdout, stderr) => {
    if (err) { console.log('ERR', err); }
    if (stderr) { console.log('STDERR', stderr); }
  }).toString();
}

function exists(command) {
  const value = run(`which ${command}`);
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

function version(command) {
  const value = run(`${command} version`);
  const noLength = (value.trim().length === 0);
  if (noLength) {
    return false;
  }
  const rVer = new RegExp(/\d+\.\d+\.\d/);
  const versionNumber = rVer.exec(value)[0];
  return versionNumber;
}

module.exports = {exists, version};
