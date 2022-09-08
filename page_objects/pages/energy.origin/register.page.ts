
import { IActionButton, ActionButton, ActionBtns, Checkbox, ICheckbox, } from 'page_objects/fragments'
import { decorateService } from 'utils'
import { Origin } from './origin'
import { ChainablePromiseElement } from 'node_modules/webdriverio/build/types'

interface IRegisterPage {
  actionButton?: IActionButton | IActionButton[]
  checkbox?: ICheckbox | ICheckbox[]
  continueButton?: string
  okRegisterModalButton?: string
  firstName?: string
  lastName?: string
  email?: string
  telephone?: string
  password?: string
  passwordConfirm?: string
  thanksRegisterMessage?: string
  popUpMessage?: string
  agreeTermConditions?: string
  loginButton?: string
  haveLoginText?: string
}

enum RegisterPageSelectors {
  continueButton = 'continueButton',
  okRegisterModalButton = 'okRegisterModalButton',
  agreeTermConditions = 'agreeTermConditions',
  loginButton = 'loginButton',

}

class RegisterPage extends Origin<IRegisterPage> {
  private actionButton: ActionButton
  private checkbox: Checkbox
  private continueButton: string
   loginButton: string
  private agreeTermConditions: string
   okRegisterModalButton: string
  private firstName: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private lastName: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private email: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private telephone: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private password: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private passwordConfirm: ChainablePromiseElement<Promise<WebdriverIO.Element>>
   thanksRegisterMessage: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  popUpMessage: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  haveLoginText: ChainablePromiseElement<Promise<WebdriverIO.Element>>

  constructor() {
    super('Zero6')
    this.actionButton = new ActionButton(this.root)
    this.checkbox = new Checkbox(this.root)
    this.registerButton = 'button[data-cy="register-button"]'
    this.root = $('#root')
    this.firstName = $('input[data-cy="firstName"]')
    this.lastName = $('input[data-cy="lastName"]')
    this.email = $('input[data-cy="email"]')
    this.telephone = $('input[data-cy="telephone"]')
    this.password = $('input[data-cy="password"]')
    this.passwordConfirm = $('input[data-cy="password"]')
    this.agreeTermConditions = ''
    this.continueButton = 'button[data-cy="register-button"]'
    this.thanksRegisterMessage = $('h2#mui-6')
    this.okRegisterModalButton = 'button[data-cy="user-registered-modal-ok"]'
    this.popUpMessage = $('#root')
    this.haveLoginText = $('p.MuiTypography-root')
    this.loginButton = 'button[data-cy="register-now-button"]'
  }



}

decorateService(RegisterPage)

export { RegisterPage, RegisterPageSelectors }
