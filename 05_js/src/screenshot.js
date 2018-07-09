const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://github.com/trending');

  const dimensions = await page.evaluate(() => {
    return {
      width: document.body.scrollWidth,
      height: document.body.scrollHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });

  console.log('Dimensions:', dimensions);
  page.setViewport(dimensions)
  await page.screenshot({path: 'trending.png'});

  await browser.close();
})();
