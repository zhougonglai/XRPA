import puppeteer, { executablePath } from 'puppeteer-core';

function domReady(condition: DocumentReadyState[] = ['complete', 'interactive']) {
  return new Promise(resolve => {
    if (condition.includes(document.readyState)) {
      resolve(true)
    } else {
      document.addEventListener('readystatechange', () => {
        if (condition.includes(document.readyState)) {
          resolve(true)
        }
      })
    }
  })
}

const launchBrowser = async() => {
  console.log('Launching browser')
  // let driver = await new Builder().forBrowser('chrome').build();

  // await driver.get('https://www.baidu.com')

  // setTimeout(() => {
  //   driver.quit()
  // }, 5000);

  // const browser = await pie.connect(app, puppeteer);

  // const window = new BrowserWindow();
  // const url = "https://example.com/";
  // await window.loadURL(url);

  // const page = await pie.getPage(browser, window);
  // console.log(page.url());
  // window.destroy();

  const browser = await puppeteer.launch({
    executablePath: executablePath('chrome'),
    headless:false,
    pipe: true,
  });

  const page = await browser.newPage();
  await page.waitForNavigation({
    waitUntil: 'load'
  });

  // Navigate the page to a URL
  await page.goto('https://www.baidu.com/');

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  setTimeout(()=> {
    browser.close()
  }, 5000)
}

// ----------------------------------------------------------------------

domReady()

window.onmessage = ev => {
  console.log(ev.data)

  ev.data.payload === 'launch-browser' && launchBrowser()
}
