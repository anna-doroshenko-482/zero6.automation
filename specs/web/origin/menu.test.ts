
import { expect } from 'chai'

import { menuData } from "testData";
import { Link, webPages, MenuSelectors } from '../../../page_objects'

describe('Testing functionality Menu for login user', function () {
  beforeEach(async () => {
    const link = 'http://20.0.59.108'
    await browser.url(link)
    const { deviceAllPage, loginPage } = webPages()
    await deviceAllPage.transfer(Link.loginPage)
    await loginPage.Login('admin')
  })
  afterEach(async () => {
    const { header } = webPages()
    await header.logOutAccount()
  })

  it('Check for success going to the All Devices page', async () => {
    const { menu } = webPages()
    await menu.clickOn({ actionButton: { name: MenuSelectors.devices } })
    expect(await browser.getUrl()).to.contain(Link.allDevicesPage)
    const header = await menu.header5
    expect(await header.getText(), 'Going to the Page').to.contain(menuData.deviceAll)
  })

  it('Check for success going to the Map View page', async () => {
    const { menu } = webPages()
    await menu.clickOn({ actionButton: { name: MenuSelectors.mapView } })
    expect(await browser.getUrl()).to.contain(Link.mapViewPage)
    // const header = await menu.header5
    // expect(await header.getText(), 'Going to the Page').to.contain(menuData.mapView)
  })

  it('Check for success going to the Organization page', async () => {
    const { menu } = webPages()
    await menu.clickOn({ actionButton: { name: MenuSelectors.organization } })
    expect(await browser.getUrl()).to.contain(Link.organizationPage)
    const header = await menu.header6
    expect(await header.getText(), 'Going to the Page').to.contain(menuData.organization)
  })

  // Double
  // it('Check for success going to the Organization page', async () => {
  //   const { menu } = webPages()
  //   await menu.clickOn({ actionButton: { name: MenuSelectors.myOrganization } })
  //   expect(await browser.getUrl()).to.contain(Link.myOrganizationPage)
  //   const header = await menu.header6
  //   expect(await header.getText(), 'Going to the Page').to.contain(menuData.myOrganization)
  // })

  it('Check for success going to the Register IREC page', async () => {
    const { menu } = webPages()
    await menu.clickOn({ actionButton: { name: MenuSelectors.registerIREC } })
    expect(await browser.getUrl()).to.contain(Link.registerIRECPage)
    const header = await menu.header5
    expect(await header.getText(), 'Going to the Page').to.contain(menuData.registerIREC)
  })

  it('Check for success going to the Account page', async () => {
    const { menu } = webPages()
    await menu.clickOn({ actionButton: { name: MenuSelectors.account } })
    expect(await browser.getUrl()).to.contain(Link.accountPage)
    // const header = await menu.header5
    // expect(await header.getText(), 'Going to the Page').to.contain(menuData.account)
  })

  // Double
  // it('Check for success going to the Account Settings page', async () => {
  //   const { menu } = webPages()
  //   await menu.clickOn({ actionButton: { name: MenuSelectors.accountSettings } })
  //   expect(await browser.getUrl()).to.contain(Link.settingsPage)
  //   // const header = await menu.header5
  //   // expect(await header.getText(), 'Going to the Page').to.contain(menuData.accountSettings)
  // })

  it('Check for success going to the User ProfilePage page', async () => {
    const { menu } = webPages()
    await menu.clickOn({ actionButton: { name: MenuSelectors.userProfile } })
    expect(await browser.getUrl()).to.contain(Link.userProfilePage)
    const header = await menu.header5
    expect(await header.getText(), 'Going to the Page').to.contain(menuData.userProfile)
  })

  it('Check for success going to the Admin page', async () => {
    const { menu } = webPages()
    await menu.clickOn({ actionButton: { name: MenuSelectors.admin } })
    expect(await browser.getUrl()).to.contain(Link.adminPage)
    // const header = await menu.header5
    // expect(await header.getText(), 'Going to the Page').to.contain(menuData.admin)
  })

  // Double
  // it('Check for success going to the Admin Users page', async () => {
  //   const { menu } = webPages()
  //   await menu.clickOn({ actionButton: { name: MenuSelectors.adminUsers } })
  //   expect(await browser.getUrl()).to.contain(Link.adminUsersPage)
  //   // const header = await menu.header5
  //   // expect(await header.getText(), 'Going to the Page').to.contain(menuData.adminUsers)
  // })

  it('Check for success going to the Admin Organizations page', async () => {
    const { menu } = webPages()
    await menu.clickOn({ actionButton: { name: MenuSelectors.adminOrganizations } })
    expect(await browser.getUrl()).to.contain(Link.adminOrganizationsPage)
    // const header = await menu.header5
    // expect(await header.getText(), 'Going to the Page').to.contain(menuData.adminOrganizations)
  })

  it('Check for success going to the Admin Claims page', async () => {
    const { menu } = webPages()
    await menu.clickOn({ actionButton: { name: MenuSelectors.adminClaims } })
    expect(await browser.getUrl()).to.contain(Link.adminClaimsPage)
    // const header = await menu.header5
    // expect(await header.getText(), 'Going to the Page').to.contain(menuData.adminClaims)
  })

  it('Check for success going to the Admin Trades page', async () => {
    const { menu } = webPages()
    await menu.clickOn({ actionButton: { name: MenuSelectors.adminTrades } })
    expect(await browser.getUrl()).to.contain(Link.adminTradesPage)
    // const header = await menu.header5
    // expect(await header.getText(), 'Going to the Page').to.contain(menuData.adminTrades)
  })

})

