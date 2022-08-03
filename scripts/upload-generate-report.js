/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @url https://github.com/kochetkov-ma/allure-server
 */
const got = require('got')
const fs = require('fs')
const FormData = require('form-data')
const moment = require('moment-timezone')
const zipFolder = require('zip-folder')
const os = require('os')

function zipReport() {
  let pathToReport
  if (os.platform() === 'win32') {
    pathToReport = __dirname.substr(0, __dirname.lastIndexOf('\\')).concat('\\allure-results')
  } else {
    pathToReport = __dirname.substr(0, __dirname.lastIndexOf('/')).concat('/allure-results')
  }

  return new Promise((resolve, reject) => {
    zipFolder(pathToReport, './allure-results.zip', (err) => {
      if (err) {
        reject(err)
      }
      resolve()
    })
  })
}

async function uploadAndGenerate() {
  const form = new FormData()
  await zipReport()

  const baseUrl = new URL(`http://allure.briz.ua:8080/`)

  const baseGot = got.extend({
    prefixUrl: baseUrl,
    responseType: 'json',
  })

  form.append('allureResults', fs.createReadStream('./allure-results.zip'))
  const resultsResp = await baseGot('api/result', {
    method: 'POST',
    body: form,
  })
  console.debug(`Upload done: `, resultsResp.body)
  const results_id = resultsResp.body.uuid
  const reportUrl = await baseGot('api/report', {
    method: 'POST',
    json: {
      reportSpec: {
        path: [`briz-${moment.tz('Europe/Kiev').format('YYYY-MM-DD_HH-mm-ss')}`],
      },
      results: [results_id],
      deleteResults: true,
    },
  })
  console.debug(`Report generation done: `, reportUrl.body)

  console.debug(`========================================================================`)
  console.debug(`REPORT URL: `, reportUrl.body.url)
  console.debug(`========================================================================`)
}

uploadAndGenerate().catch((err) => {
  throw err
})
