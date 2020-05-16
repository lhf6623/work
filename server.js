const http = require('http')
const url = require('url')

const start = (route, handle) => {
  const onRequest = (require, response) => {
    let pathname = url.parse(require.url).pathname
    
    route(handle, pathname, response)
  }
  
  http.createServer(onRequest).listen(8888)
}

exports.start = start
