import { apiManagerMocha, log } from 'lib'
import { IActionButton, ActionButton, ActionBtns } from 'page_objects/fragments'
import { decorateService } from 'utils'
import { Origin } from './../origin'
import { ChainablePromiseElement } from 'node_modules/webdriverio/build/types'
const { bUser } = apiManagerMocha

interface ICreateBankAccountPage {
  actionButton?: IActionButton | IActionButton[]
  headerName?: string
  popupMessage?: string
  cardName?: string
  iban?: string
  creditCard?: string
  debitCard?: string
  saveButton?: string
}

enum CreateBankAccountPageSelectors {
  saveButton = 'saveButton',

}

class CreateBankAccountPage extends Origin<ICreateBankAccountPage> {
  private actionButton: ActionButton

  headerName: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  popupMessage: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private cardName: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private iban: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private creditCard: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private debitCard: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private saveButton: string

  constructor() {
    super('Zero6')
    this.actionButton = new ActionButton(this.root)
    this.headerName = $('h5')
    this.popupMessage = $('h5')
    this.cardName = $('input[data-cy="name"]')
    this.iban = $('input[data-cy="iban"]')
    this.creditCard = $('input[data-cy="creditCard"]')
    this.debitCard = $('input[data-cy="debitCard"]')
    this.saveButton = 'button[name="submit"]'
  }


}

decorateService(CreateBankAccountPage)

export { CreateBankAccountPage, CreateBankAccountPageSelectors }
