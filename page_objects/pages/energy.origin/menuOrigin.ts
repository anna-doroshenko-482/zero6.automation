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
  header5?: string
  header6?: string
  logOut?: string
  devices?: string
  allDevices?: string
  mapView?: string
  organization?: string
  myOrganization?: string
  registerIREC?: string
  account?: string
  accountSettings?: string
  userProfile?: string
  admin?: string
  adminUsers?: string
  adminOrganizations?: string
  adminClaims?: string
  adminTrades?: string

  exchange?: string
  exchangeViewMarket?: string
  exchangeAllBundles?: string
  settings?: string

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
  accountSettings = 'accountSettings',
  userProfile = 'userProfile',
  admin = 'admin',
  adminUsers = 'adminUsers',
  adminOrganizations = 'adminOrganizations',
  adminClaims = 'adminClaims',
  adminTrades = 'adminTrades',

  exchange = 'exchange',
  exchangeViewMarket = 'exchangeViewMarket',
  exchangeAllBundles = 'exchangeAllBundles',
  settings = 'settings',
}

class MenuOrigin extends Origin<IMenu> {
  private actionButton: ActionButton
  private dropdown: Dropdown
  private checkbox: Checkbox
  private dataPicker: DataPicker
  private logo: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  header5: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  header6: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  logOut: string
  private devices: string
  private allDevices: string
  private mapView: string
  private organization: string
  private myOrganization: string
  private registerIREC: string
  private account: string
  private accountSettings: string
  private userProfile: string
  private admin: string
  private adminUsers: string
  private adminOrganizations: string
  private adminClaims: string
  private adminTrades: string

  private exchange: string
  private exchangeViewMarket: string
  private exchangeAllBundles: string
  private settings: string


  constructor() {
    super('Origin')
    this.checkbox = new Checkbox(this.root)
    this.actionButton = new ActionButton(this.root)
    this.dataPicker = new DataPicker(this.root)
    this.logOut = 'button[data-cy="navigation-logout-button"]'
    this.header5 = $('h5')
    this.header6 = $('h6')
    this.devices = 'a*=Devices'
    this.allDevices = 'a[data-cy="allDevices"]'
    this.mapView = 'a[data-cy="devicesMap"]'
    this.organization = 'a*=Organization'
    this.myOrganization = 'a[data-cy="myOrganization"]'
    this.registerIREC = 'a[data-cy="organizationRegisterIRec"]'
    this.account = 'a*=Account'
    this.accountSettings = 'a[data-cy="accountSettings"]'
    this.userProfile = 'a[data-cy="accountUserProfile"]'
    this.admin = 'a*=Admin'
    this.adminUsers = 'a[data-cy="adminUsers"]'
    this.adminOrganizations = 'a[data-cy="adminOrganizations"]'
    this.adminClaims = 'a[data-cy="adminClaims"]'
    this.adminTrades = 'a[data-cy="adminTrades"]'

    this.exchange = 'a*=Exchange'
    this.exchangeViewMarket = 'a[data-cy="exchangeViewMarket"]'
    this.exchangeAllBundles = 'a[data-cy="exchangeAllBundles"]'
    this.settings = 'ul.MuiList-root>div:nth-child(5) li>a'
  }

  // async menuOpen(){
  //   if(){
  //
  //   }
  // }


}

decorateService(MenuOrigin)

export { MenuOrigin, MenuSelectors }
