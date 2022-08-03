/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()
require('tsconfig-paths/register')
const hooks = require('./hooks')
const base = require('./base.conf')

export const config: WebdriverIO.Config = {
  runner: 'local',
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      'goog:chromeOptions': {
        w3c: false,
        args: [
          '--remote-debugging-port=9222',
          '--window-size=1920,1080',
          '--start-maximized',
          '--incognito',
          '--no-sandbox',
          '--disable-gpu',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-notifications',
          // '--headless',
          // '--disable-software-rasterizer',
          // '--disable-infobars',
          '--ignore-certificate-errors',
          // '--disable-popup-blocking',
        ],
        prefs: {
          'safebrowsing.enabled': false,
          'safebrowsing.disable_download_protection': true,
          'download.default_directory': global.downloadDir.chrome,
          download: {
            prompt_for_download: false,
            directory_upgrade: true,
            default_directory: '/downloadedTestDocument/',
          },
        },
      },
    },
  ],
  seleniumArgs: {
    seleniumArgs: ['-port', '4444'],
  },
  javaArgs: ['-Xmx1024m'],
  ...base,
  ...hooks,
}
