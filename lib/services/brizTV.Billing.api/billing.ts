/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { BrizTvBillingApi } from './brizTV.Billing.api'

class BillingBrizTv extends BrizTvBillingApi {
  constructor(configuration: BillingBrizTv) {
    super(configuration)
  }

  public async createUser(params, auth?): Promise<any> {
    const { body } = await this.ottAuthToken()
    return await this.request.post({
      path: `/billing/users`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: auth || `${body.data.token_type} ${body.data.access_token}`,
      },
    })
  }

  public async deleteUser(params): Promise<any> {
    const { body } = await this.ottAuthToken()
    return await this.request.del({
      path: `/billing/users`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `${body.data.token_type} ${body.data.access_token}`,
      },
    })
  }
}

decorateService(BillingBrizTv)

export { BillingBrizTv }
