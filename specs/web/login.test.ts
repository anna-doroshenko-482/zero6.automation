
import { expect } from 'chai'

import { deviceAllData, loginData } from 'testData'
import { Link, webPages } from '../../page_objects'

describe('Tests for Login page', function () {
  beforeEach(async () => {
    const link = 'http://20.0.59.108'
    await browser.url(link)
  })
  afterEach(async () => {

  })

  it('Test for test', async () => {
    const link = 'http://20.0.59.108/login'
    await browser.url(link)
    const { deviceAllPage, loginPage } = webPages()
    // await deviceAllPage.transfer(Link.loginPage)
    await browser.pause(3000)
    // const header = await $('h5')
    // expect(await header.getText(), 'Go to the homePage').to.contain(deviceAllData.header)
    // const title = await loginPage.imgTitle
    const title = await $('#Login-as-Member>image')
    expect(await title.getAttribute('id'), 'Load page').to.contain(loginData.imgTitle)
  })


})


//
// import { expect } from 'chai'
// import { Link, webPages } from '../../page_objects'
//
//
// describe('Test for test', function () {
//   beforeEach(async () => {
//     const link = 'http://20.0.59.108'
//     await browser.url(link)
//   })
//   afterEach(async () => {})
//
//   it('Test for test', async () => {
//     await browser.pause(3000)
//     // const link = 'http://20.0.59.108/login'
//     // await browser.url(link)
//     const { deviceAllPage, loginPage } = webPages()
//     await deviceAllPage.transfer(Link.loginPage)
//     // await originPage.transfer(Link.loginPage)
//     await browser.pause(3000)
//     loginPage.login('admin')
//     // expect(await browser.getUrl(), 'Go to the homePage').to.contain(link)
//   })
// })
