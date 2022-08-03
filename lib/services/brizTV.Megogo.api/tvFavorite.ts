/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { MegogoAPI } from './megogo.api'

class TvFavorite extends MegogoAPI {
  constructor(configuration: TvFavorite) {
    super(configuration)
  }

  /** [GET] TV Favorite | Favorite TVs
   * https://devmegogoapi.briz.tv/apidoc/#api-TV_Favorite-GetApiTvFavorites
   * https://devmegogoapi.briz.tv/api/tv/favorites
   * @param token?: string
   * @returns Promise
   */
  public async getFavoriteTVs(token?: string): Promise<any> {
    return await this.request.get({
      path: `tv/favorites`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  }

  /** [POST] TV Favorite | Favorite TV add
   * https://devmegogoapi.briz.tv/apidoc/#api-TV_Favorite-PostApiTvFavorites
   * https://devmegogoapi.briz.tv/api/tv/favorites
   * @params token: string, id: number
   * @returns Promise
   */
  public async postFavoriteTVadd(token: string, id?: number | string, lang = 'ua'): Promise<any> {
    return await this.request.post({
      path: `tv/favorites`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'x-client-lang': lang,
      },
      queries: {
        channel_id: id,
      },
    })
  }

  /** [DELETE] TV Favorite | Favorite TV delete
   * https://devmegogoapi.briz.tv/apidoc/#api-TV_Favorite-DeleteApiTvFavorites
   * https://devmegogoapi.briz.tv/api/tv/favorites
   * @params token: string, id: number
   * @returns Promise
   */
  public async delFavoriteTVdelete(token: string, id?: number | string, lang = 'ua'): Promise<any> {
    return await this.request.del({
      path: `tv/favorites`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'x-client-lang': lang,
      },
      queries: {
        channel_id: id,
      },
    })
  }
}

decorateService(TvFavorite)

export { TvFavorite }
