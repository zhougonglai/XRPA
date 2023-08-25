import { val } from "value-enhancer";
import { app, BrowserWindow } from "electron";
import path from 'node:path'
import { HOME_SIZE, DEFAULT_BROWSER_WINDOW_OPTIONS } from '../const'
import { enable } from "@electron/remote/main";

export default class WinPage {
  public win: BrowserWindow | null = null
  public name: string
  private readonly loaded$ = val<boolean>(false);

  get loaded(): boolean {
    return this.loaded$.value;
  }

  constructor(name: string) {
    this.name = name;
  }


  public createWindow() {
    const preload = path.join(__dirname, 'preload.js')
    console.log('process.env.PUBLIC', process.env.PUBLIC)
    console.log('preload', preload)
    this.win = new BrowserWindow({
      icon: path.join(process.env.PUBLIC, 'electron-vite.svg'),
      ...DEFAULT_BROWSER_WINDOW_OPTIONS,
      webPreferences: {
        ...HOME_SIZE,
        ...DEFAULT_BROWSER_WINDOW_OPTIONS.webPreferences,
        devTools: true,
        preload,
      },
    })
    const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']

    if (VITE_DEV_SERVER_URL) {
      console.log('VITE_DEV_SERVER')
      this.win.loadURL(VITE_DEV_SERVER_URL)
    } else {
      console.log('loadURL')
      // win.loadFile('dist/index.html')
      this.win.loadFile(path.join(process.env.DIST, 'index.html'))
    }

    enable(this.win.webContents)

    this.ready()
  }

  ready() {
    this.win?.once('ready-to-show', () => {
      this.win?.show()
      this.loaded$.value = true
    })

    this.win?.webContents.on('did-finish-load', () => {
      this.win?.webContents.send('main-process-message', (new Date).toLocaleString())
    })

    app.on('window-all-closed', () => {
      this.win = null
    })
  }
}
