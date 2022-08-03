import { ChainablePromiseElement } from "node_modules/webdriverio/build/types";
import {

} from "page_objects";
import { fileParser, timer } from "helpers";
import { join } from "path";
import { URL } from "url";
import { pathExistsSync } from "fs-extra";
import { expect } from "chai";
import { apiManager, timeouts } from "lib";
import allureReporter from "@wdio/allure-reporter";

const { selenoid } = apiManager
interface IActionButton {
  name:
    | ActionBtns

  navigateToPage?: boolean
  download?: boolean
  shadow?: boolean
  expectValue?: string
  value?: string
}

enum ActionBtns {
  Login = 'Login',
  logOut = 'Выход',
  search = 'Поиск',
  applyFilter = 'Применить фильтр',
  upload = 'Загрузить',
}

class ActionButton {
  private root: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private buttonSelector: ChainablePromiseElement<Promise<WebdriverIO.Element>>

  constructor(root = $('body')) {
    this.root = root
  }

  public async clickOn(buttons: IActionButton | IActionButton[], context: any) {
    buttons = Array.isArray(buttons) ? buttons : [buttons]
    await (await this.root).waitForDisplayed()
    for (const button of buttons) {
      let buttonSelectors: WebdriverIO.Element
      if (context[button.name]) {
        if (button.hasOwnProperty('value')) {
          const regexp = new RegExp('\\{value\\}', 'g')
          const buttonSelector = context[button.name].replace(regexp, button.value)
          buttonSelectors = await $(buttonSelector)
        } else {
          buttonSelectors = await $(context[button.name])
        }
      } else {
        buttonSelectors = await $(`input[value="${button.name}"]`)
      }
      await buttonSelectors.scrollIntoView()
      await buttonSelectors.waitForClickable()

      await browser.waitUntil(async () => (await buttonSelectors.isEnabled()) === true, {
        timeoutMsg: `Couldn't wait enabling of ${buttonSelectors} element`,
      })
      if (button.hasOwnProperty('download')) {
        return download(buttonSelectors, button.expectValue)
      }
      button.hasOwnProperty('navigateToPage') ? await interceptor(buttonSelectors) : await buttonSelectors.click()
    }
  }
}

async function interceptor(buttonSelectors) {
  allureReporter.startStep(`Start working interceptor after clicking to the button ${buttonSelectors}`)
  const time = timer()
  await browser.setupInterceptor()
  let key = false
  let request: any
  let buttonState = true
  do {
    buttonState ? await buttonSelectors.click() : null
    if (!time.status()) {
      throw new Error('Required time limit for interceptor is being ended!')
    }
    try {
      request = await browser.getRequest(0)
    } catch {}

    if (request) {
      request.response.statusCode === 200 ? (key = true) : null
    }
    buttonState = await buttonSelectors.isEnabled()
  } while (!key && !buttonState)
  allureReporter.endStep()
}

async function download(buttonSelectors, expectValue: string | number) {
  allureReporter.startStep(`Start downloading after clicking to the button ${JSON.stringify(buttonSelectors.selector)}`)
  const time = timer(timeouts.xxl)
  const baseURL = browser.config.baseUrl
  let filePath
  let readFile
  let key
  await buttonSelectors.click()
  let downloadHref = await buttonSelectors.getAttribute('href')

  if (!downloadHref.includes(baseURL)) {
    downloadHref = new URL(downloadHref, baseURL)
  }

  const downloadUrl = new URL(downloadHref)
  const fileName = downloadUrl.pathname.split('/').splice(-1).pop()
  const requestedCapabilities = <any>browser.requestedCapabilities
  const browserName = requestedCapabilities.browserName.toLowerCase()

  if (JSON.stringify(browser.requestedCapabilities).includes('selenoid')) {
    do {
      if (!time.status()) {
        throw new Error(`Required time limit for selenoid file downloading is being ended!`)
      }
      const { body, status } = await selenoid.getFileData({ id: `${browser.sessionId}` })
      expect(status, 'Selenoid status').to.eq(200)
      if (body.includes(fileName)) {
        key = true
      }
    } while (!key)
    readFile = await selenoid.getData({ id: `${browser.sessionId}`, name: fileName })
  } else {
    filePath = join(global.downloadDir[browserName], fileName)
    await browser.waitUntil(() => pathExistsSync(filePath), {
      timeoutMsg: `Couldn't find the uploaded document!`,
    })
    readFile = await fileParser(filePath)
  }
  expect(readFile).to.contain(expectValue)
  allureReporter.endStep()
}

export { ActionButton, ActionBtns, IActionButton }
