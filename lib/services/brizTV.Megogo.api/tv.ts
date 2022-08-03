/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { MegogoAPI } from './megogo.api'

class TV extends MegogoAPI {
  constructor(configuration: TV) {
    super(configuration)
  }

  /** [GET] TV | Channel by id
   * https://devmegogoapi.briz.tv/apidoc/#api-TV-GetApiTvChannel
   * https://devmegogoapi.briz.tv/api/tv/channel
   * @params channelId?: string, lang: string
   * @returns Promise
   */
  public async getChannelById(channelId?: string, lang = 'ua'): Promise<any> {
    return await this.request.get({
      path: `tv/channel`,
      headers: {
        Accept: 'application/json',
        Authorization: await this.megogoAuthToken(),
        'x-client-lang': lang,
      },
      queries: {
        channel_id: channelId,
      },
    })
  }

  /** [GET] TV | Channels
   * https://devmegogoapi.briz.tv/apidoc/#api-TV-GetApiTvChannels
   * https://devmegogoapi.briz.tv/api/tv/channels
   * @param token?: string
   * @returns Promise
   */
  public async getChannels(token?: string): Promise<any> {
    return await this.request.get({
      path: `tv/channels`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  }

  /** [GET] TV | Channels (popular)
   * https://devmegogoapi.briz.tv/apidoc/#api-TV-GetApiTvChannelsPopular
   * https://devmegogoapi.briz.tv/api/tv/channels-popular
   * @param token?: string
   * @returns Promise
   */
  public async getChannelsPopular(token?: string): Promise<any> {
    return await this.request.get({
      path: `tv/channels-popular`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  }

  /** [GET] TV | Channels grouped
   * https://devmegogoapi.briz.tv/apidoc/#api-TV-GetApiTvChannelsGrouped
   * https://devmegogoapi.briz.tv/api/tv/channels-grouped
   * @param token?: string
   * @returns Promise
   */
  public async getChannelsGrouped(token?: string): Promise<any> {
    return await this.request.get({
      path: `tv/channels-grouped`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  }

  /** [GET] TV | Genres
   * https://devmegogoapi.briz.tv/apidoc/#api-TV-GetApiTvGenres
   * https://devmegogoapi.briz.tv/api/tv/genres
   * @returns Promise
   */
  public async getGenres(): Promise<any> {
    return await this.request.get({
      path: `tv/genres`,
      headers: {
        Accept: 'application/json',
      },
    })
  }

  /** [GET] TV | Channels by genre
   * https://devmegogoapi.briz.tv/apidoc/#api-TV-GetApiTvGenreChannels
   * https://devmegogoapi.briz.tv/api/tv/genre-channels
   * @params genreId?: string | number, lang: string
   * @returns Promise
   */
  public async getChannelsByGenre(genreId?: string | number, lang = 'ua'): Promise<any> {
    return await this.request.get({
      path: `tv/genre-channels`,
      headers: {
        Accept: 'application/json',
        'x-client-lang': lang,
      },
      queries: {
        genre_id: genreId,
      },
    })
  }

  /** [GET] TV | EPG
   * https://devmegogoapi.briz.tv/apidoc/#api-TV-GetApiTvEpg
   * https://devmegogoapi.briz.tv/api/tv/epg
   * @params params: {
   *                  channel_id: number | string,
   *                  from: number | string,
   *                  to: number | string,
   *                  next: number | string
   *                 }
   * @returns Promise
   */
  public async getEPG(params?, lang = 'ua'): Promise<any> {
    return await this.request.get({
      path: `tv/epg`,
      headers: {
        Accept: 'application/json',
        Authorization: await this.megogoAuthToken(),
        'x-client-lang': lang,
      },
      queries: {
        ...params,
      },
    })
  }
}

decorateService(TV)

export { TV }
