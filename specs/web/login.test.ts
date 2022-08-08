
import { expect } from 'chai'

import { deviceAllData, loginData } from 'testData'
import { Link, webPages, LoginPage } from '../../page_objects'

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

  it('Check for success login to the account with correct data', async () => {
    const { loginPage, deviceAllPage,header } = webPages()
    await loginPage.Login('admin')
    const caption = await deviceAllPage.caption
    expect(await caption.getText(), 'Go to the homePage').to.contain(deviceAllData.header)
    expect(await await $(header.logOut), 'Log in successful').exist
    await header.logOutAccount()
  })

  it('Check for failure login to the account with incorrect Email', async () => {
    const { loginPage } = webPages()
    await loginPage.Login('incorrectEmail')
    const title = await loginPage.imgTitle
    const message = await loginPage.popUpMessage
    expect(await title.getAttribute('id'), 'Load page').to.contain(loginData.imgTitle)
    expect(await message.getText(), 'Stay the same page').to.contain(loginData.errorLogin)
  })

  it('Check for failure login to the account with incorrect Password', async () => {
    const { loginPage } = webPages()
    await loginPage.Login('incorrectPassword')
    const title = await loginPage.imgTitle
    const message = await loginPage.popUpMessage
    expect(await title.getAttribute('id'), 'Load page').to.contain(loginData.imgTitle)
    expect(await message.getText(), 'Stay the same page').to.contain(loginData.errorLogin)
  })

  it('Check functionality of the Forgot password?', async () => {
    const { loginPage } = webPages()
    // await loginPage.Login('admin')
    // const header = await deviceAllPage.header
    // expect(await header.getText(), 'Go to the homePage').to.contain(deviceAllData.header)
    // expect(await await $(headerPage.logOut), 'Log in successful').exist
    // await headerPage.logOutAccount()
  })

  it('Check functionality of the Register now', async () => {
    const { loginPage } = webPages()
    // await loginPage.Login('admin')
    // const header = await deviceAllPage.header
    // expect(await header.getText(), 'Go to the homePage').to.contain(deviceAllData.header)
    // expect(await await $(headerPage.logOut), 'Log in successful').exist
    // await headerPage.logOutAccount()
  })


})


