const net = require('net')

function zeroFilled (i) {
  if(i < 10 ) {
      return(0 + i)
  }
  else {
      return('' + i)
  }
}

function result () {
  const dateTime= new Date()
  return dateTime.getFullYear() + '-' +
  zeroFilled(dateTime.getMonth() + 1) + '-' +
  zeroFilled(dateTime.getDate()) + ' ' +
  zeroFilled(dateTime.getHours()) + ':' +
  zeroFilled(dateTime.getMinutes())
}

const server = net.createServer(function (socket) {
  socket.end(result() + '\n')
})

server.listen(Number(process.argv[2]))