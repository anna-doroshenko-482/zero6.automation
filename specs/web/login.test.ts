import { expect } from 'chai'
import { Link, webPages } from '../../page_objects'


describe('Test for test', function () {
  beforeEach(async () => {
    const { originPage } = webPages()
    await originPage.transfer(Link.loginPage)
  })
  afterEach(async () => {})

  it('Test for test', async () => {
    const { originPage } = webPages()
    await originPage.transfer(Link.loginPage)
    await browser.pause(3000)
    // expect(await browser.getUrl(), 'Go to the homePage').to.contain(link)
  })
})
