const puppeteer = require('puppeteer');

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

const [el] = await page.$x('//*[@id="default"]/div/div/div/div/section/div[2]/ol/li[11]')
const txt = await el.getProperty('textContent');
const rawTxt = await txt.jsonValue();
console.log(rawTxt);
browser.close();
}
scrapeProduct('https://books.toscrape.com/');
