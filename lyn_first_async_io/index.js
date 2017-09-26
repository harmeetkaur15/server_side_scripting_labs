const fs = require('fs')
let buf = fs.readFile(process.argv[2], function(err, data){
let str = data.toString()
console.log(str.split('\n').length-1)});
