
import { expect } from 'chai'

import { config } from "config";
import { userProfileData, loginData } from 'testData'
import { Link, webPages, UserProfilePageSelectors } from '../../../page_objects'

describe('Tests for User Profile Bank Accounts functionality', function () {
  beforeEach(async () => {
    const link = 'http://20.0.59.108'
    await browser.url(link)
    const { deviceAllPage, loginPage, userProfilePage } = webPages()
    await deviceAllPage.transfer(Link.loginPage)
    await loginPage.Login('admin')
    await loginPage.transfer(Link.userProfilePage)
    await userProfilePage.goingToBlock(userProfilePage.bankAccountsBlock)
  })
  afterEach(async () => {
    const { header } = webPages()
    await header.logOutAccount()
  })

  it('Check visibility of User Profile Bank Accounts', async () => {
    const { userProfilePage,  } = webPages()
    expect(await (await userProfilePage.bankAccountsBlockName).getText(), 'Stay the same page').to.contain(userProfileData.blockName)
    expect(await userProfilePage.bankAccountsBlock).exist
    expect(await $(userProfilePage.createAccountButton)).exist
    await browser.pause(3000)
  })

  // it('Check functionality for the unexist email', async () => {
  //   const { forgotPasswordPage,  } = webPages()
  //   await forgotPasswordPage.typeIn({
  //     emailInput: forgotPasswordData.unexistEmail,
  //   })
  //   await forgotPasswordPage.clickOn({ actionButton: { name: ForgotPasswordPageSelectors.submitButton } })
  //
  //   const message = await forgotPasswordPage.popUpMessage
  //   expect(await message.getText(), 'Stay the same page').to.contain(forgotPasswordData.errorEmail)
  //   await browser.pause(3000)
  // })
  //
  // it.only('Check functionality for exist email ', async () => {
  //   const { forgotPasswordPage,loginPage  } = webPages()
  //   await forgotPasswordPage.typeIn({
  //     emailInput: forgotPasswordData.existEmail,
  //   })
  //   await forgotPasswordPage.clickOn({ actionButton: { name: ForgotPasswordPageSelectors.submitButton } })
  //   expect(await browser.getUrl(), 'Go to the loginPage').to.contain(Link.loginPage)
  //   const message = await loginPage.popUpSuccessForgotPassword
  //   expect(await message.getText(), 'Stay the same page').to.contain(loginData.popUpSuccessForgotPassword)
  //   await browser.pause(3000)
  // })
  //


})


