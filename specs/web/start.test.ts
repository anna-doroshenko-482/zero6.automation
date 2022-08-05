
import { expect } from 'chai'

import { deviceAllData } from "testData";
import { Link, webPages } from "../../page_objects";

describe('Test for test', function () {
  beforeEach(async () => {
    // const { deviceAllPage } = webPages()
    // await deviceAllPage.start()
  })
  afterEach(async () => {

  })

  it('Test for test', async () => {
    const link = 'http://20.0.59.108'
    await browser.url(link)
    await browser.pause(3000)
    const header = await $('h5')
    expect(await header.getText(), 'Go to the homePage').to.contain(deviceAllData.header)
  })


})
