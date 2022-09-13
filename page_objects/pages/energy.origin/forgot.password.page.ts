import { apiManagerMocha, log } from 'lib'
import { IActionButton, ActionButton, ActionBtns } from 'page_objects/fragments'
import { decorateService } from 'utils'
import { Origin } from './origin'
import { HeaderPage } from './header'
import { ChainablePromiseElement } from 'node_modules/webdriverio/build/types'
const { bUser } = apiManagerMocha

interface IForgotPasswordPage {
  actionButton?: IActionButton | IActionButton[]
  emailInput?: string
  resetPasswordButton?: string
  returnLoginButton?: string
  popUpMessage?: string
  errorMessage?: string
  invalidInput?: string
  instruction?: string
  header?: string
}

enum ForgotPasswordPageSelectors {
  resetPasswordButton = 'resetPasswordButton',
  returnLoginButton = 'returnLoginButton',

}

class ForgotPasswordPage extends Origin<IForgotPasswordPage> {
  private actionButton: ActionButton
  header: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  instruction: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  invalidInput: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  popUpMessage: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  errorMessage: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  emailInput: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  resetPasswordButton: string
  returnLoginButton: string

  constructor() {
    super('Zero6')
    this.actionButton = new ActionButton(this.root)
    this.popUpMessage = $('#ik2gmkja5 div>span:nth-child(2)')
    this.header = $('h4')
    this.instruction = $('h5')
    this.invalidInput = $('p#mui-8-helper-text')
    this.errorMessage = $('#j6ay96e81 div[role="alert"]')
    this.emailInput = $('input[name="email"]')
    this.resetPasswordButton = 'button[name="submit"]'
    this.returnLoginButton = 'button[type="button"]'
  }



}

decorateService(ForgotPasswordPage)

export { ForgotPasswordPage, ForgotPasswordPageSelectors }
