const mongo = require('mongodb');
const client = mongo.MongoClient;

// Connect to the db
client.connect('mongodb://localhost:27017/nbastats', { useNewUrlParser: true }, (err, client) => {
  if (!err) {
    console.log('We are connected');
  }
  const leagueData = client.db('nbastats').collection('leaguedata');
  leagueData.find({'TEAM':'GSW'}).toArray(function(err, val) {console.log(err, val)});
});


