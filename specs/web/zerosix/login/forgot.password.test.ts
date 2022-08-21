
import { expect } from 'chai'

import { config } from "config";
import { forgotPasswordData, loginData } from 'testData'
import { Link, webPages, LoginPage, LoginPageSelectors, ForgotPasswordPageSelectors } from "../../../../page_objects";

describe('Tests for Login page', function () {
  beforeEach(async () => {
    await browser.url(Link.forgotPasswordPage)
  })
  afterEach(async () => {
  })

  it('', async () => {
    const { forgotPasswordPage,  } = webPages()
    await forgotPasswordPage.typeIn({
      emailInput: 'en&*&*@^*^gmail.com',
    })
    await forgotPasswordPage.clickOn({ actionButton: { name: ForgotPasswordPageSelectors.submitButton } })

    const message = await forgotPasswordPage.errorMessage
    expect(await message.getText(), 'Stay the same page').to.contain(forgotPasswordData.errorValidation)
    await browser.pause(3000)
  })

  it.only('', async () => {
    const { forgotPasswordPage,  } = webPages()
    await forgotPasswordPage.typeIn({
      emailInput: 'some#$4email@email.com',
    })
    await forgotPasswordPage.clickOn({ actionButton: { name: ForgotPasswordPageSelectors.submitButton } })

    const message = await forgotPasswordPage.popUpMessage
    expect(await message.getText(), 'Stay the same page').to.contain(forgotPasswordData.errorEmail)
    await browser.pause(3000)
  })



})


