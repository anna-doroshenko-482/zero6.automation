import {
  IActionButton,
  ActionButton,
  Dropdown,
  IDropdown,
  Checkbox,
  ICheckbox,
  TabNames,
  IDataPicker,
  DataPicker,
} from 'page_objects/fragments'
import { decorateService } from 'utils'
import { Origin } from '../energy.origin'
import { ChainablePromiseElement } from 'node_modules/webdriverio/build/types'

interface IHomePage {
  actionButton?: IActionButton | IActionButton[]
  dropdown?: IDropdown | IDropdown[]
  checkbox?: ICheckbox | ICheckbox[]
  tabMenu?: TabNames
  dataPicker?: IDataPicker | IDataPicker[]
  logo?: string

}

enum HomePageSelectors {
  logo = 'logo',
}

class HomePage extends Origin<IHomePage> {
  private actionButton: ActionButton
  private dropdown: Dropdown
  private checkbox: Checkbox
  private dataPicker: DataPicker
  private logo: ChainablePromiseElement<Promise<WebdriverIO.Element>>

  constructor() {
    super('Админка ::Домашняя')
    this.checkbox = new Checkbox(this.root)
    this.actionButton = new ActionButton(this.root)
    this.dataPicker = new DataPicker(this.root)
    this.logo = $('[id="billingLogo"]')
  }
}

decorateService(HomePage)

export { HomePage, HomePageSelectors }
