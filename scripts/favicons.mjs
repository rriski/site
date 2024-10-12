import { favicons } from 'favicons'
import path from 'path'
import fs from 'fs'

import config from '../site-config.mjs'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const dir = path.resolve(__dirname, '../public/icons/')
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
}

const source = 'static/icon.png'
const configuration = {
  path: '/icons/',
  appName: config.siteTitleShort,
  appDescription: null,
  developerName: null,
  developerURL: null,
  dir: 'auto',
  lang: 'en-US',
  background: config.backgroundColor,
  theme_color: config.themeColor,
  display: 'standalone',
  orientation: 'any',
  start_url: '/',
  version: '1.0',
  logging: true,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    coast: false,
    favicons: true,
    firefox: false,
    windows: true,
    yandex: false,
  },
}

const callback = function (err, res) {
  if (err) {
    console.log(err.message)
    return
  }

  res.images.forEach((image) => {
    fs.writeFile(
      path.resolve(__dirname, '../public/icons/', image.name),
      image.contents,
      (err) => {
        if (err) {
          console.log(err)
        }
      }
    )
  })

  res.files.forEach((file) => {
    fs.writeFile(
      path.resolve(__dirname, '../public/', file.name),
      file.contents,
      (err) => {
        if (err) {
          console.log(err)
        }
      }
    )
  })
}

favicons(source, configuration, callback)
