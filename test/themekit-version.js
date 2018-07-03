const command = require('../lib/command');

command(['version'], {}, (err) => {
  if (err) { return; }

  console.log('Test has completed.');
});
