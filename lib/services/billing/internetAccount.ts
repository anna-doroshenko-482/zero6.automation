/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { BillingAPI } from './billing.api'

class InternetAccount extends BillingAPI {
  constructor(configuration: InternetAccount) {
    super(configuration)
  }

  public async getCreateInternetAccount(params, buser_id): Promise<any> {
    return await this.request.post({
      path: `/buser/${buser_id}/internets`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  public async getInternetAccountById(accountId): Promise<any> {
    return await this.request.get({
      path: `/binetaccount/${accountId}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  public async updateInternetAccount(params, buser_id: number, account_id: number): Promise<any> {
    return await this.request.put({
      path: `/buser/${buser_id}/internets/${account_id}`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /** [GET] getInternetAccountByBuser
   * https://dev-bil-api.briz.ua/docs/#getinternetaccountbybuser
   * @param buser_id - id пользователя в системе
   * @returns
   */
  public async getInternetAccountByBuser(buser_id: number): Promise<any> {
    return await this.request.get({
      path: `/buser/${buser_id}/internets`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /** [GET] getInternetAccountByBuserAccountId
   * https://dev-bil-api.briz.ua/docs/#getinternetaccountbybuseraccountid
   * @param buser_id - id пользователя в системе
   * @param internet_account_id- id аккаунта Internet
   * @returns
   */
  public async getInternetAccountByBuserAccountId(buser_id: number, internet_account_id: number): Promise<any> {
    return await this.request.get({
      path: `/buser/${buser_id}/internets/${internet_account_id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /** [GET] getSevenDaysList
   * https://dev-bil-api.briz.ua/docs/#internetaccount-GETbuser--buser_id--internets-7days-available
   * @param buser_id - id пользователя в системе
   * @returns массив с номерами интернет аккаунтов, которым доступна программа +7 дней
   */
  public async getSevenDaysList(buser_id: number): Promise<any> {
    return await this.request.get({
      path: `/buser/${buser_id}/internets/7days/available`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }
}

decorateService(InternetAccount)

export { InternetAccount }
