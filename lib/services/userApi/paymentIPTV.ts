/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { AuthByUser } from '.'

class PaymentsIPTV extends AuthByUser {
  constructor(configuration: PaymentsIPTV) {
    super(configuration)
  }

  public async getPaymentSettingsIPTV(account_id: string): Promise<any> {
    const { body } = await this.execAuth(this.users.maxLS)
    return await this.request.get({
      path: `api/user/iptv/${account_id}/init`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${body.access_token}`,
      },
    })
  }

  public async iptvCalculate(account_id): Promise<any> {
    const { body } = await this.execAuth(this.users.maxLS)
    return await this.request.post({
      path: `api/user/iptv/${account_id}/calculate`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${body.access_token}`,
      },
    })
  }

  public async iptvPay(account_id: string): Promise<any> {
    const { body } = await this.execAuth(this.users.maxLS)
    return await this.request.post({
      path: `api/user/iptv/${account_id}/pay`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${body.access_token}`,
      },
    })
  }
}

decorateService(PaymentsIPTV)

export { PaymentsIPTV }
