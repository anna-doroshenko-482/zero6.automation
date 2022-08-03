/* eslint-disable @typescript-eslint/no-var-requires */
const libProvider = {
  get packages() {
    const path = require('path')
    const faker = require('faker')
    const moment = require('moment')
    const { expect } = require('chai')
    const fs = require('fs')

    return { expect, faker, moment, path, fs }
  },
}

export { libProvider }
