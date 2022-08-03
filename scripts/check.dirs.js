/* eslint-disable @typescript-eslint/no-var-requires */
const { getSpecFilesArr } = require('process-rerun')

getSpecFilesArr('./', [], ['node_modules']).forEach((fileItem) => {
  if (fileItem.includes(' ')) {
    throw new Error(`Framework is broken, check file: ${fileItem}`)
  }
})
