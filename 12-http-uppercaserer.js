'use strict'
const http = require('http')
const map = require('through2-map')

const port = Number(process.argv[2])

http.createServer((req, res) => {
  if (req.method !== 'POST') {
    return res.end('I only accept POST\n')
  }
  req.pipe(map(chunk => chunk.toString().toUpperCase()))
    .pipe(res)
}).listen(port)
