import { checkFieldValue, timer } from 'helpers'
import { timeouts } from 'lib'
import { ChainablePromiseElement } from 'node_modules/webdriverio/build/types'

interface IDataPicker {
  picker?: DataPickers
  name?: DataPickerNames
  day: string
  month?: string
  year?: string
  option?: string
}

enum DataPickers {
  start = 'Начальная дата',
  end = 'Конечная дата',
  fromDate = 'с',
  planPay = 'Планируемая дата оплаты',
}

enum DataPickerNames {
  dateFrom = 'dateFrom',
  dateTo = 'dateTo'
}

class DataPicker {
  private root: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  constructor(root = $('body')) {
    this.root = root
  }

  public async typeIn(dataPicks: IDataPicker[]) {
    let statusField = false
    let state
    const time = timer(timeouts.xxxl)
    let setDataPicker: string
    const regexp = /(\d{1,})\s(.*)\s(\d{4})/
    dataPicks = Array.isArray(dataPicks) ? dataPicks : [dataPicks]
    await this.root.waitForDisplayed()
    for (const dataPick of dataPicks) {
      do {
        if (!time.status()) {
          throw new Error(`Required time limit set picker ${dataPick} is ended!`)
        }
        const picker = await $(`[placeholder="${dataPick.picker}"]`)
        await picker.scrollIntoView()
        await picker.waitForDisplayed()
        await picker.waitForClickable()
        const pickerValue = await checkFieldValue(picker)
        await picker.click()
        setDataPicker = pickerValue.replace(pickerValue.match(regexp)[1], `${dataPick.day}`)
        if (dataPick.hasOwnProperty('month')) {
          setDataPicker = setDataPicker.replace(pickerValue.match(regexp)[2], `${dataPick.month}`)
        }
        if (dataPick.hasOwnProperty('year')) {
          setDataPicker = setDataPicker.replace(pickerValue.match(regexp)[3], `${dataPick.year}`)
        }
        await picker.clearValue()
        await picker.setValue(setDataPicker)
        state = await checkFieldValue(picker)
        setDataPicker === state ? (statusField = true) : null
      } while (!statusField)
    }
    await browser.keys('\ue004')
  }

}

export { DataPicker, DataPickers, IDataPicker, DataPickerNames }
