const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const htmlPath = i => path.join(__dirname, 'dataPages', `page${i}.html`);
const pngPath = i => path.join(__dirname, 'dataPages', `img${i}.png`);

module.exports = (async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://stats.nba.com/leaders/?Season=2018-19&SeasonType=Regular Season&PerMode=Totals');
  for (let i = 1; i <= 11; i += 1) {
    await page.screenshot({ path: pngPath(i) });
    const content = await page.content();
    fs.writeFile(htmlPath(i), content, () => {});
    await page.click('.stats-table-pagination__next');
  }
  console.log('puppeteer done');
  return browser.close();
})();
