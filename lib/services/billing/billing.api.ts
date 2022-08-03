/* eslint-disable no-return-await */
import { decorateService, methods } from 'utils'
import { API } from '../base.api'

class BillingAPI extends API {
  constructor(configuration: BillingAPI) {
    super(configuration)
  }

  public authToken(): Promise<any> {
    return this.request.post({
      path: `/api/authenticate`,
      body: this.bodyUser,
    })
  }
}

decorateService(BillingAPI)

export { BillingAPI }
