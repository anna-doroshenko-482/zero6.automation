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
import { LoginPageSelectors, Origin } from "../energy.origin";
import { ChainablePromiseElement } from 'node_modules/webdriverio/build/types'

interface IHeader {
  actionButton?: IActionButton | IActionButton[]
  dropdown?: IDropdown | IDropdown[]
  checkbox?: ICheckbox | ICheckbox[]
  tabMenu?: TabNames
  dataPicker?: IDataPicker | IDataPicker[]
  logo?: string
  logOut?: string

}

enum HeaderSelectors {
  logOut = 'logOut',
}

class Header extends Origin<IHeader> {
  private actionButton: ActionButton
  private dropdown: Dropdown
  private checkbox: Checkbox
  private dataPicker: DataPicker
  private logo: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  logOut: string

  constructor() {
    super('Origin')
    this.checkbox = new Checkbox(this.root)
    this.actionButton = new ActionButton(this.root)
    this.dataPicker = new DataPicker(this.root)
    this.logOut = 'button[data-cy="navigation-logout-button"]'
  }

  /**
   *
   */
  async logOutAccount(){
    if(await (await $(this.logOut))){
      await this.clickOn({ actionButton: { name: HeaderSelectors.logOut } })
    }
  }
}

decorateService(Header)

export { Header, HeaderSelectors }
