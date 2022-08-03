/* eslint-disable @typescript-eslint/restrict-plus-operands */
export function makeHash({ length = 10, justNumbers = false, special = false }) {
  let text = ''
  const chars = justNumbers
    ? '0123456789'
    : special
    ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'
    : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < length; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return text
}

export function stringGenerator(length = 10, preffix = '', letters = true, numbers = false, special = false) {
  const letterSet = 'abcdefghijklmnopqrstuvwxyz'
  const numberSet = '0123456789'
  const specialSet = '!@#$%^&*()'
  let set = ''
  set += letters ? letterSet : ''
  set += numbers ? numberSet : ''
  set += special ? specialSet : ''
  let result = preffix
  for (let i = 0; i < length; i++) {
    result += set.charAt(Math.floor(Math.random() * set.length))
  }
  return result
}

export function getRandomFloat(min = 0.00001, max = 0.99999) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(5))
}

export function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function randomFloatNumber(min, max) {
  return Math.random() * (max - min) + min
}
const mobileProviders = [
  //  '039',
  '067',
  '068',
  '096',
  '097',
  '098',
  '050',
  '066',
  '095',
  '099',
  '063',
  '073',
  '093',
  '091',
  '092',
  '094',
]

export const emailGeneration = function emailGenerating(emailLength = 10): string {
  // return `autotest_${makeHash({ length: emailLength })}@${makeHash({ length: 7 })}.${makeHash({ length: 3, justNumbers: false })}`
  return `autotest_${makeHash({ length: emailLength })}@${makeHash({ length: 7 })}.${stringGenerator(
    3,
    '',
    true,
    false,
    false,
  )}`
}

export const mobilePhoneGeneration = function mobilePhoneGenerating(): string {
  const randomProvider = randomInteger(0, mobileProviders.length - 1)
  const phone = `${mobileProviders[randomProvider]}${makeHash({ length: 3, justNumbers: true })}${makeHash({
    length: 2,
    justNumbers: true,
  })}${makeHash({ length: 2, justNumbers: true })}`
  return phone
}

export const ipGeneration = function ipGenerating(): string {
  return `${randomInteger(1, 255)}.${randomInteger(1, 255)}.${randomInteger(1, 255)}.${randomInteger(1, 255)}`
}

export const macGeneration = function macGenerating(): string {
  return 'XX-XX-XX-XX-XX-XX'.replace(/X/g, function () {
    return '0123456789ABCDEF'.charAt(Math.floor(Math.random() * 16))
  })
}
