
import { expect } from 'chai'

import { config } from "config";
import { deviceAllData, loginData } from 'testData'
import { Link, webPages, LoginPage, LoginPageSelectors, RegisterPageSelectors } from "../../../../page_objects";

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
    // await loginPage.Login('admin')
    await loginPage.typeIn({ username: loginPage.permission['admin'].login, password: loginPage.permission['admin'].password })
    await browser.pause(300)
    await loginPage.clickOn({ actionButton: { name: LoginPageSelectors.LOGIN } })
    const caption = await deviceAllPage.caption
    expect(await caption.getText(), 'Go to the homePage').to.contain(deviceAllData.header)
    expect(await await $(header.logOut), 'Log in successful').exist
    // expect(await caption.getText(), 'Log in by Admin').to.contain(loginData.adminRole)
    await browser.pause(3000)
    await header.logOutAccount()
  })

  it('Check for success Agent login to the account with correct data', async () => {
    const { loginPage, deviceAllPage,header } = webPages()
    // await loginPage.Login('agents')
    await loginPage.typeIn({ username: loginPage.permission['agents'].login, password: loginPage.permission['agents'].password })
    await browser.pause(300)
    await loginPage.clickOn({ actionButton: { name: LoginPageSelectors.LOGIN } })
    const caption = await deviceAllPage.caption
    expect(await caption.getText(), 'Go to the homePage').to.contain(deviceAllData.header)
    expect(await await $(header.logOut), 'Log in successful').exist
    // expect(await caption.getText(), 'Log in by Agent').to.contain(loginData.agentRole)
    await browser.pause(3000)
    await header.logOutAccount()
  })

  it('Check for success Devicemanager login to the account with correct data', async () => {
    const { loginPage, deviceAllPage,header } = webPages()
    // await loginPage.Login('devicemanager')
    await loginPage.typeIn({ username: loginPage.permission['devicemanager'].login, password: loginPage.permission['devicemanager'].password })
    await browser.pause(300)
    await loginPage.clickOn({ actionButton: { name: LoginPageSelectors.LOGIN } })
    const caption = await deviceAllPage.caption
    expect(await caption.getText(), 'Go to the homePage').to.contain(deviceAllData.header)
    expect(await await $(header.logOut), 'Log in successful').exist
    // expect(await caption.getText(), 'Log in by Devicemanager').to.contain(loginData.devicemanagerRole)
    await browser.pause(3000)
    await header.logOutAccount()
  })

  it('Check for success Issuer login to the account with correct data', async () => {
    const { loginPage, deviceAllPage,header } = webPages()
    // await loginPage.Login('issuer')
    await loginPage.typeIn({ username: loginPage.permission['issuer'].login, password: loginPage.permission['issuer'].password })
    await browser.pause(300)
    await loginPage.clickOn({ actionButton: { name: LoginPageSelectors.LOGIN } })
    const caption = await deviceAllPage.caption
    expect(await caption.getText(), 'Go to the homePage').to.contain(deviceAllData.header)
    expect(await await $(header.logOut), 'Log in successful').exist
    // expect(await caption.getText(), 'Log in by Issuer').to.contain(loginData.issuerRole)
    await browser.pause(3000)
    await header.logOutAccount()
  })

  it('Check for success Trader login to the account with correct data', async () => {
    const { loginPage, deviceAllPage,header } = webPages()
    // await loginPage.Login('trader')
    await loginPage.typeIn({ username: loginPage.permission['trader'].login, password: loginPage.permission['trader'].password })
    await browser.pause(300)
    await loginPage.clickOn({ actionButton: { name: LoginPageSelectors.LOGIN } })
    const caption = await deviceAllPage.caption
    expect(await caption.getText(), 'Go to the homePage').to.contain(deviceAllData.header)
    expect(await await $(header.logOut), 'Log in successful').exist
    // expect(await caption.getText(), 'Log in by Trader').to.contain(loginData.traderRole)
    await browser.pause(3000)
    await header.logOutAccount()
  })

  it('Check for failure login to the account with incorrect Email', async () => {
    const { loginPage } = webPages()
    // await loginPage.Login('incorrectEmail')
    await loginPage.typeIn({ username: loginPage.permission['incorrectEmail'].login, password: loginPage.permission['incorrectEmail'].password })
    await browser.pause(300)
    await loginPage.clickOn({ actionButton: { name: LoginPageSelectors.LOGIN } })
    const title = await loginPage.imgTitle
    const message = await loginPage.popUpMessage
    expect(await title.getAttribute('id'), 'Load page').to.contain(loginData.imgTitle)
    expect(await message.getText(), 'Stay the same page').to.contain(loginData.errorLogin)
    await browser.pause(3000)
  })

  it('Check for failure login to the account with incorrect Password', async () => {
    const { loginPage } = webPages()
    // await loginPage.Login('incorrectPassword')
    await loginPage.typeIn({ username: loginPage.permission['incorrectPassword'].login, password: loginPage.permission['incorrectPassword'].password })
    await browser.pause(300)
    await loginPage.clickOn({ actionButton: { name: LoginPageSelectors.LOGIN } })
    const title = await loginPage.imgTitle
    const message = await loginPage.popUpMessage
    expect(await title.getAttribute('id'), 'Load page').to.contain(loginData.imgTitle)
    expect(await message.getText(), 'Stay the same page').to.contain(loginData.errorLogin)
    await browser.pause(3000)
  })

  it('Check functionality of the Forgot password?', async () => {
    const { loginPage } = webPages()
    await loginPage.clickOn({ actionButton: { name: LoginPageSelectors.forgotPassword } })
    const forgotForm = await loginPage.forgotForm
    expect(await forgotForm.getText(), 'Go to the Forgot password form').to.contain(loginData.forgotForm)
    await browser.pause(3000)
  })

  it('Check functionality of the Register now', async () => {
    const { loginPage, registerPage } = webPages()
    await loginPage.clickOn({ actionButton: { name: LoginPageSelectors.registerButton} })
    const registerButton = await $(RegisterPageSelectors.registerButton)
    expect(await browser.getUrl(), 'Go to the registerPage').to.contain(Link.registerPage)
    expect(await registerButton, 'registerPage is load').exist
    await browser.pause(3000)
  })


})


