const command = require('../lib/command');

command({
  args: ['version']
}, (err) => {
  if (err) {
    return;
  }

  console.log('Test has completed.');
});
