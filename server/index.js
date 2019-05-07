const express = require('express');
const unirest = require('unirest');
const mongo = require('mongodb');

const client = mongo.MongoClient;
let leagueData;
client.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, (err, client) => {
  console.log('mongo connect');
  leagueData = client.db('NbaStats').collection('LeagueData');
});

const app = express();
const PORT = 3000;

app.use(express.static('client/public'));

app.use('/api/team/:teamId/:stat', (req, res) => {
  leagueData.find({ TEAM: req.params.teamId }).toArray((err, val) => {
    const relevant = [];
    val.forEach(player => relevant.push({ name: player.PLAYER, amount: player[req.params.stat] }));
    console.log(relevant);
    console.log();
    relevant.sort((a, b) => ((a.amount < b.amount) ? 1 : -1));
    console.log(relevant);
    res.send(JSON.stringify(relevant));
  });
});

app.use('/team/:teamId/:stat', express.static('client/public'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});