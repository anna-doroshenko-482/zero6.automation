import { checkFieldValue, timer } from 'helpers'
import { timeouts } from 'lib'
import { ChainablePromiseElement } from 'node_modules/webdriverio/build/types'

interface IDropdown {
  name?: Dropdowns | any
  option?: string | any
}

enum Dropdowns {
  systemsSearch = 'filter',
  startedDayMonth = 'fd',
  startedMonth = 'fm',
  startedYears = 'fy',
  endedDayMonth = 'td',
  endedMonth = 'tm',
  endedYears = 'ty',
  operators = 'operator',
  level = 'level',
  typePayment = 'f_is_active',
  spd = 'entrepreneurID',
  yearPayments = 'picker__select--year',
  // monthPayments = 'picker__select--month',
  type = 'Type',
  internalType = 'InternalType',
  locationType = 'LocationType',
  isemail = 'isemail',
  balance = 'cb',
  bonus = 'bdir',
  newsType = 'Type',
  unionStatus = 'st',
  unionType = 'ServiceType',
  unionPackage = 'p',
  internetPackage = 'inetservice',
  internetPackageEx = 'inetserviceex',
  iptvPackage = 'iptvservice',
  iptvPackageEx = 'iptvserviceex',
  ctvPackage = 'ctvservice',
  dtvPackage = 'dtvservice',
  unionBonus = 'bonus_direction',
  internetNet = 'cN',
  inetPackage = 'p',
  inetEx = 'se',
  inetStatus = 'st',
  inetType = 'ct',
  inetAuthType = 'authType',
  inetIMPB = 'isBind',
  inetIsSwEnabled = 'isSwEnabled',
  inetUnion = 'hybrid',
  inetExpires = 'ca',
  inetFilter = 'sb',
  iptvEx = 'se',
  ctvEx = 'cs',
  ctvStatus = 'a',
  ctvFilter = 'ord',
  iscnotifsms = 'iscnotifsms',
  iscnotif = 'iscnotif',
  issms = 'issms',
  orderBy = 'orderBy',
  typeT = 't',
  supplier = 'p',
  dateFilter = 'date',
  Time = 'time',
  oid = 'oid',
  ExecBy1 = 'ExecBy1',
  ExecBy2 = 'ExecBy2',
  ExecBy3 = 'ExecBy3',
}

class Dropdown {
  private root: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  private parentRaw: string
  private element: string
  private dropdownOption: string

  constructor(root = $('body')) {
    this.root = root
  }

  public async clickOn(dropdowns: IDropdown[]) {
    const time = timer(timeouts.xxxl)
    let state = null
    let statusField = false
    dropdowns = Array.isArray(dropdowns) ? dropdowns : [dropdowns]
    await this.root.waitForDisplayed()
    for (const dropdown of dropdowns) {
      do {
        if (!time.status()) {
          throw new Error(`Required time limit for ${dropdown.name} chosing is ended!`)
        }
        const root = await this.root.$(`[name="${dropdown.name}"]`)
        await root.waitForDisplayed()
        await root.scrollIntoView()
        await root.waitForClickable()
        await root.click()
        await root.selectByVisibleText(dropdown.option)
        state = await checkFieldValue(root)
        // state === dropdown.option ? (statusField = true) : null
        state ? (statusField = true) : null
      } while (!statusField)
    }
  }
}

export { Dropdown, Dropdowns, IDropdown }
