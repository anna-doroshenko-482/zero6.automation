/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { MegogoAPI } from './megogo.api'

class MegogoPeople extends MegogoAPI {
  constructor(configuration: MegogoPeople) {
    super(configuration)
  }

  /** [Get] Megogo People - People
   * https://devmegogoapi.briz.tv/apidoc/#api-Megogo_People-GetApiMggPeople
   * https://devmegogoapi.briz.tv/api/mgg/people
   * @param params
   * @param lang?: string
   */
  public async People(params, lang?: string): Promise<any> {
    return await this.request.get({
      path: `/mgg/people`,
      headers: {
        Accept: 'application/json',
        'x-client-lang': lang || 'ua',
      },
      queries: {
        ...params,
      },
    })
  }
}

decorateService(MegogoPeople)

export { MegogoPeople }
