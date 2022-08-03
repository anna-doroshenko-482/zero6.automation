/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { Page } from "../base.page";
import { config } from "config";
import { checkFieldValue, timer } from "helpers";
import {
  HomePageSelectors,

} from "page_objects";
import { Dropdown, TabMenu } from "page_objects/fragments";
import { browserLog, decorateService } from "utils";
import { timeouts } from "lib";
import allureReporter from "@wdio/allure-reporter";
import { ChainablePromiseElement } from "webdriverio/build/types";

interface IOrigin {
  string: string
}
interface IGetData {
  name?: HomePageSelectors
  rowValue?: string | number
  attribute?: string
  table?: null
  value?: string
  empty?: boolean
  visibilityMenuButton?: string
}

class Origin<T> extends Page<IOrigin> {
  private token: string
  public cookie: { name: string; value: string }
  public permission: object
  public appLink: string
  private config: any
  public dropdownTable: Dropdown
  public tabMenu: TabMenu

  private shadow: boolean

  visibilityMenuButton: ChainablePromiseElement<Promise<WebdriverIO.Element>>

  constructor(title?: string) {
    super(title)
    this.config = config.billing
    this.token = this.config.samlRequest
    this.permission = this.config.users
    this.appLink = this.config.appLink
    this.root = $('body')
    this.tabMenu = new TabMenu()
    this.dropdownTable = new Dropdown(this.root)
    this.cookie = { name: '', value: '' }
  }

  private async elementReady() {
    await browserLog()
    await browser.waitUntil(async () => (await browser.getTitle()) === this.title, {
      timeoutMsg: `Couldn't open ${this.title} page`,
    })
    return (await this.root).waitForDisplayed()
  }

  public async typeIn(data: T) {
    const time = timer(timeouts.xxxl)
    let state
    let statusField = false
    for (const key of Object.keys(data)) {
      if (!data[key].hasOwnProperty('shadow')) {
        await this.elementReady()
      }
    }
    for (const key of Object.keys(data)) {
      allureReporter.startStep(`Typing to the row ${JSON.stringify(data[key])}`)
      if (JSON.stringify(this[key]) === '{}') {
        const element = await this[key]
        do {
          if (!time.status()) {
            throw new Error(`Required time limit for typing ${data[key]} is ended!`)
          }
          await element.waitForDisplayed()
          await element.scrollIntoView()
          await element.clearValue()
          await element.addValue(data[key])
          state = await checkFieldValue(element)
          state === data[key] ? (statusField = true) : null
        } while (!statusField)
      } else {
        await this[key].typeIn(data[key], this)
      }
      allureReporter.endStep()
    }
  }

  public async typeInFrame(data: T) {
    const time = timer(timeouts.xxxl)
    let state
    let statusField = false
    for (const key of Object.keys(data)) {
      if (!data[key].hasOwnProperty('shadow')) {
        await this.elementReady()
      }
    }
    for (const key of Object.keys(data)) {
      allureReporter.startStep(`Typing to the row ${JSON.stringify(data[key])}`)
      if (JSON.stringify(this[key]) === '{}') {
        const element = await this[key]
        do {
          if (!time.status()) {
            throw new Error(`Required time limit for typing ${data[key]} is ended!`)
          }
          await element.waitForDisplayed()
          await element.scrollIntoView()
          await element.clearValue()
          await element.addValue(data[key])
          state = await checkFieldValue(element)
          state === data[key] ? (statusField = true) : null
        } while (statusField)
      } else {
        await this[key].typeIn(data[key], this)
      }
      allureReporter.endStep()
    }
  }

  public async clickOn(data: T) {
    for (const key of Object.keys(data)) {
      if (!data[key].hasOwnProperty('shadow')) {
        await this.elementReady()
      }
    }
    for (const key of Object.keys(data)) {
      allureReporter.startStep(`Click to the button ${JSON.stringify(data[key])}`)
      await this[key].clickOn(data[key], this)
      allureReporter.endStep()
    }
  }

