/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { Zero6API } from './zero6.api'

class CustomerOrders extends Zero6API {
  constructor(configuration: CustomerOrders) {
    super(configuration)
  }

  /**
   * [POST] [createInternetOrder] Создать заказ на оплату Интернет услуги
   * @param buser_id - id пользователя в системе
   * @param params - тело ордера
   * @returns
   */
  public async createInternetOrder(buser_id: number, params): Promise<any> {
    return await this.request.post({
      path: `/customers/${buser_id}/orders/internet`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /**
   * [POST] [createIptvOrder] Создать заказ на оплату iptv услуги
   * @param buser_id - id пользователя в системе
   * @param params - тело ордера
   * @returns
   */
  public async createIptvOrder(buser_id: number, params): Promise<any> {
    return await this.request.post({
      path: `/customers/${buser_id}/orders/iptv`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /**
   * [POST] [createCtvOrder] Создать заказ на оплату ctv услуги
   * @param buser_id - id пользователя в системе
   * @param params - тело ордера
   * @returns
   */
  public async createCtvOrder(buser_id: number, params): Promise<any> {
    return await this.request.post({
      path: `/customers/${buser_id}/orders/ctv`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /**
   * [POST] [createUnionOrder] Создать заказ на оплату Union услуги
   * @param buser_id - id пользователя в системе
   * @param params - тело ордера
   * @returns
   */
  public async createUnionOrder(buser_id: number, params): Promise<any> {
    return await this.request.post({
      path: `/customers/${buser_id}/orders/union`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /**
   * [POST] [createOrder] Создать заказ на оплату нескольких услуг. Тело запроса аналогично методу calculateAll.
   * @param buser_id - id пользователя в системе
   * @param params - тело ордера
   * @returns
   */
  public async createOrder(buser_id: number, params): Promise<any> {
    return await this.request.post({
      path: `/customers/${buser_id}/orders`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }
}

decorateService(CustomerOrders)

export { CustomerOrders }
