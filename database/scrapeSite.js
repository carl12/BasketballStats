const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://stats.nba.com/leaders/?Season=2018-19&SeasonType=Regular Season&PerMode=Totals');
  await page.screenshot({ path: 'example.png' });
  const content = await page.content();
  fs.writeFile('test.html', content);
  await browser.close();
})();
