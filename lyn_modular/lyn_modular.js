const mymodule = require('./module.js');
let directory = process.argv[2];
let extension = process.argv[3];

mymodule(directory, extension, function(err, files) {
    let i;
  for (i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});