import { BrowserWindowConstructorOptions } from "electron";

export const DEFAULT_BROWSER_WINDOW_OPTIONS: BrowserWindowConstructorOptions = {
  resizable: true,
  show: false,
  fullscreenable: true,
  maximizable: true,
  closable: true,
  minimizable: true,
  autoHideMenuBar: true,
  transparent: false,
  // hidden title bar feature in low version of the Electron not work when the titleBarStyle attributes value is hidden,
  // but this bug was fixed in new version.
  // @TODO: remove frame options after upgrade new version of the Electron.
  // frame: platform() === "darwin",
  frame: true,
  // titleBarStyle: "customButtonsOnHover",
  // titleBarOverlay: true,
  zoomToPageWidth: true,
  webPreferences: {
    autoplayPolicy: "no-user-gesture-required",
    // TODO: set nodeIntegration: false
    //       This property is very unsafe and we should turn it off as soon as possible
    //       Need to predict if agora-electron-sdk is supported
    //       @BlackHole1
    // enableRemoteModule: true,
    nodeIntegration: true,
    contextIsolation: false,
    webSecurity: false,
    webviewTag: true,
    backgroundThrottling: false,
    nodeIntegrationInWorker: true,
    nodeIntegrationInSubFrames: false,
  }
}

export const HOME_SIZE = {
  width: 1280,
  height: 800,
  minWidth: 1280,
  minHeight: 800,
}
