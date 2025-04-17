const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  
  const url = process.env.SCRAPE_URL || 'https://scrape.com';
  
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  
  
  const title = await page.title();
  const heading = await page.$eval('h1', (el) => el.textContent);
  
  
  const data = { url, title, heading };
  fs.writeFileSync('/app/scraped_data.json', JSON.stringify(data, null, 2));
  
  await browser.close();
  console.log('Scraping complete!');
})();