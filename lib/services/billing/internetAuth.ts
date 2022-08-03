/* eslint-disable no-return-await */
import { decorateService, methods } from 'utils'
import { BillingAPI } from './billing.api'

class InternetAuth extends BillingAPI {
  constructor(configuration: InternetAuth) {
    super(configuration)
  }

  /**
   * [POST] [validationAuthorization] Валидация данных авторизации.
   * @param params - body: объект, который содержит Login и Password
   * @returns
   */
  public async validationAuthorization(params): Promise<any> {
    return await this.request.post({
      path: `client_auth/internet`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }
}

decorateService(InternetAuth)

export { InternetAuth }
