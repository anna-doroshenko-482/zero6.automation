/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { Zero6API } from './zero6.api'

class Street extends Zero6API {
  constructor(configuration: Street) {
    super(configuration)
  }

  /** [GET] getAllStreets
   * https://dev-bil-api.briz.ua/docs/#getallstreets
   * @returns
   */
  public async getAllStreets(): Promise<any> {
    return await this.request.get({
      path: `/street`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /** [GET] searchStreet
   * https://dev-bil-api.briz.ua/docs/#searchstreet
   * @param name - Название улицы
   * @returns
   */
  public async searchStreet(args: { name }): Promise<any> {
    return await this.request.get({
      path: `/street/search`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
        'X-Language': 'ru',
      },
      queries: { ...args },
    })
  }

  /** [GET] getStreetById
   * https://dev-bil-api.briz.ua/docs/#getstreetbyid
   * @param id - id улицы
   * @returns
   */
  public async getStreetByIds(street_id: number): Promise<any> {
    return await this.request.get({
      path: `/street/${street_id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
        'X-Language': 'ru',
      },
    })
  }
}

decorateService(Street)

export { Street }
