import { ChainablePromiseElement } from 'node_modules/webdriverio/build/types'

enum TabNames {
  adminka = 'Админка',
  billing = 'Биллинг',
  home = 'Домашняя',
  subscriber = 'Абоненты',
  addNewSubscriber = 'Добавить нового',
  systemMagazine = 'Системный журнал',
  admin = 'Админка',
  cableModels = 'Кабельные модемы',
  addEquipment = 'Доп. Оборудование',
  suppliers = 'Поставщики',
  logistic = 'Логистика',
  approvals = 'Утверждение счетов',
  orders = 'Утверждение счетов',
  scratchCards = 'Карточки пополнения',
  scratchCardInfo = 'Информация по карте',
  ScratchCardsListAdd = 'Список/добавить',
}

class TabMenu {
  private root: ChainablePromiseElement<Promise<WebdriverIO.Element>>
  menu: ChainablePromiseElement<Promise<WebdriverIO.Element>>

  constructor(root = $('body')) {
    this.root = root
    this.menu = $('div>div[data-cy="side-menu"]')
  }

  public async clickOn(tabName: TabNames): Promise<void> {
    await this.openTab(tabName)
  }

  public async openTab(tabName: TabNames): Promise<void> {
    await this.root.waitForDisplayed()
    const tab = await $(`[class="menuLayout"]`).$(`*=${tabName}`)
    await tab.waitForDisplayed({ timeoutMsg: `"${tabName}" tab is not found on the page` })
    await tab.click()
  }
}

export { TabMenu, TabNames }