  public async getData(data: IGetData) {
    await this.elementReady()
    if (data.hasOwnProperty('table')) {
      for (const key of Object.keys(data)) {
        allureReporter.startStep(`Getting data for ${JSON.stringify(data)} element`)
        return this[key].getData(data.value)
      }
    } else {
      allureReporter.startStep(`Getting data for ${JSON.stringify(data)} element`)
    }
    await browser.waitUntil(async () => (await $$(this[data.name])).length > 0, {
      timeoutMsg: `Couldn't wait any element for getting data`,
    })
    const element = await $$(this[data.name])
    await element[0].waitForDisplayed()
    if (data?.attribute) {
      if (element.length === 1) {
        const string: any = (await element[0].getAttribute(data.attribute)).replace(/(\r\n|\n|\r)/gm, '')
        return string
      } else {
        const arr = []
        for await (const elem of element) {
          arr.push((await elem.getAttribute(data.attribute)).replace(/(\r\n|\n|\r)/gm, ''))
        }
        return arr
      }
    } else if (data?.rowValue) {
      const row = []
      for (const gridElement of await $$(`${this[data.name]}`)) {
        const dataElement = (await gridElement.getText()).replace(/(\r\n|\n|\r)/gm, '')
        if (dataElement.includes(`${data.rowValue}`)) {
          row.push(dataElement)
        }
      }
      return row
    } else {
      if (!data?.empty) {
        await browser.waitUntil(async () => (await element[0].getText()).length !== 0, {
          timeoutMsg: `Couldn't find any attribute for getting data`,
        })
      }
      if (element.length === 1) {
        await element[0].scrollIntoView()
        const data = (await element[0].getText()).replace(/(\r\n|\n|\r)/gm, '')
        allureReporter.endStep()
        return data
      } else {
        const arr = []
        for await (const elem of element) {
          await elem.scrollIntoView()
          arr.push((await elem.getText()).replace(/(\r\n|\n|\r)/gm, ''))
        }
        allureReporter.endStep()
        return arr
      }
    }
  }

  async transfer(link: string) {
    let destinationLink: string
    const requestedCapabilities = <any>browser.requestedCapabilities
    allureReporter.startStep(`Start navigate to the ${link} page`)
    if (requestedCapabilities['selenoid:options']) {
      if (process.env.SERVER_IP) {
        destinationLink = `http://${this.appLink}${link}`
      } else {
        destinationLink = `https://${this.appLink}${link}`
      }
      await browser.url(destinationLink)
    } else {
      destinationLink = link
      // destinationLink = `https://${this.appLink}${link}`
      await browser.url(link)
    }
    await this.waitForUrl(link)
    allureReporter.endStep()
  }

  waitForUrl(url: string) {
    return browser.waitUntil(
      async () => {
        const pageUrl = await browser.getUrl()
        return pageUrl.indexOf(url) > -1
      },
      {
        timeoutMsg: `Couldn't wait for ${url} transferring`,
      },
    )
  }

  public async datapickerWithSelects(
    data: { day: number; month: string; year: string },
    selectorData: {selector: ChainablePromiseElement<Promise<WebdriverIO.Element>>, input: string}
  ): Promise<any> {
    const inputField = selectorData.input

    await (await selectorData.selector).waitForDisplayed()
    await (await selectorData.selector).click()

    async function chooseSelect(select, value) {
      const element = await (await (await selectorData.selector).$('..')).$(select)
      await element.waitForDisplayed()
      await element.scrollIntoView()
      await element.waitForClickable()
      await element.click()
      const selectValue = await (await element.$(`option*=${value}`)).getValue()
      await element.selectByVisibleText(value)
      return selectValue
    }

    const chosenYear = await chooseSelect('[class="picker__select--year"]', `${data.year}`)
    let chosenMount: any = await chooseSelect('[class="picker__select--month"]', `${data.month}`)

    const dataPick = await (await (await selectorData.selector).$('..')).$(.$(`[class="picker__day picker__day--infocus"][aria-label*="${data.day} ${data.month} ${data.year} г."]`)
    await dataPick.waitForDisplayed()
    await dataPick.scrollIntoView()
    await dataPick.waitForClickable()
    await dataPick.click()
    // await dataPick.click()
    const checkSelectInput = await (await (await selectorData.selector).$('..')).$(inputField)
    const chosenData = await checkSelectInput.getValue()
    chosenMount = Number(chosenMount) + 1
    if (chosenMount.toString().length === 1) {
      chosenMount = `0${chosenMount}`
    }
    const pickedDate = `${chosenYear}-${chosenMount}-${data.day}`

    return { chosenData: chosenData, pickedDate: pickedDate }
  }

  public async addValue(selector, value) {
    const inputField = await $(selector)
    await inputField.scrollIntoView()
    await inputField.waitForDisplayed()
    await inputField.waitForClickable()
    await inputField.click()
    await browser.execute(
      (selector, value) => {
        const input = document.querySelector(selector) as HTMLInputElement
        input.value = value
      },
      selector,
      value,
    )
  }

  public async addValueDataPicker(from: { input : string, date : string },to?: { input : string, date : string }){
    await this.root.waitForDisplayed()
    await this.addValue(from.input,from.date)
    if(to){
      await this.addValue(to.input,to.date)
    }
  }
}

decorateService(Origin)

export { Origin }
