/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { BillingAPI } from './billing.api'

class CtvAccount extends BillingAPI {
  constructor(configuration: CtvAccount) {
    super(configuration)
  }

  public async disconnectCTVAccount(params, buser_id: number, ctv_account_id: number): Promise<any> {
    return await this.request.post({
      path: `/buser/${buser_id}/ctvs/${ctv_account_id}/disconnect`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /**
   * [GET] [restoreCTVAccount] Восстановление аккаунта CTV по account_id.
   * @param buser_id - id пользователя в системе
   * @param ctv_account_id - id CTV аккаунт в системе
   * @returns
   */
  public async restoreCTVAccount(params, buser_id: number, ctv_account_id: number): Promise<any> {
    return await this.request.post({
      path: `/buser/${buser_id}/ctvs/${ctv_account_id}/restore`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /**
   * [GET] [bUserCtvAcc] получение аккаунтов КТВ
   * @param buser_id - id пользователя в системе
   * @returns
   */
  public async bUserCtvAcc(buser_id): Promise<any> {
    return await this.request.get({
      path: `/buser/${buser_id}/ctvs`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /**
   * [GET] [getAccountByID] получение аккаунтa КТВ по ctv_account_id
   * @param ctv_account_id - id аккаунта КТВ
   * @returns
   */
  public async getAccountByID(ctv_account_id): Promise<any> {
    return await this.request.get({
      path: `/ctv/accounts/${ctv_account_id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
        'X-Language': 'ua',
      },
    })
  }

  /**
   * [GET] [getAllCTVAccount] Получение аккаунтов CTV с пагинацией.
   * https://dev-bil-api.briz.ua/docs/#ctvaccount-GETctv-accounts
   * @returns
   */
  public async getAllCTVAccount(args?: { count?; simple? }): Promise<any> {
    return await this.request.get({
      path: `/ctv/accounts`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
      queries: { ...args },
    })
  }
}

decorateService(CtvAccount)

export { CtvAccount }
