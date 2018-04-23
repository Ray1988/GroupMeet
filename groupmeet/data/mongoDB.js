var mongoClient = require('mongodb').MongoClient;


mongoClient.connect('mongodb://localhost:27017/groupmeet', function (err, client) {
  if (err) throw err;

  var db = client.db('groupmeet');
  
  db.collection('events').find().
    toArray(function (finderr, result) {
    if (finderr) throw err;
    console.log('listening on 3000 for db');
  });
});

module.exports = mongoClient;
