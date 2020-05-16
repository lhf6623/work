const exec = require('child_process').exec

const start = (response) => {
  exec('ls -lah', (error, stdout, stderr) => {
    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
    response.write(stdout)
    response.end()
  })
  return 'start'
}

const upload = (response) => {
  response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
  response.write('你好啊，test2')
  response.end()
}

exports.start = start
exports.upload = upload