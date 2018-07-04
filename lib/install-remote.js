const BinWrapper = require('bin-wrapper');
const ora = require('ora');

const cleanInstallPath = require('./clean-remote');
const {emptyFn} = require('./_utils');
const logger = require('./logger')(2);

function remoteInstall(opts, cb = emptyFn) {

  const url = `${opts.baseURL}/v${opts.version}`;
  logger.silly('Theme Kit installation starting');
  const spinner = ora({
    spinner: 'dots',
    text: `Installing ThemeKit version ${opts.version}`
  });
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

  return cleanInstallPath(installPath, (err) => {
    if (err) { throw err; }

    return installer.run(['version'], (runErr) => {
      if (runErr) {
        spinner.fail();
        throw runErr;
      }

      spinner.succeed();
      logger.info(`Theme Kit path: ${installPath}`);
      return cb(null, installPath);
    });
  });

}

module.exports = remoteInstall;
