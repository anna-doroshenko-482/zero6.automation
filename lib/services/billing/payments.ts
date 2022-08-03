/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { BillingAPI } from './billing.api'

class PaymentsBilling extends BillingAPI {
  constructor(configuration: PaymentsBilling) {
    super(configuration)
  }

  /**
   * [GET] [getPaymentsCardForOperator] Получение информации по карте монтёров.
   * https://dev-bil-api.briz.ua/docs/#payments-GETpayments-card
   * @returns Card - номер карточки монтёра
   */
  public async getPaymentsCardForOperator(args: { Card }): Promise<any> {
    return await this.request.get({
      path: `/payments/card`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
      queries: { ...args },
    })
  }
}

decorateService(PaymentsBilling)

export { PaymentsBilling }
