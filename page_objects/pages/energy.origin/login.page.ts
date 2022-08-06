import { apiManagerMocha, log } from 'lib'
import { IActionButton, ActionButton, ActionBtns } from 'page_objects/fragments'
import { decorateService } from 'utils'
import { Origin } from './origin'
import { HomePage } from './home.page'
import { ChainablePromiseElement } from 'node_modules/webdriverio/build/types'
const { bUser } = apiManagerMocha

interface ILoginPage {
  actionButton?: IActionButton | IActionButton[]
  username?: string
  password?: string
  imgTitle?: string
}

class LoginPage extends Origin<ILoginPage> {
  private actionButton: ActionButton
  private username: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private password: ChainablePromiseElement<Promise<WebdriverIO.Element>>
   imgTitle: ChainablePromiseElement<Promise<WebdriverIO.Element>>

  constructor() {
    super('Origin')
    this.actionButton = new ActionButton(this.root)
    this.imgTitle = $('#Login-as-Member>image')
    this.username = $('input[data-cy="email"]')
    this.password = $('input[data-cy="password"]')
    this.root = $('#root')
    this.homePage = new HomePage()
  }

  async login(user: string) {
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
      throw new Error(`Something is wrong.`)
    }
    await browser.url(link)
    await this.typeIn({ username: this.permission[user].login, password: this.permission[user].password })
    await browser.pause(300)
    await this.clickOn({ actionButton: { name: ActionBtns.Login } })
    // const signInCookies = await browser.getCookies('SIGN')
    // this.cookie = signInCookies[0]
  }

  async apiLogin(){
    const token = await bUser.getToken()
    return token
  }

  // async verifyCookieWorkflow(): Promise<void> {
  //   const link = `https://${this.appLink}`
  //   await browser.deleteCookies()
  //   await browser.url(link)
  //   await this.homePage.transfer(Link.ordersType)
  //   await this.userField.waitForDisplayed()
  //   await browser.setCookies([{ name: this.cookie.name, value: this.cookie.value }])
  //   await this.homePage.transfer(Link.ordersType)
  //   await this.userField.waitForExist({ reverse: true })
  // }
}

decorateService(LoginPage)

export { LoginPage }
