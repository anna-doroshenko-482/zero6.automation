/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import path from 'path'
import { ChainablePromiseElement } from 'node_modules/webdriverio/build/types'
interface IFileUploading {
  filePath: string
  input: string
  shadow?: boolean
}

class FileUploading {
  private root: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private input: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  constructor(root = $('body')) {
    this.root = root
  }
  public async typeIn(uploads: IFileUploading, context) {
    const filePath = path.join(process.cwd(), uploads.filePath)
    // const filePath = path.join(__dirname, uploads.filePath)
    const remoteFilePath = await browser.uploadFile(filePath)
    const input = await $(`${context.input}`)
    await input.addValue(remoteFilePath)
  }
}

export { FileUploading, IFileUploading }
