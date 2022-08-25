import { apiManagerMocha, log } from 'lib'
import { IActionButton, ActionButton, ActionBtns } from 'page_objects/fragments'
import { decorateService } from 'utils'
import { Origin } from './origin'
import { ChainablePromiseElement } from 'node_modules/webdriverio/build/types'
const { bUser } = apiManagerMocha

interface IUserProfilePage {
  actionButton?: IActionButton | IActionButton[]
  bankAccountsBlockName?: string
  createAccountButton?: string
  bankAccountsBlock?: string
}

enum UserProfilePageSelectors {
  createAccountButton = 'createAccountButton',

}

class UserProfilePage extends Origin<IUserProfilePage> {
  private actionButton: ActionButton

  bankAccountsBlockName: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  bankAccountsBlock: ChainablePromiseElement<Promise<WebdriverIO.Element>>
   createAccountButton: string

  constructor() {
    super('Zero6')
    this.actionButton = new ActionButton(this.root)
    this.bankAccountsBlockName = $('h5')
    this.bankAccountsBlock = $('table.MuiTable-root')
    this.createAccountButton = 'button[type="button"]'
  }

  async goingToBlock(name){
    let element = await name
    await element.waitForDisplayed()
    await element.scrollIntoView()
    await element.waitForClickable()
    await element.click()
  }


}

decorateService(UserProfilePage)

export { UserProfilePage, UserProfilePageSelectors }
