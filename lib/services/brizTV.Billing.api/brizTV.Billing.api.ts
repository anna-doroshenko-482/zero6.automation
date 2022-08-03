/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { API } from '../base.api'
class BrizTvBillingApi extends API {
  constructor(configuration: BrizTvBillingApi) {
    super(configuration)
  }

  public async ottAuthToken(params?): Promise<any> {
    return await this.request.post({
      path: `/api/login`,
      body: params || this.users.default,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
  }
}

decorateService(BrizTvBillingApi)

export { BrizTvBillingApi }
