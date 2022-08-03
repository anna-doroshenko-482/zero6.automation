/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { MegogoAPI } from './megogo.api'

class MegogoFavorite extends MegogoAPI {
  constructor(configuration: MegogoFavorite) {
    super(configuration)
  }

  /** [GET] Megogo Favorite | Favorite videos
   * https://devmegogoapi.briz.tv/apidoc/#api-Megogo_Favorite-GetApiMggFavorites
   * https://devmegogoapi.briz.tv/api/mgg/favorites
   * @param token?: string, params?: any
   * @returns Promise
   */
  public async getFavoriteVideos(token?: string, params?: any): Promise<any> {
    return await this.request.get({
      path: `mgg/favorites`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      queries: {
        ...params,
      },
    })
  }

  /** [DELETE] Megogo Favorite | Favorite video delete
   * https://devmegogoapi.briz.tv/apidoc/#api-Megogo_Favorite-DeleteApiMggFavorites
   *  https://devmegogoapi.briz.tv/api/mgg/favorites
   * @params token: string, id: number
   * @returns Promise
   */
  public async delFavoriteVideoDelete(token?: string, video_id?: number | string, lang = 'ua'): Promise<any> {
    return await this.request.del({
      path: `mgg/favorites`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'x-client-lang': lang,
      },
      queries: {
        video_id: video_id,
      },
    })
  }

  /** [POST] Favorite video add
   * https://devmegogoapi.briz.tv/apidoc/#api-Megogo_Favorite-PostApiMggFavorites
   * https://devmegogoapi.briz.tv/api/mgg/favorites
   * @params token: string, video_id: number
   * @returns Promise
   */
  public async postFavoriteVideosAdd(token: string, video_id?: number | string, lang?: string): Promise<any> {
    return await this.request.post({
      path: `mgg/favorites`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'x-client-lang': lang,
      },
      queries: {
        video_id: video_id,
      },
    })
  }

  /** [GET] Megogo Favorite | Favorite filter
   * https://devmegogoapi.briz.tv/apidoc/#api-Megogo_Favorite-GetApiMggFavoritesFilter
   *  https://devmegogoapi.briz.tv/api/mgg/favorites/filter
   * @param token?: string,  video_ids?: number, params?: any
   * @returns Promise
   */
  public async getFavoriteVideosFilter(token?: string, video_ids?: number): Promise<any> {
    return await this.request.get({
      path: `mgg/favorites/filter`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      queries: {
        video_ids: video_ids,
      },
    })
  }
}
decorateService(MegogoFavorite)

export { MegogoFavorite }
