/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const chai = require('chai')
const like = require('chai-like')

chai.config.includeStack = true
chai.config.showDiff = true
chai.config.truncateThreshold = 0

let regexPlugin = {
  match: function (object, expected) {
    return (typeof object === 'string' || object === null || Array.isArray(object)) && expected instanceof RegExp
  },
  assert: function (object, expected) {
    if (Array.isArray(object)) {
      return true
    }
    return expected.test(object)
  },
}
like.extend(regexPlugin)
chai.use(like)
