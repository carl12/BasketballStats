const express = require('express');
const unirest = require('unirest');
const mongo = require('mongodb');

const React = require('react');
const ReactDom = require('react-dom/server');

const client = mongo.MongoClient;
let leagueData;
client.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('mongo connected');
  leagueData = client.db('NbaStats').collection('LeagueData');
});

const app = express();
const PORT = 3000;

app.use(express.static('client/public'));

app.use('/api/team/:teamId/:stat', (req, res) => {
  const { teamId, stat } = req.params;
  leagueData.find({ TEAM: teamId }).toArray((err, val) => {
    const sLen = stat.length;
    if (stat[sLen - 1] !== '%') {
      const relevant = [];
      val.forEach(player => relevant.push({ name: player.PLAYER, amount: player[stat] }));
      relevant.sort((a, b) => ((a.amount < b.amount) ? 1 : -1));
      res.send(JSON.stringify(relevant));
    } else {
      const relevant = [];
      const attemptName = `${stat.slice(0, sLen - 1)}A`;
      const successName = `${stat.slice(0, sLen - 1)}M`;
      val.forEach(player => relevant.push({
        name: player.PLAYER,
        attempts: player[attemptName],
        successes: player[successName],
      }));
      relevant.sort((a, b) => ((a.attempts < b.attempts) ? 1 : -1));
      console.log(relevant);
      res.send(JSON.stringify(relevant));
    }
  });
});

app.use('/api/team/:teamId/percent/:stat', (req, res) => {
  leagueData.find({ TEAM: req.params.teamId }).toArray((err, val) => {
    const relevant = [];
    val.forEach(player => relevant.push({ name: player.PLAYER, amount: player[req.params.stat] }));
    relevant.sort((a, b) => ((a.amount < b.amount) ? 1 : -1));
    res.send(JSON.stringify(relevant));
  });
});

app.get('/asdf', (req, res) => {
  const markup = ReactDom.renderToString(React.createElement(Comp));
  const html = `
    <html>
      <body>
        before
        <div id="app">${markup}</app>
        after
    </html>
  `;
  res.end(html);
});

app.use('/team/:teamId/:stat', express.static('client/public'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});