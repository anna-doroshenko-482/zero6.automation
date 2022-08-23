import { apiManagerMocha, log } from 'lib'
import { IActionButton, ActionButton, ActionBtns } from 'page_objects/fragments'
import { decorateService } from 'utils'
import { Origin } from './origin'
import { HeaderPage } from './header'
import { ChainablePromiseElement } from 'node_modules/webdriverio/build/types'
const { bUser } = apiManagerMocha

interface ILoginPage {
  actionButton?: IActionButton | IActionButton[]
  username?: string
  password?: string
  imgTitle?: string
  LOGIN?: string
  popUpMessage?: string
  forgotPassword?: string
  registerButton?: string
  registerText?: string
  forgotForm?: string
  popUpSuccessForgotPassword?: string
}

enum LoginPageSelectors {
  LOGIN = 'LOGIN',
  forgotPassword = 'forgotPassword',
  registerButton = 'registerButton',

}

class LoginPage extends Origin<ILoginPage> {
  private actionButton: ActionButton

  private username: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private password: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private LOGIN: string
  private forgotPassword: string
  private registerButton: string
   imgTitle: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  popUpMessage: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  registerText: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  forgotForm: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  popUpSuccessForgotPassword: ChainablePromiseElement<Promise<WebdriverIO.Element>>

  constructor() {
    super('Origin')
    this.actionButton = new ActionButton(this.root)
    this.imgTitle = $('#Login-as-Member>image')
    this.username = $('input[data-cy="email"]')
    this.password = $('input[data-cy="password"]')
    this.LOGIN = 'button[data-cy="login-button"]'
    this.root = $('#root')
    this.popUpMessage = $('#root')
    this.popUpSuccessForgotPassword = $('#nv4zg2ppk>div>div>div>div')
    this.forgotPassword = 'button'
    this.forgotForm = $('form h6')
    this.registerText = $('.MuiBox-root>p')
    this.registerButton = 'button[data-cy="register-now-button"]'
  }

  async Login(user: string) {
    // let link: string = null
    // log.debug(this.permission)
    // if (process.env.SERVER_IP) {
    //   link = `http://${this.appLink}`
    // } else {
    //   link = `https://${this.appLink}`
    // }
    // try {
    //   browser.getUrl()
    // } catch (e) {
    //   throw new Error(`Something is wrong.`)
    // }
    // await browser.url(link)
    await this.typeIn({ username: this.permission[user].login, password: this.permission[user].password })
    await browser.pause(300)
    await this.clickOn({ actionButton: { name: LoginPageSelectors.LOGIN } })

    // const signInCookies = await browser.getCookies('SIGN')
    // this.cookie = signInCookies[0]
  }


}

decorateService(LoginPage)

export { LoginPage, LoginPageSelectors }
