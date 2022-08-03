/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { MegogoAPI } from './megogo.api'

class AuthPassword extends MegogoAPI {
  constructor(configuration: AuthPassword) {
    super(configuration)
  }
  /** [POST] Auth - Auth Password (Save new password)
   * https://devmegogoapi.briz.tv/apidoc/#api-Auth_Password-PostApiAuthPassword
   * https://devmegogoapi.briz.tv/api/auth/password
   * @param params - Object: password: string, password_confirmation:string,code:string
   * @returns - Object
   */
  public async AuthPassword(params, lang?: string): Promise<any> {
    return await this.request.post({
      path: `auth/password`,
      headers: {
        Accept: 'application/json',
        'x-client-lang': lang || 'ua',
      },
      queries: {
        ...params,
      },
    })
  }
}

decorateService(AuthPassword)

export { AuthPassword }
