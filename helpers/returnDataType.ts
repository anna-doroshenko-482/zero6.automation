export function returnDataType(body, status) {
  return { body: typeof body === 'string' ? JSON.parse(body) : body, status }
}

export function randomElementArray(array) {
  return array[Math.floor(Math.random() * array.length)]
}

export async function checkFieldValue(selector): Promise<any> {
  let pickerValue
  const requestedCapabilities = <any>browser.requestedCapabilities
  if (requestedCapabilities.browserName === 'chrome') {
    pickerValue = await selector.getAttribute('value')
  } else {
    pickerValue = await selector.getValue()
  }
  return pickerValue
}
