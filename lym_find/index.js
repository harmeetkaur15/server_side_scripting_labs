var m = require('mongodb').MongoClient
var a = process.argv[2]

var url = 'mongodb://localhost:27017/learnyoumongo'

m.connect(url, function(error, db) {
  if (error) throw error
  var prts = db.collection('parrots')
  prts.find({
    age: {
      $gt: +a
    }
  }).toArray(function(error, docs) {
    if (error) throw error
    console.log(docs)
    db.close()
  })
})