import { IActionButton, ActionButton, Dropdown, IDropdown, TabNames } from 'page_objects/fragments'
import { decorateService } from 'utils'
import { Origin } from './origin'

interface IOriginPage {
  actionButton?: IActionButton | IActionButton[]
  dropdown?: IDropdown | IDropdown[]
  tabMenu?: TabNames
}

class OriginPage extends Origin<IOriginPage> {
  private actionButton: ActionButton
  private dropdown: Dropdown

  constructor() {
    super('Origin')
    this.actionButton = new ActionButton(this.root)
    this.dropdown = new Dropdown(this.root)
  }
}

decorateService(OriginPage)

export { OriginPage }
