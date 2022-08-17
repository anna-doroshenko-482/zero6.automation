import { timer } from 'helpers'
import { log } from 'lib'
import { CableModelsSelectors } from 'page_objects/pages'
import { ChainablePromiseElement } from 'node_modules/webdriverio/build/types'

interface ICheckbox {
  option?: string
  name?: Checkboxes | CableModelsSelectors
  byTitle?: string
}

enum Checkboxes {
  agreeTermConditions = '',
}

class Checkbox {
  private root: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private checkbox: string

  constructor(root = $('body')) {
    this.root = root
    this.checkbox = '[type="checkbox"]'
  }

  public async clickOn(checkboxes: ICheckbox | ICheckbox[], context: any) {
    const interval = timer()
    let checkboxSelector: WebdriverIO.Element
    let key: boolean

    checkboxes = Array.isArray(checkboxes) ? checkboxes : [checkboxes]
    await this.root.waitForDisplayed()
    for (const checkbox of checkboxes) {
      if (checkbox.byTitle) {
        log.debug(`Checkbox click by ${checkbox.byTitle} name`)
        await this.checkBoxByName(checkbox.byTitle)
      } else {
        if (context[checkbox.name]) {
          log.debug(`Checkbox common click by ${checkbox.name} name`)
          do {
            if (!interval.status()) {
              throw new Error(`Required time limit for checkbox search is ended! after ${interval.duration} sec`)
            }
            checkboxSelector = await $(context[checkbox.name])
            await checkboxSelector.scrollIntoView()
            await checkboxSelector.waitForClickable()
            await checkboxSelector.click()
            const checkboxState = await checkboxSelector.isSelected()
            checkboxState ? (key = true) : null
          } while (!key)
        } else {
          log.debug(`Checkbox click by custom ${checkbox.name} name`)
          await this.clickCheckbox(checkbox.name)
        }
      }
    }
  }

  private async clickCheckbox(checkboxName: string) {
    const interval = timer()
    let key: boolean

    do {
      if (!interval.status()) {
        throw new Error(`Required time limit for checkbox search is ended! after ${interval.duration} sec`)
      }
      // const checkboxSelectors = await $(`[name="${checkboxName}"]${this.checkbox}`)
      const checkboxSelectors = await this.root.$(`[name="${checkboxName}"]${this.checkbox}`)
      await checkboxSelectors.waitForClickable()
      await checkboxSelectors.click()
      // const checkboxState = await (await $(`[name=${checkboxName}]`)).isSelected()
      const checkboxState = await checkboxSelectors.isSelected()
      checkboxState ? (key = true) : null
    } while (!key)
  }

  private async checkBoxByName(checkBoxName: string) {
    const interval = timer()
    let key: boolean
    do {
      if (!interval.status()) {
        throw new Error(`Required time limit for checkbox search is ended! Please check ${checkBoxName} field! `)
      }
      const checkboxSelector = await (
        await (await (await $(`span*=${checkBoxName}`)).$('..')).$('..')
      ).$(`${this.checkbox}`)
      await checkboxSelector.waitForDisplayed()
      await checkboxSelector.scrollIntoView()
      await checkboxSelector.click()
      const checkboxState = await checkboxSelector.isSelected()
      checkboxState ? (key = true) : null
    } while (!key)
  }
}

export { Checkbox, Checkboxes, ICheckbox }
