/* eslint-disable no-return-await */
import { decorateService, methods } from 'utils'
import { BillingAPI } from './billing.api'

class AddrMap extends BillingAPI {
  constructor(configuration: AddrMap) {
    super(configuration)
  }

  public async addrMap(): Promise<any> {
    return await this.request.get({
      path: `/addrmap`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
        'X-Language': 'ru',
      },
    })
  }
}

decorateService(AddrMap)

export { AddrMap }
