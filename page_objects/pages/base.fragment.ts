import { ChainablePromiseElement } from 'node_modules/webdriverio/build/types'

class Fragment<T> {
  public title: string
  protected root: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  constructor(title: string) {
    this.title = title
  }
}

export { Fragment }
