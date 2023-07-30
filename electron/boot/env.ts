import { app } from 'electron'
import path from 'node:path'

export default () => {
  process.env.DIST = path.join(__dirname, '../dist')
  process.env.PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')

}
