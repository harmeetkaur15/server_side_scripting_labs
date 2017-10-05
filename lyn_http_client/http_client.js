const http = require('http')

let client = http.get(process.argv[2], function callback (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  console.error('error')
}).on('error', console.error)