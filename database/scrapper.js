const fs = require('fs');
const path = require('path')
const cheerio = require('cheerio');
const { promisify } = require('util');
const promise = require('./scrapeSite');
promise.then(scrapeHtmlAndWrite);

const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);
const append = promisify(fs.appendFile);

const files = [];

function scrapeHtmlAndWrite() {
  console.log('beginning scrape')
  let a = read(path.join(__dirname, 'dataPages', `page1.html`))
    .then(cleanInput)
    .then(arr => writeToCSV(arr, false))
    .then(() => console.log('done'));
  
  for (let i = 2; i <= 11; i++) {
    a = a.then(() => read(path.join(__dirname, 'dataPages', `page${i}.html`)))
      .then(cleanInput)
      .then(arr => writeToCSV(arr, true))
      .then(() => console.log('finished ', i));
  }
}


function cleanInput(val) {
  const $ = cheerio.load(val.toString());
  const elem = $('div.nba-stat-table__overflow table tr');
  const tmp = elem.text().split(`\n        \n          `);
  const arr = tmp.map((row) => row.split('\n          '));
  arr[0].splice(0, 1);
  arr.forEach(row => row.splice(0, 1));
  let last = arr[arr.length - 1];
  arr[arr.length - 1][last.length - 1] = arr[arr.length - 1][last.length - 1].split('\n')[0];
  arr.push([]);
  // arr[0].splice(1,0);
  // debugger;
  // const p1 = elem.text().split(`\n          \n           `);
  // debugger;
  // arr.shift();
  // arr[0].splice(arr[1].length);
  // for (var i = 0; i < arr.length; i++) {
  //   let end = arr[i].length - 1;
  //   arr[i][end] = arr[i][end].split('\n        ')[0];
  // }
  // arr.push([]);
  return arr;
}
`
        
`

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



