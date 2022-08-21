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
  submitButton?: string
  popUpMessage?: string
  errorMessage?: string
}

enum ForgotPasswordPageSelectors {
  submitButton = 'submitButton',

}

class ForgotPasswordPage extends Origin<IForgotPasswordPage> {
  private actionButton: ActionButton

   popUpMessage: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  errorMessage: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private emailInput: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private password: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private submitButton: string

  constructor() {
    super('Zero6')
    this.actionButton = new ActionButton(this.root)
    this.popUpMessage = $('#ik2gmkja5 div>span:nth-child(2)')
    this.errorMessage = $('#mui-35-helper-text')
    this.emailInput = $('input[name="email"]')
    this.submitButton = 'button[name="submit"]'
  }



}

decorateService(ForgotPasswordPage)

export { ForgotPasswordPage, ForgotPasswordPageSelectors }
