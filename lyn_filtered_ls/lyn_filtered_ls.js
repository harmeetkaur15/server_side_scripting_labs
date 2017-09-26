const fs = require('fs')
let directory = process.argv[2];
let extension = process.argv[3];
let path = RegExp(`\\.` + extension + `$`);

let file = fs.readdir(directory, function(err, files) {
  for (let i = 0; i < files.length; i++) {
    if (path.test(files[i])) {
      console.log(files[i]);
    }
  }
});






