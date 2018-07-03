const BinWrapper = require('bin-wrapper');
const spinner = require('simple-spinner');

const cleanInstallPath = require('./clean-install-path');
const logger = require('./logger')(2);

function remoteInstall(opts, cb = () => {}) {

  const url = `${opts.baseURL}/v${opts.version}`;
  logger.silly('Theme Kit installation starting');
  spinner.start();

  const installer = new BinWrapper()
    .src(`${url}/darwin-amd64/theme`, 'darwin')
    .src(`${url}/linux-386/theme`, 'linux')
    .src(`${url}/linux-amd64/theme`, 'linux', 'x64')
    .src(`${url}/windows-386/theme.exe`, 'win32')
    .src(`${url}/windows-amd64/theme.exe`, 'win32', 'x64')
    .dest(opts.destination)
    .use(opts.binName);

  const installPath = installer.path();

  return cleanInstallPath(installPath, function(err) {
    if (err) {
      throw err;
    }

    return installer.run(['version'], function(runErr) {
      if (runErr) {
        throw runErr;
      }

      spinner.stop();
      logger.info('Theme Kit path: ' + installPath);
      return cb(null, installPath);
    });
  });

}

module.exports = remoteInstall;
