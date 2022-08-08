import { apiManagerMocha, log } from 'lib'
import { IActionButton, ActionButton, ActionBtns } from 'page_objects/fragments'
import { decorateService } from 'utils'
import { Origin } from './origin'
import { HeaderPage } from './header'
import { ChainablePromiseElement } from 'node_modules/webdriverio/build/types'

interface IDeviceAllPage {
  actionButton?: IActionButton | IActionButton[]
  caption?: string
}

enum DeviceAllPageSelectors {
  pageTitle = 'pageTitle',
  sendButton = 'sendButton',

}

class DeviceAllPage extends Origin<IDeviceAllPage> {
  private actionButton: ActionButton
  private username: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private password: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  caption: ChainablePromiseElement<Promise<WebdriverIO.Element>>

  constructor() {
    super('Origin')
    this.actionButton = new ActionButton(this.root)
    this.root = $('#root')
    this.caption = $('h5')
  }




}

decorateService(DeviceAllPage)

export { DeviceAllPage, DeviceAllPageSelectors }
