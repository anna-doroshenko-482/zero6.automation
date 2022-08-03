/* eslint-disable no-return-await */
import { decorateService, methods } from 'utils'
import { BillingAPI } from './billing.api'

class GponOnu extends BillingAPI {
  constructor(configuration: GponOnu) {
    super(configuration)
  }

  /**
   * getGponList Получение списка GPON станций
   * ApiDoc: https://dev-bil-api.briz.ua/docs/#gpononu-GETgpon
   */
  public async getGponList(): Promise<any> {
    return this.request.get({
      path: `/gpon`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }
}

decorateService(GponOnu)

export { GponOnu }
