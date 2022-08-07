/* eslint-disable no-return-await */
import { decorateService, methods } from 'utils'
import { Zero6API } from './zero6.api'

class EquipEx extends Zero6API {
  constructor(configuration: EquipEx) {
    super(configuration)
  }

  /**
   * getReservedToUser Зарезервированное оборудование за оператором (монтёром).
   */
  public async getReservedToUser(): Promise<any> {
    return this.request.get({
      path: `/equipex/reservedToUser`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }
}

decorateService(EquipEx)

export { EquipEx }
