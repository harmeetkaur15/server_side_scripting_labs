const http = require('http')
const bl = require('bl')
let number = 0
const urls = []


function printurls () {
  for (let i = 0; i < 3; i++) {
    console.log(urls[i])
}
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, output) {
      if (err) {
      return console.error(err)
  }

    urls[index] = output.toString()
      number++

    if (number === 3) {
        printurls()
    }
    }))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}