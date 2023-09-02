import { contextBridge, ipcRenderer } from 'electron'

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

  const browser = await puppeteer.launch({
    executablePath: executablePath('chrome'),
    devtools: true,
    headless:false,
    pipe: true,
    defaultViewport: {
      width: 1280,
      height: 800,
    }
  });

  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://www.baidu.com/');

  setTimeout(()=> {
    browser.close()
  }, 5000)
}

// ----------------------------------------------------------------------

domReady().then(() => {
  contextBridge.exposeInMainWorld('electronAPI', {
    close: () => ipcRenderer.send('close'),
    show: () => ipcRenderer.send('show'),
    maximize: () => ipcRenderer.send('maximize'),
    minimize: () => ipcRenderer.send('minimize'),
    restore: () => ipcRenderer.send('restore')
  })
})

window.onmessage = ev => {
  console.log(ev.data)

  ev.data.payload === 'launch-browser' && launchBrowser()
}
