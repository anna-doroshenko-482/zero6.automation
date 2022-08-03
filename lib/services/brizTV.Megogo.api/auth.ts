/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { MegogoAPI } from './megogo.api'

class AuthMegogo extends MegogoAPI {
  constructor(configuration: AuthMegogo) {
    super(configuration)
  }

  public async userRegistration(params, lang?: string): Promise<any> {
    return await this.request.post({
      path: `auth/register`,
      headers: {
        Accept: 'application/json',
        'x-client-lang': lang || 'ua',
      },
      queries: {
        ...params,
      },
    })
  }
  /** [POST] Auth - Check login(uniqueness)
   * https://devmegogoapi.briz.tv/apidoc/#api-Auth-PostApiAuthLoginCheck
   * https://devmegogoapi.briz.tv/api/auth/login-check
   * @param params
   * @returns
   */
  public async authLoginCheck(params, lang?: string): Promise<any> {
    return await this.request.post({
      path: `auth/login-check`,
      headers: {
        Accept: 'application/json',
        Authorization: await this.megogoAuthToken(),
        'x-client-lang': lang || 'ua',
      },
      queries: {
        ...params,
      },
    })
  }

  public async logoutMegogo(bearer?, lang?: string): Promise<any> {
    return await this.request.get({
      path: `auth/logout`,
      headers: {
        Accept: 'application/json',
        Authorization: bearer,
        'x-client-lang': lang || 'ua',
      },
    })
  }
  /** [POST] Auth - Refresh token
   * https://devmegogoapi.briz.tv/apidoc/#api-Auth-PostApiAuthRefreshToken
   * https://devmegogoapi.briz.tv/api/auth/refresh-token
   * platform - apple,smart_tv,web, embedded
   * @param params
   * @returns
   */
  public async refreshTokenMegogo(token?, lang?: string): Promise<any> {
    return await this.request.post({
      path: `auth/refresh-token`,
      headers: {
        Accept: 'application/json',
        'x-client-lang': lang || 'ua',
      },
      queries: {
        refresh_token: token,
      },
    })
  }

  /** [POST] Auth - Send password reset code
   * https://devmegogoapi.briz.tv/apidoc/#api-Auth_Password-PostApiAuthPasswordResend
   * https://devmegogoapi.briz.tv/api/auth/password-resend
   * @param params
   * @returns
   */
  public async sendResetCode(params?: { login: string }, lang?: string): Promise<any> {
    return await this.request.post({
      path: `auth/password-resend`,
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

decorateService(AuthMegogo)

export { AuthMegogo }
