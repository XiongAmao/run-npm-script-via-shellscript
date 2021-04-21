const env = process.env.npm_config_env
const { exec } = require('child_process')

const cmdMap = {
  prod: 'npm run build:prod',
  test: 'npm run build:test',
  error: 'npm run build:error'
}

const cmd = cmdMap[env]

if (cmd) {
  const child = exec(cmd, {
    stdio: 'inherit'
  }, (err, stdout, stderr) => {
    if (err) {
      console.error(err)
    }
    console.log(stdout)
    console.error(stderr)
  })

  child.stdout.on('data', (data) => {
    console.log(data)
  })
  child.stderr.on('data', (data) => {
    console.error(data)
  })
}
