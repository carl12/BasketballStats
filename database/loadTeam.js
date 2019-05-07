const mongo = require('mongodb');
const client = mongo.MongoClient;

// Connect to the db
let LeagueData;
client.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, (err, client) => {
  if (!err) {
    console.log('We are connected');
  }
  leagueData = client.db('NbaStats').collection('LeagueData');
  // const leagueData = client.db('NbaStats').collection('LeagueData');
  // leagueData.find({'TEAM':'GSW'}).toArray(function(err, val) {console.log(err, val)});
});

setTimeout(() => {
  leagueData.find({ TEAM: 'GSW' }).toArray((err, val) => {
    const relevant = [];
    val.forEach(player => relevant.push({ name: player.PLAYER, amount: player["REB"] }));
    console.log(relevant);
  });
}, 1000);
