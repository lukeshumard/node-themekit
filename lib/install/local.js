const checkLocal = require('./check-local');

function canInstallLocally(opts = {}) {

  const noLocalCopy = !checkLocal('theme');
  if (noLocalCopy || !opts.local) { return false; }

  return true;

}

module.exports = canInstallLocally;
