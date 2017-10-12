const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, dst) {
  dst.writeHead(200, { 'content-type': 'text/plain' })
  fs.createReadStream(process.argv[3]).pipe(dst)
})

server.listen(Number(process.argv[2]))