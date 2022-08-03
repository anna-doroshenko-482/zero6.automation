/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { BillingAPI } from './billing.api'

class User extends BillingAPI {
  constructor(configuration: User) {
    super(configuration)
  }

  /**
   * [GET] [getUser] Получение информации о операторе.
   * https://dev-bil-api.briz.ua/docs/#user-GETuser
   * @returns
   */
  public async getUser(): Promise<any> {
    return await this.request.get({
      path: `/user`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /**
   * [GET] [getUserXToken] Получение информации о операторе по его X-токену.
   * https://dev-bil-api.briz.ua/docs/#user-GETuser-get-auth-user
   * @returns
   */
  public async getUserXToken(): Promise<any> {
    return await this.request.get({
      path: `/user/get-auth-user`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /**
   * [GET] [getUserEmail] Получение информации о операторе по его email адресу.
   * https://dev-bil-api.briz.ua/docs/#user-GETuser--email-
   * @returns
   */
  public async getUserEmail(email: string): Promise<any> {
    return await this.request.get({
      path: `/user/${email}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /**
   * [POST] [tokenGenerate] Генерация токена.
   * https://dev-bil-api.briz.ua/docs/#user-POSTuser-generate-token
   * @returns
   */
  public async tokenGenerate(body: { AllowedDomains: string }): Promise<any> {
    return await this.request.post({
      path: `/user/generate-token`,
      body: body,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }
}

decorateService(User)

export { User }
