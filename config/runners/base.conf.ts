/* eslint-disable @typescript-eslint/no-var-requires */
import moment from "moment-timezone";

const { ensureDirSync, removeSync } = require('fs-extra')
const { join } = require('path')
const fs = require('fs')
const video = require('wdio-video-reporter')
const path = require('path')
const { addAttachment } = require('@wdio/allure-reporter').default

global.downloadDir = {
  chrome: join(process.cwd(), '.tmp/chromeDownloadFolder'),
  firefox: join(process.cwd(), '.tmp/firefoxDownloadFolder'),
}

module.exports = {
  specs: ['./specs/web/**/*.test.ts'],
  baseUrl: 'http://20.0.59.108/',
  services: ['selenium-standalone', 'shared-store', 'devtools', 'intercept', 'firefox-profile'],
  suites: {
    testSpecs: [
      './specs/web/start.test.ts',

    ],
    menuSpecs:[
      './specs/web/start.test.ts',
    ],
  },

  // trace | debug | info | warn | error | silent
  logLevel: 'silent',
  coloredLogs: true,
  deprecationWarnings: true,
  bail: 0,
  waitforTimeout: 60000,
  connectionRetryTimeout: 500000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: [
    [
      'allure',
      {
        outputDir: 'allure-results',
        disableMochaHooks: true,
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
    [
      'junit',
      {
        outputDir: './test-results',
        outputFileFormat: function (options) {
          return `wdio-test-results-${new Date().getTime()}.xml`
        },
      },
    ],
    [
      video,
      {
        saveAllVideos: true,
        videoSlowdownMultiplier: 3,
        outputDir: 'video-result',
      },
    ],
  ],
  mochaOpts: {
    timeout: 500000,
    compilers: ['tsconfig-paths/register'],
    fullTrace: false,
  },
  onPrepare: function () {
    require('dotenv').config()
    ensureDirSync(global.downloadDir.chrome)
    ensureDirSync(global.downloadDir.firefox)
    if (!fs.existsSync('./screenshots')) {
      fs.mkdirSync('./screenshots/')
    }
  },
  onComplete: function () {
    require('dotenv').config()
    removeSync(global.downloadDir.chrome)
    removeSync(global.downloadDir.firefox)
  },
  async afterTest(test) {
    const requestedCapabilities = <any>browser.requestedCapabilities
    const filename = encodeURIComponent(
      `${requestedCapabilities.browserName}-${moment.tz('Europe/Kiev').format('YYYY-MM-DD_HH-mm-ss')}`,
    )
    const filePath = path.resolve('./screenshots/', `${filename}.png`)
    await browser.saveScreenshot(filePath)
    fs.readFile(filePath, (err, data) => {
      if (err) {
        throw err
      }
      const image = Buffer.from(data)
      addAttachment(filename, image, 'image/png')
    })
    try {
      await browser.deleteCookies()
      await browser.execute('window.localStorage.clear()')
    } catch (e) {
      return console.debug(e)
    }
  },
}
