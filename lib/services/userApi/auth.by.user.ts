/* eslint-disable no-return-await */
import { AuthByUserType } from 'lib/types'
import { decorateService } from 'utils'
import { Zero6API } from '../zero6/zero6.api'

class AuthByUser extends Zero6API {
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
