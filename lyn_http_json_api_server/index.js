const http = require('http')
const url = require('url')
let data

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

const server = http.createServer(function (req, res) {
const parsing = url.parse(req.url, true)
const time = new Date(parsing.query.iso)
  
  
  
 if (/^\/api\/parsetime/.test(req.url)) {
    data = parsetime(time)
  } 
  else if (/^\/api\/unixtime/.test(req.url)) {
    data = unixtime(time)
  }

  if (data) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(data))
  } 
  else {
    res.writeHead(404,'error')
    res.end()
  }
})
server.listen(Number(process.argv[2]))