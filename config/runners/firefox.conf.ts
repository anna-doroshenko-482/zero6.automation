/* eslint-disable @typescript-eslint/no-var-requires */
const hooks = require('./hooks')
const base = require('./base.conf')

export const config: WebdriverIO.Config = {
  runner: 'local',
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'firefox',
      'moz:firefoxOptions':  {
        // args: ['--width=1920', '--height=1080'],
        prefs: {
          'browser.download.dir': global.downloadDir.firefox,
          'browser.download.folderList': 2,
          'browser.download.useDownloadDir': true,
          'browser.download.viewableInternally.enabledTypes': '',
          'browser.helperApps.neverAsk.saveToDisk':
            'text/html; charset=iso-8859-1;application/vnd.openxmlformats-officedocument.wordprocessingml.document; application/pdf;application/zip;text/csv;text/plain;application/text;text/xml;application/xml;application/octet-stream;charset=UTF-8;application/x-pdf;application/x-gzip;application/force-download',
          'pdfjs.disabled': true,
          'browser.helperApps.neverAsk.openFile':
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document;application/pdf;application/zip;text/csv;text/plain;application/text;text/xml;application/xml;application/octet-stream;text/html;charset=iso-8859-1;charset=UTF-8;application/x-pdf;application/x-gzip;application/force-download',
          'browser.download.manager.showWhenStarting': false,
          'browser.helperApps.alwaysAsk.force': false,
          'browser.download.manager.useWindow': false,
          'browser.download.manager.focusWhenStarting': true,
          'browser.download.manager.showAlertOnComplete': false,
          'browser.download.manager.closeWhenDone': true,
        },
      },
    },
  ],
  ...base,
  ...hooks,
}
