import { decorateService } from 'utils'
import { TwoClickRequest, fcSistemaRequest, platonRequest } from 'testData'
import { API } from '../base.api'

class PaymentGateway extends API {
  constructor(configuration: PaymentGateway) {
    super(configuration)
  }

  public monobank(args: { command; txn_id; txn_date; account; sum }): Promise<any> {
    return this.request.get({
      path: `v2/monobank_payment.php`,
      headers: {
        'Content-Type': 'application/xml',
        Accept: 'text/xml',
        'Response-Type': 'text',
      },
      queries: { ...args },
    })
  }

  public iBox(args: { command; txn_id; txn_date; account; sum }): Promise<any> {
    return this.request.get({
      path: `v2/ibox_payment.php`,
      headers: {
        'Content-Type': 'application/xml',
        Accept: 'text/xml',
        'Response-Type': 'text',
      },
      queries: { ...args },
    })
  }

  public twoClick(req: TwoClickRequest): Promise<any> {
    return this.request.get({
      path: `v2/2click.php`,
      headers: {
        'Content-Type': 'application/xml',
        Accept: 'text/xml',
        'Response-Type': 'text',
      },
      queries: req.toDto(),
    })
  }

  public fcSistema(req: fcSistemaRequest): Promise<any> {
    return this.request.get({
      path: `v2/fk_systema.php`,
      headers: {
        'Content-Type': 'application/xml',
        Accept: 'text/xml',
        'Response-Type': 'text',
      },
      queries: req.toDto(),
    })
  }

  public cityPay(args: { Account; QueryType; TransactionId; Amount? }): Promise<any> {
    return this.request.get({
      path: `v2/CityPay.php`,
      headers: {
        'Content-Type': 'application/xml',
        Accept: 'text/xml',
        'Response-Type': 'text',
      },
      queries: { ...args },
    })
  }

  public privatBank(docs): Promise<any> {
    return this.request.post({
      path: `v2/privatbank_payment.php`,
      body: docs,
      headers: {
        'Content-Type': 'application/xml',
        Accept: 'text/xml',
        'Response-Type': 'text',
      },
    })
  }

  public iPay(invoiceXMLData): Promise<any> {
    return this.request.post({
      path: `v2/ipay.php`,
      body: invoiceXMLData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'text/xml',
        'Response-Type': 'text',
      },
    })
  }

  public easySoft(docs): Promise<any> {
    return this.request.post({
      path: `v2/easysoft.php`,
      body: docs,
      headers: {
        'Content-Type': 'application/xml',
        Accept: 'text/xml',
        'Response-Type': 'text',
      },
    })
  }

  public portmone(request): Promise<any> {
    return this.request.post({
      path: `v2/portmone_payment.php`,
      body: request,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'text/xml',
        'Response-Type': 'text',
      },
    })
  }

  public platon(req: platonRequest): Promise<any> {
    return this.request.get({
      path: `v2/platon_payment.php`,
      headers: {
        'Content-Type': 'application/xml',
        Accept: 'text/xml',
        'Response-Type': 'text',
      },
      queries: req.toDto(),
    })
  }
}

decorateService(PaymentGateway)

export { PaymentGateway }
