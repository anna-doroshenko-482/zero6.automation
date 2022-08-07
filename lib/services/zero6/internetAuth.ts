/* eslint-disable no-return-await */
import { decorateService, methods } from 'utils'
import { Zero6API } from './zero6.api'

class InternetAuth extends Zero6API {
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
