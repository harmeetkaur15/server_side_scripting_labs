var mongo = require('mongodb').MongoClient

var fn = process.argv[2]
var ln = process.argv[3]

var url = 'mongodb://localhost:27017/learnyoumongo'

var doc = {
  firstName: fn,
  lastName: ln
}

mongo.connect(url, function(error, db) {
  if (error) throw error
  var collection = db.collection('docs')
  collection.insert(doc, function(error, data) {
    if (error) throw error
    console.log(JSON.stringify(doc))
    db.close()
  })
})