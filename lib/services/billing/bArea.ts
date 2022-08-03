/* eslint-disable no-return-await */
import { decorateService, methods } from 'utils'
import { BillingAPI } from './billing.api'

class bArea extends BillingAPI {
  constructor(configuration: bArea) {
    super(configuration)
  }

  /**
   * [GET] [getAllBArea] Посмотреть список доступных районов.
   * ApiDoc: https://dev-bil-api.briz.ua/docs/#barea-GETbarea
   * @returns
   */
  public async getAllBArea(): Promise<any> {
    return await this.request.get({
      path: `/barea`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
        'X-Language': 'ru',
      },
    })
  }

  /**
   * [GET] [getBAreaByID] Посмотреть список доступных районов.
   * @param barea_id - id района
   * ApiDoc: https://dev-bil-api.briz.ua/docs/#barea-GETbarea
   * @returns
   */
  public async getBAreaByID(barea_id: number): Promise<any> {
    return await this.request.get({
      path: `/barea/${barea_id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
        'X-Language': 'ru',
      },
    })
  }
}

decorateService(bArea)

export { bArea }
