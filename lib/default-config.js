const {join} = require('path');
const pkg = require('../package.json');

const {local, version} = pkg.themekit;

module.exports = {
  baseURL: 'https://shopify-themekit.s3.amazonaws.com',
  local,
  version,
  destination: join(__dirname, '..', 'bin'),
  binName: process.platform === 'win32' ? 'theme.exe' : 'theme'
};
