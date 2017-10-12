const http = require('http')
const map = require('through2-map')

const server = http.createServer(function (inStream, outStream) {
  if (inStream.method !== 'POST') {
    return outStream.end('Please send a POST\n')
}

inStream.pipe(map(function (chunk) {
return chunk.toString().toUpperCase()
  })).pipe(outStream)
})

server.listen(Number(process.argv[2]))