/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { MegogoAPI } from './megogo.api'

class MegogoSearch extends MegogoAPI {
  constructor(configuration: MegogoSearch) {
    super(configuration)
  }

  /** [Get] Megogo Search - Search
   * https://devmegogoapi.briz.tv/apidoc/#api-Megogo_Search-GetApiMggSearch
   *  https://devmegogoapi.briz.tv/api/mgg/search
   * @param params: text: string, category_id: number, offset: number, limit: number
   * @returns - Promise
   */
  public async getSearch(lang?: string, params?: any): Promise<any> {
    return await this.request.get({
      path: `/mgg/search`,
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

decorateService(MegogoSearch)

export { MegogoSearch }
