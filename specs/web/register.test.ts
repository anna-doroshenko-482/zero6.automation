
import { expect } from 'chai'

import { registerData, loginData } from 'testData'
import { Link, webPages, LoginPage, LoginPageSelectors, RegisterPageSelectors } from "../../page_objects";

describe('Tests for Register page', function () {
  beforeEach(async () => {
    const link = 'http://20.0.59.108'
    await browser.url(link)
    const { deviceAllPage } = webPages()
    await deviceAllPage.transfer(Link.registerPage)
  })
  afterEach(async () => {
    // const { header } = webPages()
    // await header.logOutAccount()
  })

  it('Check for success create the new account with correct data for role Admin', async () => {
    const { registerPage } = webPages()
    await registerPage.typeIn({
      firstName: registerData.firstNameAdmin,
      lastName: registerData.lastNameAdmin,
      email: registerData.emailAdmin,
      telephone: registerData.telephoneAdmin,
      password: registerData.passwordAdmin,
    })
    await registerPage.clickOn({ actionButton: { name: RegisterPageSelectors.registerButton } })
    expect(await (await registerPage.thanksRegisterMessage).getText(), 'Register is done').to.contain(registerData.thanksRegisterMessage)
    expect(await $(registerPage.okRegisterModalButton), 'Confirmation modal button is visible').exist
    await browser.pause(3000)
    await registerPage.clickOn({ actionButton: { name: RegisterPageSelectors.okRegisterModalButton } })
  })

  it('Check for failure register to the account with incorrect First / Last name', async () => {
    const { registerPage } = webPages()
    await registerPage.typeIn({
      firstName: registerData.incorrectFirstName,
      lastName: registerData.incorrectLastName,
    })
    const message = await registerPage.popUpMessage
    expect(await message.getText(), 'Incorrect data input').to.contain(registerData.errorRegister)
    await browser.pause(3000)
  })

  it('Check for failure register to the account with incorrect Email', async () => {
    const { registerPage } = webPages()
    await registerPage.typeIn({
      email: registerData.incorrectEmail,
    })
    const message = await registerPage.popUpMessage
    expect(await message.getText(), 'Incorrect data input').to.contain(registerData.errorRegister)
    await browser.pause(3000)
  })

  it('Check for failure register to the account with incorrect Telephone', async () => {
    const { registerPage } = webPages()
    await registerPage.typeIn({
      telephone: registerData.incorrectTelephone,
    })
    const message = await registerPage.popUpMessage
    expect(await message.getText(), 'Incorrect data input').to.contain(registerData.errorRegister)
    await browser.pause(3000)
  })

  it('Check for failure register to the account with incorrect Password', async () => {
    const { registerPage } = webPages()
    await registerPage.typeIn({
      password: registerData.incorrectPassword,
    })
    const message = await registerPage.popUpMessage
    expect(await message.getText(), 'Incorrect data input').to.contain(registerData.errorRegister)
    await browser.pause(3000)
  })


})


