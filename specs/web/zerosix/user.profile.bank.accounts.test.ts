
import { expect } from 'chai'

import { config } from "config";
import { userProfileData, createBankAccountData } from 'testData'
import { Link, webPages, UserProfilePageSelectors, CreateBankAccountPageSelectors } from '../../../page_objects'

describe('Tests for User Profile Bank Accounts functionality', function () {
  beforeEach(async () => {
    // const link = 'http://20.0.59.108'
    // await browser.url(link)
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

  it('Check functionality for the unexist email', async () => {
    const { userProfilePage, createBankAccountPage } = webPages()
    // await forgotPasswordPage.typeIn({
    //   emailInput: forgotPasswordData.unexistEmail,
    // })
    await userProfilePage.clickOn({ actionButton: { name: UserProfilePageSelectors.createAccountButton } })

    expect(await (await createBankAccountPage.headerName).getText(), 'Stay the same page').to.contain(createBankAccountData.headerName)

    expect(await browser.getUrl()).to.contain(Link.createBankAccountPage)
    await browser.pause(3000)
  })

  it('Check creating new bank account', async () => {
    const { userProfilePage, createBankAccountPage } = webPages()

    await userProfilePage.clickOn({ actionButton: { name: UserProfilePageSelectors.createAccountButton } })
    await createBankAccountPage.typeIn({
      cardName: createBankAccountData.cardName,
      iban: createBankAccountData.iban,
      creditCard: createBankAccountData.creditCard,
      debitCard: createBankAccountData.debitCard,
    })
    await createBankAccountPage.clickOn({ actionButton: { name: CreateBankAccountPageSelectors.saveButton } })
    await createBankAccountPage.transfer(Link.userProfilePage)
    expect(await (await userProfilePage.bankAccountsBlock).getText()).to.contain(createBankAccountData.cardName)
    expect(await (await userProfilePage.bankAccountsBlock).getText()).to.contain(createBankAccountData.iban)
    expect(await (await userProfilePage.bankAccountsBlock).getText()).to.contain(createBankAccountData.creditCard)
    expect(await (await userProfilePage.bankAccountsBlock).getText()).to.contain(createBankAccountData.debitCard)
    await browser.pause(3000)
  })

  it('Check try to create new bank account with incorrect data', async () => {
    const { userProfilePage, createBankAccountPage } = webPages()

    await userProfilePage.clickOn({ actionButton: { name: UserProfilePageSelectors.createAccountButton } })
    await createBankAccountPage.typeIn({
      cardName: createBankAccountData.incorrectCardName,
      iban: createBankAccountData.iban,
      creditCard: createBankAccountData.creditCard,
      debitCard: createBankAccountData.debitCard,
    })
    await createBankAccountPage.clickOn({ actionButton: { name: CreateBankAccountPageSelectors.saveButton } })
    expect(await (await createBankAccountPage.popupMessage).getText()).to.contain(createBankAccountData.errorMessage)
    // await createBankAccountPage.transfer(Link.userProfilePage)
    // expect(await (await userProfilePage.bankAccountsBlock).getText()).to.contain(createBankAccountData.cardName)
    // expect(await (await userProfilePage.bankAccountsBlock).getText()).to.contain(createBankAccountData.iban)
    // expect(await (await userProfilePage.bankAccountsBlock).getText()).to.contain(createBankAccountData.creditCard)
    // expect(await (await userProfilePage.bankAccountsBlock).getText()).to.contain(createBankAccountData.debitCard)
    await browser.pause(3000)
  })

  it('Check try to create new bank account with incorrect data', async () => {
    const { userProfilePage, createBankAccountPage } = webPages()

    await userProfilePage.clickOn({ actionButton: { name: UserProfilePageSelectors.createAccountButton } })
    await createBankAccountPage.typeIn({
      cardName: createBankAccountData.cardName,
      iban: createBankAccountData.incorrectIban,
      creditCard: createBankAccountData.creditCard,
      debitCard: createBankAccountData.debitCard,
    })
    await createBankAccountPage.clickOn({ actionButton: { name: CreateBankAccountPageSelectors.saveButton } })
    expect(await (await createBankAccountPage.popupMessage).getText()).to.contain(createBankAccountData.errorMessage)
    // await createBankAccountPage.transfer(Link.userProfilePage)
    // expect(await (await userProfilePage.bankAccountsBlock).getText()).to.contain(createBankAccountData.cardName)
    // expect(await (await userProfilePage.bankAccountsBlock).getText()).to.contain(createBankAccountData.iban)
    // expect(await (await userProfilePage.bankAccountsBlock).getText()).to.contain(createBankAccountData.creditCard)
    // expect(await (await userProfilePage.bankAccountsBlock).getText()).to.contain(createBankAccountData.debitCard)
    await browser.pause(3000)
  })

  it('Check try to create new bank account with incorrect data', async () => {
    const { userProfilePage, createBankAccountPage } = webPages()

    await userProfilePage.clickOn({ actionButton: { name: UserProfilePageSelectors.createAccountButton } })
    await createBankAccountPage.typeIn({
      cardName: createBankAccountData.cardName,
      iban: createBankAccountData.iban,
      creditCard: createBankAccountData.incorrectCreditCard,
      debitCard: createBankAccountData.debitCard,
    })
    await createBankAccountPage.clickOn({ actionButton: { name: CreateBankAccountPageSelectors.saveButton } })
    expect(await (await createBankAccountPage.popupMessage).getText()).to.contain(createBankAccountData.errorMessage)
    // await createBankAccountPage.transfer(Link.userProfilePage)
    // expect(await (await userProfilePage.bankAccountsBlock).getText()).to.contain(createBankAccountData.cardName)
    // expect(await (await userProfilePage.bankAccountsBlock).getText()).to.contain(createBankAccountData.iban)
    // expect(await (await userProfilePage.bankAccountsBlock).getText()).to.contain(createBankAccountData.creditCard)
    // expect(await (await userProfilePage.bankAccountsBlock).getText()).to.contain(createBankAccountData.debitCard)
    await browser.pause(3000)
  })

  it('Check try to create new bank account with incorrect data', async () => {
    const { userProfilePage, createBankAccountPage } = webPages()

    await userProfilePage.clickOn({ actionButton: { name: UserProfilePageSelectors.createAccountButton } })
    await createBankAccountPage.typeIn({
      cardName: createBankAccountData.cardName,
      iban: createBankAccountData.iban,
      creditCard: createBankAccountData.creditCard,
      debitCard: createBankAccountData.incorrectDebitCard,
    })
    await createBankAccountPage.clickOn({ actionButton: { name: CreateBankAccountPageSelectors.saveButton } })
    expect(await (await createBankAccountPage.popupMessage).getText()).to.contain(createBankAccountData.errorMessage)
    // await createBankAccountPage.transfer(Link.userProfilePage)
    // expect(await (await userProfilePage.bankAccountsBlock).getText()).to.contain(createBankAccountData.cardName)
    // expect(await (await userProfilePage.bankAccountsBlock).getText()).to.contain(createBankAccountData.iban)
    // expect(await (await userProfilePage.bankAccountsBlock).getText()).to.contain(createBankAccountData.creditCard)
    // expect(await (await userProfilePage.bankAccountsBlock).getText()).to.contain(createBankAccountData.debitCard)
    await browser.pause(3000)
  })




})


