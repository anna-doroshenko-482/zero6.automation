/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { MegogoAPI } from './megogo.api'

class Billing extends MegogoAPI {
  constructor(configuration: Billing) {
    super(configuration)
  }

  /** [GET] Billing | Parameters
   * https://devmegogoapi.briz.tv/apidoc/#api-Billing-GetApiParameters
   * https://devmegogoapi.briz.tv/api/parameters
   * @returns Promise
   */
  public async getParameters(lang = 'ua'): Promise<any> {
    return await this.request.get({
      path: `parameters`,
      headers: {
        Accept: 'application/json',
        'x-client-lang': lang,
      },
    })
  }

  /** [GET] Billing | Products (+TV genres)
   * https://devmegogoapi.briz.tv/apidoc/#api-Billing-GetApiProductsChannelsGrouped
   * https://devmegogoapi.briz.tv/api/products/channels-grouped
   * @returns Promise
   */
  public async getProductsTVgenres(): Promise<any> {
    return await this.request.get({
      path: `products/channels-grouped`,
      headers: {
        Accept: 'application/json',
        Authorization: await this.megogoAuthToken(),
      },
    })
  }

  /** [GET] Billing | Products
   * https://devmegogoapi.briz.tv/apidoc/#api-Billing-GetApiProducts
   * https://devmegogoapi.briz.tv/api/products
   * @returns Promise
   */
  public async getProducts(): Promise<any> {
    return await this.request.get({
      path: `products`,
      headers: {
        Accept: 'application/json',
        Authorization: await this.megogoAuthToken(),
      },
    })
  }

  /** [GET] Billing | User cards
   * https://devmegogoapi.briz.tv/apidoc/#api-Billing-GetApiCards
   * https://devmegogoapi.briz.tv/api/cards
   * @returns Promise
   */
  public async getUserCards(token?: string): Promise<any> {
    return await this.request.get({
      path: `cards`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  }

  /** [GET] Billing | User transactions
   * https://devmegogoapi.briz.tv/apidoc/#api-Billing-GetApiTransactions
   * https://devmegogoapi.briz.tv/api/transactions
   * @params token?: string, params?: { limit: number | string; offset: number | string }, lang = 'ua'
   * @returns Promise
   */
  public async getUserTransactions(
    token?: string,
    params?: { limit: number | string; offset: number | string },
    lang = 'ua',
  ): Promise<any> {
    return await this.request.get({
      path: `transactions`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'x-client-lang': lang,
      },
      queries: {
        ...params,
      },
    })
  }
}

decorateService(Billing)

export { Billing }
