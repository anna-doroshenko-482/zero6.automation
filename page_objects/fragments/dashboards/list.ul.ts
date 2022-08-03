import { ChainablePromiseElement } from 'node_modules/webdriverio/build/types'

class ListUl {
  private open: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private list: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private foundItem: string

  constructor(
    open = $('[value="All Projects"]'),
    list = $('ul[role="listbox"][class="vs__dropdown-menu"]'),
    foundItem = 'li',
  ) {
    this.open = open
    this.list = list
    this.foundItem = foundItem
  }

  public async typeIn(name: string): Promise<void> {
    await this.open.waitForDisplayed({ timeoutMsg: 'Input field is not visible' })
    await this.open.click()
    const openClass = await this.open.getAttribute('class')
    const isSelect2 = openClass.indexOf('select2 select2-container') >= 0
    let filterInput = this.open
    if (isSelect2) {
      filterInput = $('.select2-container--open input')
      await filterInput.waitForDisplayed({ timeoutMsg: 'Input field is not visible' })
    }
    await filterInput.clearValue()
    await filterInput.setValue(name)
    await this.list.waitForDisplayed({
      timeoutMsg: `Menu list('s) ${JSON.stringify(await this.list)} of values should be visible`,
    })
    const optClick = []
    const listEl = await this.list.$(`${this.foundItem}`)
console.log('Check : ',listEl)
    for (const el of await this.list.$$(`${this.foundItem}`)) {
      if ((await el.getText()).trim() === name) {
        optClick.push(el)
      }
    }

    if (optClick.length > 1) {
      throw new Error(`Element from list found several values`)
    }
    if (optClick.length === 0) {
      throw new Error(`Element from list with value: ${name} was not found`)
    }
    (await optClick[0].waitForDisplayed()) && (await optClick[0].click())
  }
}

export { ListUl }
