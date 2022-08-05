// import { checkFieldValue, timer } from 'helpers'
// import { timeouts } from 'lib'
// import { Dropdown, IDropdown } from 'page_objects/fragments'
// import { decorateService } from 'utils'
// import { ChainablePromiseElement } from 'node_modules/webdriverio/build/types'
//
// interface IHeader {
//   logo?: string
//   dropdown?: IDropdown | IDropdown[]
//   logoBriz?: string
//   showMenu?: string
//   filterCheck?: string
// }
//
// class Header {
//   private logo: ChainablePromiseElement<Promise<WebdriverIO.Element>>
//   private root: string
//   private dropdown: Dropdown
//   logoBriz: ChainablePromiseElement<Promise<WebdriverIO.Element>>
//   showMenu: ChainablePromiseElement<Promise<WebdriverIO.Element>>
//   filterCheck: ChainablePromiseElement<Promise<WebdriverIO.Element>>
//   search: ChainablePromiseElement<Promise<WebdriverIO.Element>>
//   searchButton: ChainablePromiseElement<Promise<WebdriverIO.Element>>
//
//   constructor(root = '[id="billingPageTitle"]') {
//     this.root = root
//     this.logo = $('[id="billingLogo"]')
//     this.dropdown = new Dropdown()
//     this.logoBriz = $('a[name="top"]>img')
//     this.showMenu = $('[data-cy="header-toggle-menu"]')
//     this.filterCheck = $('[data-cy="filterType"]')
//     this.search = $('.zero6-header-grid-container input[name="uni"]')
//     this.searchButton = $('.zero6-header-grid-container button')
//   }
//
//   public async typeIn(data) {
//     const time = timer(timeouts.xxxl)
//     let state
//     let statusField = false
//     for (const key of Object.keys(data)) {
//       if (JSON.stringify(this[key]) === '{}') {
//         const element = await this[key]
//         do {
//           if (!time.status()) {
//             throw new Error(`Required time limit for typing ${data[key]} is ended!`)
//           }
//           await element.waitForDisplayed()
//           await element.clearValue()
//           await element.addValue(data[key])
//           state = await checkFieldValue(element)
//           state === data[key] ? (statusField = true) : null
//         } while (!statusField)
//       } else {
//         await this[key].typeIn(data[key], this)
//       }
//     }
//   }
//
//   public async clickOn(button) {
//     const root = await button
//     await root.waitForDisplayed()
//     await root.waitForClickable()
//     await root.click()
//   }
//
//   public async clickOnDropdown(button) {
//     const root = await $(`[name="${button.dropdown.name}"]`)
//     await root.waitForDisplayed()
//     await root.waitForClickable()
//     await root.click()
//     await root.selectByVisibleText(button.dropdown.option)
//   }
// }
//
// decorateService(Header)
//
// export { Header, IHeader }
