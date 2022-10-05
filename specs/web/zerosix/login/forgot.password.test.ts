
import { expect } from 'chai'

import { config } from "config";
import { forgotPasswordData, loginData, registerData } from "testData";
import { Link, webPages, LoginPage, LoginPageSelectors, ForgotPasswordPageSelectors } from "../../../../page_objects";

describe('Tests for resetting password functionality', function () {
  beforeEach(async () => {
    await browser.url(Link.forgotPasswordPage)
  })
  afterEach(async () => {
  })

  it('Check loading page correctly', async () => {
    const { forgotPasswordPage } = webPages()
    expect(await (await forgotPasswordPage.header).getText()).to.contain(forgotPasswordData.headerText)
    expect(await (await forgotPasswordPage.instruction).getText()).to.contain(forgotPasswordData.instructionText)
    expect(await (await forgotPasswordPage.emailInput)).to.be.exist
    expect(await (await $(forgotPasswordPage.resetPasswordButton))).to.be.exist
    expect(await (await $(forgotPasswordPage.returnLoginButton))).to.be.exist
  })

  it('Check possibility to return to the Login page', async () => {
    const { forgotPasswordPage } = webPages()
    await forgotPasswordPage.clickOn({ actionButton: { name: ForgotPasswordPageSelectors.returnLoginButton } })
    expect(await browser.getUrl(), 'Go to the loginPage').to.contain(Link.loginPage)
  })

  it('Check validation functionality for the invalid email', async () => {
    const { forgotPasswordPage,  } = webPages()
    await forgotPasswordPage.typeIn({
      emailInput: forgotPasswordData.unexistEmail,
    })
    await forgotPasswordPage.clickOn({ actionButton: { name: ForgotPasswordPageSelectors.resetPasswordButton } })
    expect(await browser.getUrl(), 'Stay the same page').to.contain(Link.forgotPasswordPage)
  })

  it('Check functionality for the unexist email', async () => {
    const { forgotPasswordPage,  } = webPages()
    await forgotPasswordPage.typeIn({
      emailInput: forgotPasswordData.unexistEmail,
    })
    await forgotPasswordPage.clickOn({ actionButton: { name: ForgotPasswordPageSelectors.resetPasswordButton } })
    expect(await browser.getUrl(), 'Stay the same page').to.contain(Link.forgotPasswordPage)
  })

  it.only('Check functionality for exist email ', async () => {
    const { forgotPasswordPage,loginPage  } = webPages()
    await forgotPasswordPage.typeIn({
      emailInput: forgotPasswordData.existEmail,
    })
    await forgotPasswordPage.clickOn({ actionButton: { name: ForgotPasswordPageSelectors.resetPasswordButton } })
    expect(await browser.getUrl(), 'Go to the loginPage').to.contain(Link.loginPage)
    // const message = await loginPage.popUpSuccessForgotPassword
    // expect(await message.getText(), 'Stay the same page').to.contain(loginData.popUpSuccessForgotPassword)
    // await browser.pause(3000)
  })



})


