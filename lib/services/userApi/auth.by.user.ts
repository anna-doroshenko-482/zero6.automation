/* eslint-disable no-return-await */
import { AuthByUserType } from 'lib/types'
import { decorateService } from 'utils'
import { BillingAPI } from '../billing/billing.api'

class AuthByUser extends BillingAPI {
  constructor(configuration: AuthByUser) {
    super(configuration)
  }

  public async execAuth(args?: AuthByUserType): Promise<any> {
    return await this.request.post({
      path: `api/auth`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      queries: {
        ...(args || this.users.default),
      },
    })
  }
}

decorateService(AuthByUser)

export { AuthByUser }
