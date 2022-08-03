/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable require-await */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs-extra')
const { ensureDirSync, removeSync } = require('fs-extra')
const moment = require('moment-timezone')
const path = require('path')
const { addAttachment } = require('@wdio/allure-reporter').default
const video = require('wdio-video-reporter')

global.downloadDir = {
  chrome: '/home/selenium/Downloads',
  firefox: '/home/selenium/Downloads/firefox',
}

export const config: WebdriverIO.Config = {
  hostname: 'selenoid',
  port: 4444,
  path: '/wd/hub',
  specs: ['./specs/web/**/*.test.ts'],
  suites: {
    testSpecs: [
      './specs/web/start.test.ts',
    ],
    menuSpecs: [
      './specs/web/start.test.ts',
    ],
  },
  maxInstances: 1,
  capabilities: [
    {
      browserName: 'chrome',
      'selenoid:options': {
        maxInstances: 1,
        browserName: 'chrome',
        platform: 'LINUX',
        version: '95.0',
        enableVNC: true,
        screenResolution: '1920x1080x24',
        enableVideo: true,
        videoScreenSize: '1920x1080',
        videoFrameRate: 12,
        videoCodec: 'mpeg4',
        enableLog: true,
      },
      'goog:chromeOptions': {
        w3c: false,
        args: [
          '--remote-debugging-port=9222',
          // '--window-size=1920,1080',
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
          '-lang = ru-ru',
          // '--disable-popup-blocking',
        ],
        prefs: {
          'safebrowsing.enabled': false,
          'safebrowsing.disable_download_protection': true,
          'browser.intl.accept_languages': 'ru',
          download: {
            prompt_for_download: false,
            directory_upgrade: true,
            default_directory: global.downloadDir.chrome,
          },
        },
      },
    },
    {
      browserName: 'firefox',
      'moz:firefoxOptions': {
        args: ['--width=1920', '--height=1080'],
      },
      'selenoid:options': {
        maxInstances: 1,
        enableVNC: true,
        enableVideo: true,
        platform: 'LINUX',
        version: '93.0',
        screenResolution: '1920x1080',
        videoScreenSize: '1920x1080',
        videoFrameRate: 12,
        videoCodec: 'mpeg4',
        enableLog: true,
      },
    },
  ],
  // trace | debug | info | warn | error | silent
  services: ['shared-store', 'devtools', 'intercept'],
  logLevel: 'silent',
  coloredLogs: true,
  deprecationWarnings: true,
  bail: 0,
  baseUrl: `http://${process.env.HOST}/`,
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
  onPrepare: async function (config, capabilities) {
    require('dotenv').config()
    ensureDirSync(global.downloadDir.chrome)
    ensureDirSync(global.downloadDir.firefox)
  },
  onComplete: function () {
    removeSync(global.downloadDir.chrome)
    removeSync(global.downloadDir.firefox)
  },
  before: async function (capabilities, specs) {
    const chai = require('chai')
    chai.config.includeStack = true
    chai.config.showDiff = true
    chai.config.truncateThreshold = 0
    chai.use(require('chai-like'))
    try {
      await fs.emptyDir('./selenoid/logs')
      await fs.emptyDir('./selenoid/screenshots')
    } catch (err) {
      console.error(err)
    }
  },
  beforeTest: async function (test, context) {
    global.cache = require('memory-cache')
  },
  async afterTest(test) {
    const { cache } = global
    if (cache) {
      cache.clear()
    }
    if (test.passed) {
      return
    }
    const requestedCapabilities = <any>browser.requestedCapabilities
    const filename = encodeURIComponent(
      `${requestedCapabilities.browserName}-${moment.tz('Europe/Kiev').format('YYYY-MM-DD_HH-mm-ss')}`,
    )
    const filePath = path.resolve('./selenoid/screenshots/', `${filename}.png`)
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
  }
}
