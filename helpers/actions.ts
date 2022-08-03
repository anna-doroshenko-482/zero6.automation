/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { log } from 'lib'
import textract from 'textract'
import os from 'os'

export const switchToWindow = async (type: 'parent' | 'child', url?: string) => {
  const allGUID = await browser.getWindowHandles()
  if (type === 'parent') {
    await browser.switchToWindow(allGUID[0])
    log.debug(`Switched to parent ${allGUID[0]} window`)
  } else {
    await browser.switchToWindow(allGUID[1])
    log.debug(`Switched to child ${allGUID[1]} window`)
  }
  if (url) {
    await browser.waitUntil(
      async () => {
        await browser.switchWindow(url)
        return (await browser.getUrl()).includes(url)
      },
      { timeoutMsg: `Expected new window/tab to have opened with url: '${url}'` },
    )
  }
}

export const fileParser = (filePath: string) => {
  return new Promise((resolve, reject) => {
    textract.fromFileWithPath(filePath, (err, text) => {
      if (err) {
        reject(err)
      }
      resolve(text)
    })
  })
}

export const urlFileParser = (url: string) => {
  return new Promise((resolve, reject) => {
    textract.fromUrl(url, (err, text) => {
      if (err) {
        reject(err)
      }
      resolve(text)
    })
  })
}

export const objectNormalizing = (keys, values?) => {
  const structuredArray = keys
    .split('\n')
    .map((item) => item.trim())
    .filter((item) => item.length)
  if (values) {
    return values.reduce((o, k, i) => ({ ...o, [k]: structuredArray[i] }), {})
  }
  return structuredArray
}

export const skipTestCaseInFirefox = () => {
  if (os.platform() === 'linux' && !browser.isChrome || browser.isFirefox) {
    return true
  } else {
    return null
  }
}

export const isFirefox = function () {
  return !browser.isChrome || browser.isFirefox
}
