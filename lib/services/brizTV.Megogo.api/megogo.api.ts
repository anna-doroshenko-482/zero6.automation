/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { API } from '../base.api'

class MegogoAPI extends API {
  constructor(configuration: MegogoAPI) {
    super(configuration)
  }

  public async megogoAuthToken(lang?: string, params?): Promise<any> {
    return await this.request.post({
      path: `auth/login`,
      headers: {
        Accept: 'application/json',
        'x-client-lang': lang || 'ua',
      },
      queries: {
        ...(params || this.bodyUserMegogo),
      },
    })
  }
}
decorateService(MegogoAPI)

export { MegogoAPI }