describe('Testing functionality Menu for not login user', function () {
  beforeEach(async () => {
    const link = 'http://20.0.59.108'
    await browser.url(link)
  })
  afterEach(async () => {

  })

  it('Check for success going to the All Devices page', async () => {
    const { menu } = webPages()
    await menu.clickOn({ actionButton: { name: MenuSelectors.devices } })
    expect(await browser.getUrl()).to.contain(Link.allDevicesPage)
    const header = await menu.header5
    expect(await header.getText(), 'Going to the Page').to.contain(menuData.deviceAll)
  })

  it('Check for success going to the Map View page', async () => {
    const { menu } = webPages()
    await menu.clickOn({ actionButton: { name: MenuSelectors.mapView } })
    expect(await browser.getUrl()).to.contain(Link.mapViewPage)
    // const header = await menu.header5
    // expect(await header.getText(), 'Going to the Page').to.contain(menuData.mapView)
  })

  it('Check for success going to the Exchange page', async () => {
    const { menu } = webPages()
    await menu.clickOn({ actionButton: { name: MenuSelectors.exchange } })
    expect(await browser.getUrl()).to.contain(Link.exchangePage)
    const header = await menu.header5
    expect(await header.getText(), 'Going to the Page').to.contain(menuData.exchange)
  })

  // Double
  // it('Check for success going to the Exchange View Market page', async () => {
  //   const { menu } = webPages()
  //   await menu.clickOn({ actionButton: { name: MenuSelectors.exchangeViewMarket } })
  //   expect(await browser.getUrl()).to.contain(Link.exchangeViewMarketPage)
  //   const header = await menu.header6
  //   expect(await header.getText(), 'Going to the Page').to.contain(menuData.exchangeViewMarket)
  // })

  it('Check for success going to the Exchange All Bundles page', async () => {
    const { menu } = webPages()
    await menu.clickOn({ actionButton: { name: MenuSelectors.exchangeAllBundles } })
    expect(await browser.getUrl()).to.contain(Link.exchangeAllBundlesPage)
    const header = await menu.header5
    expect(await header.getText(), 'Going to the Page').to.contain(menuData.exchangeAllBundles)
  })

  it('Check for success going to the Settings page', async () => {
    const { menu } = webPages()
    await menu.clickOn({ actionButton: { name: MenuSelectors.settings } })
    expect(await browser.getUrl()).to.contain(Link.settingsPage)
    // const header = await menu.header5
    // expect(await header.getText(), 'Going to the Page').to.contain(menuData.settings)
  })

  // Double
  // it('Check for success going to the Account Settings page', async () => {
  //   const { menu } = webPages()
  //   await menu.clickOn({ actionButton: { name: MenuSelectors.settings } })
  //   expect(await browser.getUrl()).to.contain(Link.settingsPage)
  //   // const header = await menu.header5
  //   // expect(await header.getText(), 'Going to the Page').to.contain(menuData.settings)
  // })


})
