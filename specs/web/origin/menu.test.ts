
import { expect } from 'chai'

import { deviceAllData, loginData } from "testData";
import { Link, webPages, MenuSelectors } from '../../../page_objects'

describe('Test for test', function () {
  beforeEach(async () => {
    const link = 'http://20.0.59.108'
    await browser.url(link)
    const { deviceAllPage, loginPage } = webPages()
    await deviceAllPage.transfer(Link.loginPage)
    await loginPage.Login('admin')
  })
  afterEach(async () => {

  })


  it('Check for success going to the All Devices page', async () => {
    const { menu } = webPages()
    await menu.clickOn({ actionButton: { name: MenuSelectors.devices } })
    expect(await browser.getUrl()).to.contain(Link.allDevicesPage)
    const header = await $('h5')
    expect(await header.getText(), 'Go to the homePage').to.contain(deviceAllData.header)
  })


})
