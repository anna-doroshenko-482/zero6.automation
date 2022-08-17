
import { expect } from 'chai'

import { config } from "config";
import { deviceAllData, loginData } from 'testData'
import { Link, webPages, LoginPage, LoginPageSelectors, RegisterPageSelectors } from "../../../../page_objects";

describe('Tests for Login page', function () {
  beforeEach(async () => {
    const link = 'http://20.0.59.108'
    await browser.url(Link.forgotPasswordPage)
    // const { deviceAllPage } = webPages()
    // await deviceAllPage.transfer(Link.loginPage)
  })
  afterEach(async () => {
    // const { header } = webPages()
    // await header.logOutAccount()
  })

  it('Check for success Admin login to the account with correct data', async () => {
    const { forgotPasswordPage,  } = webPages()
    // await loginPage.Login('admin')
    // await loginPage.typeIn({ username: loginPage.permission['admin'].login, password: loginPage.permission['admin'].password })
    // await browser.pause(300)
    // await loginPage.clickOn({ actionButton: { name: LoginPageSelectors.LOGIN } })
    // const caption = await deviceAllPage.caption
    expect(await (await forgotPasswordPage.formHeader).getText(), 'Go to the homePage').to.contain(forgotPasswordData.header)
    // expect(await await $(header.logOut), 'Log in successful').exist
    // // expect(await caption.getText(), 'Log in by Admin').to.contain(loginData.adminRole)
    await browser.pause(3000)
    // await header.logOutAccount()
  })



})


