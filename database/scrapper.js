const fs = require('fs');
const path = require('path')
const cheerio = require('cheerio');
const { promisify } = require('util');

const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);
const append = promisify(fs.appendFile);

const files = [];
for (let i = 1; i <= 11; i += 1) {
  files.push(`nba${i}.html`);
}


let a = read(path.join(__dirname, 'dataPages', `nba1.html`))
  .then(cleanInput)
  .then(arr => writeToCSV(arr, false))
  .then(() => console.log('done'));

for (let i = 1; i < files.length; i++) {
  a.then(() => read(path.join(__dirname, 'dataPages', files[i])))
    .then(cleanInput)
    .then(arr => writeToCSV(arr, true));
}

function cleanInput(val) {
  const $ = cheerio.load(val.toString());
  const elem = $('div.nba-stat-table__overflow table tr');
  const arr = elem.text().split(`\n          \n          `).map((row) => row.split('\n          '));
  arr.shift();
  arr[0].splice(arr[1].length);
  for (var i = 0; i < arr.length; i++) {
    let end = arr[i].length - 1;
    arr[i][end] = arr[i][end].split('\n        ')[0];
  }
  arr.push([]);
  return arr;
}

function writeToCSV(arr, shouldAppend = false) {
  const loc = path.join(__dirname, 'data.csv');
  if (!shouldAppend) {
    const writeStr = arr.map(val => val.join(',')).join('\n');
    return write(loc, writeStr);
  }
  const writeStr = arr.slice(1).map(val => val.join(',')).join('\n');
  return append(loc, writeStr);
}


//document.querySelectorAll('div.nba-stat-table__overflow table tr')



