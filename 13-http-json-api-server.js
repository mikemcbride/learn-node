'use strict'
const http = require('http')
const url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return {
    unixtime: time.getTime()
  }
}

http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true)
  const time = new Date(parsedUrl.query.iso)
  let result

  switch (parsedUrl.pathname) {
    case '/api/parsetime':
      result = parsetime(time)
      break
    case '/api/unixtime':
      result = unixtime(time)
      break
    default:
      res.writeHead(404)
      res.end()
      break
  }

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(result))
}).listen(Number(process.argv[2]))
