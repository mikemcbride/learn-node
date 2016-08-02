'use strict'
const net = require('net')
const strftime = require('strftime')

const port = Number(process.argv[2])

function now () {
  return strftime('%F %H:%M')
}

net.createServer(socket => {
  socket.end(now() + '\n')
}).listen(port)
