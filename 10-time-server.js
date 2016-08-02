'use strict'
const net = require('net');
const strftime = require('strftime');

function now () {
  return strftime('%F %H:%M');
}

const server = net.createServer(socket => {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
