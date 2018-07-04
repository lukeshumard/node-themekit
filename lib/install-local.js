const {exec} = require('pkg');
const ora = require('ora');

const checkLocal = require('./check-local');
const {binName} = require('./config');

function canInstallLocally(opts = {}) {

  const noLocalCopy = !checkLocal.exists('theme');
  if (noLocalCopy || !opts.local) { return false; }

  localInstall();
  return true;

}

function localInstall() {
  const action = exec(['lib/command.js', '--target', 'host', '--output', `bin/${binName}`]);
  ora.promise(action, {
    spinner: 'dots',
    text: 'Linking ThemeKit to local `theme`'
  });
  action
    .then(() => {
      return true;
    })
    .catch((err) => {
      console.error('Error Installing Local Themekit: ', err);
    });
}

module.exports = canInstallLocally;
