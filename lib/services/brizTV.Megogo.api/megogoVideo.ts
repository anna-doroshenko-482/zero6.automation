/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { MegogoAPI } from './megogo.api'

class MegogoVideo extends MegogoAPI {
  constructor(configuration: MegogoVideo) {
    super(configuration)
  }

  public async getApiMggVideoInfo(params: { id: number }): Promise<any> {
    return await this.request.get({
      path: `mgg/video/info`,
      headers: {
        Accept: 'application/json',
      },
      queries: {
        ...params,
      },
    })
  }
  /** [GET] Megogo Video - Video episodes
   * https://devmegogoapi.briz.tv/apidoc/#api-Megogo_Video-GetApiMggVideoEpisodes
   * https://devmegogoapi.briz.tv/api/mgg/video/episodes
   * @param params
   * @returns
   */
  public async getApiMggVideoEpisodes(params: { id: string }, did?: string): Promise<any> {
    return await this.request.get({
      path: `mgg/video/episodes`,
      headers: {
        Accept: 'application/json',
      },
      queries: {
        ...params,
      },
    })
  }
  /** [GET] Megogo Video - Video meta
   * https://devmegogoapi.briz.tv/apidoc/#api-Megogo_Video-GetApiMggVideoMeta
   * https://devmegogoapi.briz.tv/api/mgg/video/meta
   * @param params: string[]
   * @returns Promise
   */
  public async getApiMggVideoMeta(params: { ids: string[] }): Promise<any> {
    return await this.request.get({
      path: `mgg/video/meta`,
      headers: {
        Accept: 'application/json',
      },
      queries: {
        ids: `${params.ids.join(',')}`,
      },
    })
  }

  /** [Get] Megogo Video - Recommended
   * https://devmegogoapi.briz.tv/apidoc/#api-Megogo_Video-GetApiMggVideoRecommended
   * https://devmegogoapi.briz.tv/api/mgg/video/recommended
   * @param params
   * @param lang?: string
   */
  public async getApiMggVideoRecommended(params?, lang?: string): Promise<any> {
    return await this.request.get({
      path: `mgg/video/recommended`,
      headers: {
        Accept: 'application/json',
        'x-client-lang': lang || 'ua',
      },
      queries: {
        ...params,
      },
    })
  }

  /** [Get] Megogo Video by category
   * https://devmegogoapi.briz.tv/apidoc/#api-Megogo_Video-GetApiMggVideo
   *  https://devmegogoapi.briz.tv/api/mgg/video
   * @param category_id: number
   * @param lang?: string
   */
  public async getApiMggVideoByCategory(category_id: number, lang?: string): Promise<any> {
    return await this.request.get({
      path: `mgg/video`,
      headers: {
        Accept: 'application/json',
        'x-client-lang': lang || 'ua',
      },
      queries: {
        category_id: category_id,
      },
    })
  }
}

decorateService(MegogoVideo)

export { MegogoVideo }
