const env = process.env.npm_config_env
const { exec } = require('child_process')

const cmdMap = {
  prod: 'npm run build:prod',
  test: 'npm run build:test'
}

const cmd = cmdMap[env]

if (cmd) {
  exec(cmd, (err, stdout, stderr) => {
    console.log(stdout)
    console.log(stderr)

    if (err) {
      console.log(err)
    }
  })
}
