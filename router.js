const route = (handle, pathname, response) => {
  if(typeof handle[pathname] === 'function'){
    return handle[pathname](response)
  }else{
    
    response.writeHead(404, {'Content-Type': 'text/plain;charset=utf-8'})
    response.write('404 Not found')
    response.end()
  }
}

exports.route = route