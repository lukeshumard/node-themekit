/* eslint no-process-env: "warn" */
const fs = require('fs');
const {join} = require('path');
const localPkg = require('../package.json');

function projectPkg(cwd) {
  let pkg = {};
  const filePath = join(cwd, './package.json');
  const fileExists = fs.existsSync('./package.json');
  if (fileExists) {
    const {themekit} = JSON.parse(fs.readFileSync(filePath));
    if (typeof themekit !== 'undefined') {
      pkg = themekit;
    }
  }

  return pkg || {};
}

function Config() {
  const defaults = {
    destination: join(__dirname, '..', 'bin'),
    binName: process.platform === 'win32' ? 'theme.exe' : 'theme'
  };
  const settings = projectPkg(process.env.INIT_CWD || process.cwd());
  const options = Object.assign({}, defaults, localPkg.themekit, settings);
  return options;
}

module.exports = Config();
