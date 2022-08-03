/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { MegogoAPI } from './megogo.api'

class Customer extends MegogoAPI {
  constructor(configuration: Customer) {
    super(configuration)
  }
  /**[GET] [Customer] Get profile
   * https://devmegogoapi.briz.tv/apidoc/#api-Customer-GetApiMe
   *  https://devmegogoapi.briz.tv/api/me
   * @param token?: string
   * @returns - Promise
   */
  public async getProfile(token?: string): Promise<any> {
    return await this.request.get({
      path: `me`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  }
  /**[PATCH] [Customer] Update profile
   * https://devmegogoapi.briz.tv/apidoc/#api-Customer-PatchApiMe
   *  https://devmegogoapi.briz.tv/api/me
   * @param token?: string
   * @returns - Promise
   */
  public async patchUpdateProfile(lang?: string, token?: string, params?): Promise<any> {
    return await this.request.patch({
      path: `me`,
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
decorateService(Customer)

export { Customer }
