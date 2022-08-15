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

interface IMenu {
  actionButton?: IActionButton | IActionButton[]
  dropdown?: IDropdown | IDropdown[]
  checkbox?: ICheckbox | ICheckbox[]
  tabMenu?: TabNames
  dataPicker?: IDataPicker | IDataPicker[]
  logo?: string
  logOut?: string
  devices?: string
  allDevices?: string
  mapView?: string
  organization?: string
  myOrganization?: string
  registerIREC?: string
  account?: string
  settings?: string
  userProfile?: string
  admin?: string
  adminUsers?: string
  adminOrganizations?: string
  adminClaims?: string
  adminTrades?: string

}

enum MenuSelectors {
  logOut = 'logOut',
  devices = 'devices',
  allDevices = 'allDevices',
  mapView = 'mapView',
  organization = 'organization',
  myOrganization = 'myOrganization',
  registerIREC = 'registerIREC',
  account = 'account',
  settings = 'settings',
  userProfile = 'userProfile',
  admin = 'admin',
  adminUsers = 'adminUsers',
  adminOrganizations = 'adminOrganizations',
  adminClaims = 'adminClaims',
  adminTrades = 'adminTrades',
}

class Menu extends Origin<IMenu> {
  private actionButton: ActionButton
  private dropdown: Dropdown
  private checkbox: Checkbox
  private dataPicker: DataPicker
  private logo: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  logOut: string
  private devices: string
  private allDevices: string
  private mapView: string
  private organization: string
  private myOrganization: string
  private registerIREC: string
  private account: string
  private settings: string
  private userProfile: string
  private admin: string
  private adminUsers: string
  private adminOrganizations: string
  private adminClaims: string
  private adminTrades: string

  constructor() {
    super('Origin')
    this.checkbox = new Checkbox(this.root)
    this.actionButton = new ActionButton(this.root)
    this.dataPicker = new DataPicker(this.root)
    this.logOut = 'button[data-cy="navigation-logout-button"]'
    this.devices = 'a*=Devices'
    this.allDevices = 'a*=Devices'
    this.mapView = 'a*=Devices'
    this.organization = 'a*=Devices'
    this.myOrganization = 'a*=Devices'
    this.registerIREC = 'a*=Devices'
    this.account = 'a*=Devices'
    this.settings = 'a*=Devices'
    this.userProfile = 'a*=Devices'
    this.admin = 'a*=Devices'
    this.adminUsers = 'a*=Devices'
    this.adminOrganizations = 'a*=Devices'
    this.adminClaims = 'a*=Devices'
    this.adminTrades = 'a*=Devices'
  }

  async menuOpen(){
    if(){

    }
  }


}

decorateService(Menu)

export { Menu, MenuSelectors }
