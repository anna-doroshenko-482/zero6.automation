/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { MegogoAPI } from './megogo.api'

class Test extends MegogoAPI {
  constructor(configuration: Test) {
    super(configuration)
  }

  /** [POST] Test | Get test ccode
   * https://devmegogoapi.briz.tv/apidoc/#api-Test-PostApiAuthTestCcode
   * https://devmegogoapi.briz.tv/api/auth/test/ccode
   * params login?: string | number, lang = 'ua'
   * @returns Promise
   */
  public async postGetTestCode(login?: string | number, lang = 'ua'): Promise<any> {
    return await this.request.post({
      path: `auth/test/ccode`,
      headers: {
        Accept: 'application/json',
        'x-client-lang': lang,
      },
      queries: {
        login: login,
      },
    })
  }
}

decorateService(Test)

export { Test }
