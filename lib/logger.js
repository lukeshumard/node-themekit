function logger(logLevel) {
  let level;

  switch (logLevel) {
    case 'silent':
      level = 0;
      break;
    case 'error':
      level = 1;
      break;
    case 'all':
      level = 2;
      break;
    case 'silly':
      level = 3;
      break;
    default:
      level = 2;
  }

  function log(args) {
    args.forEach((arg) => console.log(arg));
  }

  function info(...args) {
    if (level >= 2) { log(args); }
  }

  function error(...args) {
    if (level >= 1) { log(args); }
  }

  function silly(...args) {
    if (level >= 3) { log(args); }
  }

  return {
    level,
    info,
    error,
    silly
  };
}

module.exports = logger;
