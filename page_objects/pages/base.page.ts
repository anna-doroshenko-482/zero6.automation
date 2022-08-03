import { Header } from 'page_objects/shared_fragments'
import { Fragment } from './base.fragment'
import { ChainablePromiseElement } from 'node_modules/webdriverio/build/types'

class Page<T> extends Fragment<T> {
  public selector: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  public header: Header

  constructor(title?: string) {
    super(title)
    this.header = new Header()
  }
}

export { Page, Fragment }
