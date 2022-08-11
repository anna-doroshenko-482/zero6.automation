
import { IActionButton, ActionButton, ActionBtns } from 'page_objects/fragments'
import { decorateService } from 'utils'
import { Origin } from './origin'
import { ChainablePromiseElement } from 'node_modules/webdriverio/build/types'

interface IRegisterPage {
  actionButton?: IActionButton | IActionButton[]
  registerButton?: string
  okRegisterModalButton?: string
  firstName?: string
  lastName?: string
  email?: string
  telephone?: string
  password?: string
  thanksRegisterMessage?: string
}

enum RegisterPageSelectors {
  registerButton = 'registerButton',
  okRegisterModalButton = 'okRegisterModalButton',

}

class RegisterPage extends Origin<IRegisterPage> {
  private actionButton: ActionButton
  private registerButton: string
   okRegisterModalButton: string
  private firstName: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private lastName: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private email: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private telephone: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private password: ChainablePromiseElement<Promise<WebdriverIO.Element>>
   thanksRegisterMessage: ChainablePromiseElement<Promise<WebdriverIO.Element>>

  constructor() {
    super('Origin')
    this.actionButton = new ActionButton(this.root)
    this.registerButton = 'button[data-cy="register-button"]'
    this.root = $('#root')
    this.firstName = $('input[data-cy="firstName"]')
    this.lastName = $('input[data-cy="lastName"]')
    this.email = $('input[data-cy="email"]')
    this.telephone = $('input[data-cy="telephone"]')
    this.password = $('input[data-cy="password"]')
    this.registerButton = 'button[data-cy="register-button"]'
    this.thanksRegisterMessage = $('h2#mui-6')
    this.okRegisterModalButton = 'button[data-cy="user-registered-modal-ok"]'
  }



}

decorateService(RegisterPage)

export { RegisterPage, RegisterPageSelectors }
