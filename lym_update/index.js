var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/' + process.argv[2]

mongo.connect(url, function(error, db) {
    
  if (error) throw error
  
  var collection = db.collection('users')
  
  collection.update({
    username: 'tinatime'
  }, {
    $set: {
      age: 40
    }
  }, function(error) {
    if (error) throw error
    db.close()
  })
})