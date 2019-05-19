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
  leagueData.find({}).toArray((err, val) => {

    const data = val.reduce((sum, player) => {
      sum[0] += Number(player['3PA']);
      sum[1] += Number(player['3PM']);
      return sum;
    }, [0, 0]);
    console.log(data, data[1] / data[0]);
  });
}, 1000);
