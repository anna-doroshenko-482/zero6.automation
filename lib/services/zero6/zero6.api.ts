/* eslint-disable no-return-await */
import { decorateService, methods } from 'utils'
import { API } from '../base.api'

class Zero6API extends API {
  constructor(configuration: Zero6API) {
    super(configuration)
  }

  public authToken(): Promise<any> {
    return this.request.post({
      path: `/api/authenticate`,
      body: this.bodyUser,
    })
  }
}

decorateService(Zero6API)

export { Zero6API }
