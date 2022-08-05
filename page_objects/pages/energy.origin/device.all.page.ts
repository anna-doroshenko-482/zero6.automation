import { apiManagerMocha, log } from 'lib'
import { IActionButton, ActionButton, ActionBtns } from 'page_objects/fragments'
import { decorateService } from 'utils'
import { Origin } from './origin'
import { HomePage } from './home.page'
import { ChainablePromiseElement } from 'node_modules/webdriverio/build/types'
const { bUser } = apiManagerMocha

interface IDeviceAllPage {
  actionButton?: IActionButton | IActionButton[]
  username?: string
  password?: string
}

enum DeviceAllPageSelectors {
  pageTitle = 'pageTitle',
  sendButton = 'sendButton',

}

class DeviceAllPage extends Origin<IDeviceAllPage> {
  private actionButton: ActionButton
  private username: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private password: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private homePage: HomePage

  constructor() {
    super('Origin')
    this.actionButton = new ActionButton(this.root)
    this.username = $('input[data-cy="email"]')
    this.password = $('input[data-cy="password"]')
    this.root = $('body>[class=" FCK__ShowTableBorders"]')
    this.homePage = new HomePage()
  }

  async start(){
    let link: string = null
    log.debug(this.permission)
    if (process.env.SERVER_IP) {
      link = `http://${this.appLink}`
    } else {
      link = `https://${this.appLink}`
    }
    try {
      browser.getUrl()
    } catch (e) {
      throw new Error(`Couldn't reach necessary site. Please, check VPN connection and try again.`)
    }
    await browser.url(link)
  }

}

decorateService(DeviceAllPage)

export { DeviceAllPage, DeviceAllPageSelectors }
