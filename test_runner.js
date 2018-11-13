const runCli = require('jest-cli').runCLI;

const config = {
  testRegex: 'hello.test.js',
  transform: {'^.+\\.js$': 'babel-jest'},
  collectCoverage: true
};

const c = {}
c.config = JSON.stringify(config)

runCli(c, [__dirname])
