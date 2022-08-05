import { expect } from 'chai'
import { Link, webPages } from '../../page_objects'


describe('Test for test', function () {
  beforeEach(async () => {

  })
  afterEach(async () => {})

  it('Test for test', async () => {
    const link = 'http://20.0.59.108/login'
    await browser.url(link)
    const { deviceAllPage, loginPage } = webPages()
    // await deviceAllPage.transfer(Link.loginPage)
    // await originPage.transfer(Link.loginPage)
    await browser.pause(3000)
    loginPage.login('admin')
    // expect(await browser.getUrl(), 'Go to the homePage').to.contain(link)
  })
})
