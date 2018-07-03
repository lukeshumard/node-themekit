const {exec} = require('pkg');

const checkLocal = require('./check-local');
const {binName} = require('./default-config');

function canInstallLocally(opts = {}) {

  const noLocalCopy = !checkLocal.exists('theme');
  if (noLocalCopy || !opts.local) { return false; }

  // const localVersion = checkLocal.version('theme');
  // const notMatchingVersion = (localVersion !== version);
  // if (notMatchingVersion) { return false; }

  // Install it locally
  localInstall();
  return true;

}

function localInstall() {
  // console.log('Installing Local Binary');
  exec(['lib/command.js', '--target', 'host', '--output', `bin/${binName}`])
    .then(() => {
      console.log('ThemeKit Local Installed');
      return true;
    })
    .catch(err => {
      console.error('Error Installing Local Themekit: ', err);
    });
}

module.exports = canInstallLocally;
