
import { IActionButton, ActionButton, ActionBtns } from 'page_objects/fragments'
import { decorateService } from 'utils'
import { Origin } from './origin'
import { ChainablePromiseElement } from 'node_modules/webdriverio/build/types'

interface IRegisterPage {
  actionButton?: IActionButton | IActionButton[]
  registerButton?: string
  firstName?: string
}

enum RegisterPageSelectors {
  Register = 'registerButton',

}

class RegisterPage extends Origin<IRegisterPage> {
  private actionButton: ActionButton
  private registerButton: string
  private firstName: ChainablePromiseElement<Promise<WebdriverIO.Element>>

  constructor() {
    super('Origin')
    this.actionButton = new ActionButton(this.root)
    this.registerButton = 'button[data-cy="register-button"]'
    this.root = $('#root')
    this.firstName = $('')
  }



}

decorateService(RegisterPage)

export { RegisterPage, RegisterPageSelectors }
