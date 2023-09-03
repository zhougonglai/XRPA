import { initialize } from "@electron/remote/main";
import { app } from 'electron'
import { optimizer } from '@electron-toolkit/utils';
import WindowManager from "../windows";

export default async () => {
  initialize()
  await app.whenReady()
  app.setAccessibilitySupportEnabled(true)
  optimizer.registerFramelessWindowIpc()
  const windowManager = new WindowManager()
  windowManager.createHomePage()
  // new Tray(join(process.env.PUBLIC, 'logo.ico'));

  const HomePage = windowManager.wins.get('Home')
  HomePage?.createWindow()

  return
}
