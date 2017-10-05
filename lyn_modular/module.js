const fs = require('fs')
const path = require('path')
module.exports = function (directory, filter, callback){
  fs.readdir(directory, function (err, data) {
    if (err) {
      return callback(err)
    }
data = data.filter(function (file){
      return path.extname(file) === '.' + filter
})

callback(null, data)
  })
}