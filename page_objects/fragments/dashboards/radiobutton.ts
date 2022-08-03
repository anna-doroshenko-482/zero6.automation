import { timer } from 'helpers'
import { ChainablePromiseElement } from 'node_modules/webdriverio/build/types'

interface IRadioButton {
  name?: RadioButtons
  option?: string
}

enum RadioButtons {
  IP = 'IP',
  signalOUT = 'Сигнал OUT',
  signalIN = 'Сигнал IN',
  signalCMTS = 'Сигнал CMTS',
  signalSN_IN = 'S/N IN',
  signalSN_OUT = 'S/N OUT',
  DSUS = 'DS/US',
  BRIZ = 'БРИЗ',
  abonent = 'Абонент',
}

class RadioButton {
  private root: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private generalRadioSelector: string
  private radiobutton: string

  constructor(root = $('body')) {
    this.root = root
    this.radiobutton = '[type="radio"]'
  }

  public async clickOn(radiobuttons: IRadioButton | IRadioButton[], context: any) {
    const interval = timer()
    let key: boolean
    let radio: any
    let radioState: any
    radiobuttons = Array.isArray(radiobuttons) ? radiobuttons : [radiobuttons]
    await this.root.waitForDisplayed()
    for (const radiobutton of radiobuttons) {
      do {
        if (!interval.status()) {
          throw new Error(
            `Required time limit for radiobutton search is ended! Please check ${radiobutton.name} element! `,
          )
        }
        if (radiobutton.name === 'IP') {
          radio = await $$(`label=${radiobutton.name}`)
          const ip = await radio[1].$('..').$(`${this.radiobutton}`)
          await ip.waitForDisplayed()
          await ip.scrollIntoView()
          await ip.click()
          radioState = await ip.isSelected()
        } else {
          radio = await $(`label=${radiobutton.name}`).$('..').$(`${this.radiobutton}`)
          await radio.waitForDisplayed()
          await radio.scrollIntoView()
          await radio.click()
          radioState = await radio.isSelected()
        }
        radioState ? (key = true) : null
      } while (!key)
    }
  }
}

export { RadioButton, RadioButtons, IRadioButton }
