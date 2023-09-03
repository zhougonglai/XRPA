import { initialize } from "@electron/remote/main";
import { Tray, app, nativeImage } from 'electron'
import { optimizer } from '@electron-toolkit/utils';
import WindowManager from "../windows";
// import { join } from "path";
import icon from '../../public/logo.ico'

export default async () => {
  initialize()
  await app.whenReady()
  app.setAccessibilitySupportEnabled(true)
  optimizer.registerFramelessWindowIpc()
  const windowManager = new WindowManager()
  windowManager.createHomePage()
  new Tray(nativeImage.createFromPath(icon));

  const HomePage = windowManager.wins.get('Home')
  HomePage?.createWindow()

  return
}
