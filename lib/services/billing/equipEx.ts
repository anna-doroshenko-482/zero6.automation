/* eslint-disable no-return-await */
import { decorateService, methods } from 'utils'
import { BillingAPI } from './billing.api'

class EquipEx extends BillingAPI {
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
