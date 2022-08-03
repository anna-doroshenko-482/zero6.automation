/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { API } from '../base.api'

class BillingUI extends API {
  constructor(configuration: BillingUI) {
    super(configuration)
  }

  public async getTopUpAccount(params: { buser_id: number; amount: number }): Promise<any> {
    return await this.request.get({
      path: `Ru/interface.html?type=user&act=addMoney&id=${params.buser_id}&account_type=&amount=${params.amount}&comment=test_payment`,
      body: this.bodyUser,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}

decorateService(BillingUI)

export { BillingUI }
