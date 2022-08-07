/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { Zero6API } from './zero6.api'

class iptvAccount extends Zero6API {
  constructor(configuration: iptvAccount) {
    super(configuration)
  }

  public async createIPTVAccount(params, buser_id): Promise<any> {
    return await this.request.post({
      path: `/buser/${buser_id}/iptvs`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /** [PUT] putUpdate
   * https://dev-bil-api.briz.ua/docs/#putupdate
   * @param buser_id - id пользователя в системе
   * @param iptv_account_id- id аккаунта IPTV
   * @param params - body: параметры для обновления IPTV аккаунта
   * @returns
   */
  public async putUpdate(params, buser_id: number, iptv_account_id: number): Promise<any> {
    return await this.request.put({
      path: `/buser/${buser_id}/iptvs/${iptv_account_id}`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /** [GET] getByBuserAccountId
   * https://dev-bil-api.briz.ua/docs/#putupdate
   * @param buser_id - id пользователя в системе
   * @param iptv_account_id- id аккаунта IPTV
   * @returns
   */
  public async getByBuserAccountId(buser_id: number, iptv_account_id: number): Promise<any> {
    return await this.request.get({
      path: `/buser/${buser_id}/iptvs/${iptv_account_id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /** [GET] getByBuser
   * https://dev-bil-api.briz.ua/docs/#getbybuser
   * @param buser_id - id пользователя в системе
   * @returns
   */
  public async getByBuser(buser_id: number): Promise<any> {
    return await this.request.get({
      path: `buser/${buser_id}/iptvs`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
        'X-Language': 'ua',
      },
    })
  }

  /** [POST] postConnectOTT
   * https://dev-bil-api.briz.ua/docs/#iptvaccount-POSTbuser--buser_id--iptvs-ott
   * @param buser_id - id пользователя в системе
   * @param params - тело запроса с параметрами: iptvAccountID, email, phone, password
   * @returns
   */
  public async postConnectOTT(buser_id: number, params): Promise<any> {
    return await this.request.post({
      path: `buser/${buser_id}/iptvs/ott`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
        'X-Language': 'ua',
      },
    })
  }

  /** [DELETE] DeleteOTT
   * https://dev-bil-api.briz.ua/docs/#iptvaccount-DELETEiptv--iptv_account_id--deleteOtt
   * @param iptv_account_id - id аккаунта ИПТВ
   * @returns
   */
  public async DeleteOTT(iptv_account_id: any): Promise<any> {
    return await this.request.del({
      path: `iptv/${iptv_account_id}/deleteOtt`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
        'X-Language': 'ua',
      },
    })
  }
}

decorateService(iptvAccount)

export { iptvAccount }
