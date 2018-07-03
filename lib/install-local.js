const checkLocal = require('./check-local');
// const {version} = require('./default-config');

function canInstallLocally(opts = {}) {

  const noLocalCopy = !checkLocal.exists('theme');
  if (noLocalCopy || !opts.local) { return false; }

  // const localVersion = checkLocal.version('theme');
  // const notMatchingVersion = (localVersion !== version);
  // if (notMatchingVersion) { return false; }

  return true;

}

module.exports = canInstallLocally;
