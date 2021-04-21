const env = process.env.npm_config_env
const {  spawn } = require('child_process')

const cmdMap = {
  prod: 'build:prod',
  test: 'build:test',
  error: 'build:error'
}

const cmd = cmdMap[env]

if (cmd) {
  spawn('npm', ['run', cmd], {
    stdio: 'inherit',
    shell: true
  })
}
