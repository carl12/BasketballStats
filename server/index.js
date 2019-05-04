const express = require('express');
const unirest = require('unirest');
const app = express();
const PORT = 3000;

app.use(express.static('client/public'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});