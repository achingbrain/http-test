var http = require('http'),
  moment = require('moment')
  freeport = require('freeport')

freeport((error, port) => {
  var version = 14

  http.createServer(function(req, res) {
    console.info('incoming request for version %d at %s!', version, moment().format('MMMM Do YYYY, h:mm:ss a'))
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('DERP DERP v' + version)
  }).listen(port)

  console.log('Server listening on %d - pid %d', port, process.pid)
})
