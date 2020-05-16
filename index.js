const {start} = require('./server')
const {route} = require('./router')
const requestHandlers = require('./requestHandlers')

let handle = {}

handle['/'] = requestHandlers.start
handle['/start'] = requestHandlers.start
handle['/upload'] = requestHandlers.upload

start(route, handle)