const core = require('./@actions/core');

try {
  const greetee = core.getInput('greetee');
  const message = `Hello, ${greetee}!`;
  core.info(message);
  core.setOutput('greeting', message);
} catch (error) {
  core.setFailed(error.message);
}
