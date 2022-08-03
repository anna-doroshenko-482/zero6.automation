/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { BillingAPI } from './billing.api'

class InternetOrder extends BillingAPI {
  constructor(configuration: InternetOrder) {
    super(configuration)
  }

  /** [POST] create
   * https://dev-bil-api.briz.ua/docs/#internetorder-POSTinternet-orders-create
   * @param params - тело запроса создания интернет-заявки
   * @returns
   */
  public async create(params): Promise<any> {
    return await this.request.post({
      path: `/internet/orders/create`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }
}

decorateService(InternetOrder)

export { InternetOrder }
