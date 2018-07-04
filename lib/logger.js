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

  function info(...args) {
    if (level >= 2) { console.log(args); }
  }

  function error(...args) {
    if (level >= 1) { console.error(args); }
  }

  function silly(...args) {
    if (level >= 3) { console.log(args); }
  }

  return {
    level,
    info,
    error,
    silly
  };
}

module.exports = logger;
