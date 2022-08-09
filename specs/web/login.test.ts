
import { expect } from 'chai'

import { deviceAllData, loginData } from 'testData'
import { Link, webPages, LoginPage, LoginPageSelectors, RegisterPageSelectors } from "../../page_objects";

describe('Tests for Login page', function () {
  beforeEach(async () => {
    const link = 'http://20.0.59.108'
    await browser.url(link)
    const { deviceAllPage } = webPages()
    await deviceAllPage.transfer(Link.loginPage)
  })
  afterEach(async () => {
    // const { header } = webPages()
    // await header.logOutAccount()
  })

  it('Check for success Admin login to the account with correct data', async () => {
    const { loginPage, deviceAllPage,header } = webPages()
    await loginPage.Login('admin')
    const caption = await deviceAllPage.caption
    expect(await caption.getText(), 'Go to the homePage').to.contain(deviceAllData.header)
    expect(await await $(header.logOut), 'Log in successful').exist
    await browser.pause(3000)
    await header.logOutAccount()
  })

  it('Check for failure login to the account with incorrect Email', async () => {
    const { loginPage } = webPages()
    await loginPage.Login('incorrectEmail')
    const title = await loginPage.imgTitle
    const message = await loginPage.popUpMessage
    expect(await title.getAttribute('id'), 'Load page').to.contain(loginData.imgTitle)
    expect(await message.getText(), 'Stay the same page').to.contain(loginData.errorLogin)
    await browser.pause(3000)
  })

  it('Check for failure login to the account with incorrect Password', async () => {
    const { loginPage } = webPages()
    await loginPage.Login('incorrectPassword')
    const title = await loginPage.imgTitle
    const message = await loginPage.popUpMessage
    expect(await title.getAttribute('id'), 'Load page').to.contain(loginData.imgTitle)
    expect(await message.getText(), 'Stay the same page').to.contain(loginData.errorLogin)
    await browser.pause(3000)
  })

  it('Check functionality of the Forgot password?', async () => {
    const { loginPage } = webPages()
    await loginPage.clickOn({ actionButton: { name: LoginPageSelectors.forgotButton } })
    const forgotForm = await loginPage.forgotForm
    expect(await forgotForm.getText(), 'Go to the Forgot password form').to.contain(loginData.forgotForm)
    await browser.pause(3000)
  })

  it('Check functionality of the Register now', async () => {
    const { loginPage, registerPage } = webPages()
    await loginPage.clickOn({ actionButton: { name: LoginPageSelectors.registerButton} })
    const registerButton = await $(RegisterPageSelectors.Register)
    expect(await browser.getUrl(), 'Go to the registerPage').to.contain(Link.registerPage)
    expect(await registerButton, 'registerPage is load').exist
    await browser.pause(3000)
  })


})


