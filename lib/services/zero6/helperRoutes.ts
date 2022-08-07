/* eslint-disable no-return-await */
// import { parametersData } from 'testData'
import { decorateService } from 'utils'
import { Zero6API } from './zero6.api'

class HelperRoutes extends Zero6API {
  constructor(configuration: HelperRoutes) {
    super(configuration)
  }

  public async cancelCard(id: number): Promise<any> {
    return await this.request.post({
      path: `/cards/${id}/reset`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  //Пополнение баланса пользователя (деньгами или бонусами)
  // {
  //     "bonus": 76
  // }
  //        или
  // {
  //     "amount": 76
  // }
  public async addMoney(buser_id: number, params): Promise<any> {
    return await this.request.post({
      path: `/buser/${buser_id}/money/direct`,
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }
}

decorateService(HelperRoutes)

export { HelperRoutes }
