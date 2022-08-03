/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { MegogoAPI } from './megogo.api'

class Stream extends MegogoAPI {
  constructor(configuration: Stream) {
    super(configuration)
  }

  /** [GET] Stream | TV Stream
   * https://devmegogoapi.briz.tv/apidoc/#api-Stream-GetApiTvStream
   * https://devmegogoapi.briz.tv/api/tv/stream
   * @params channelId?: number | string, lang: string
   * @returns Promise
   */
  public async getTVStream(channelId?: number | string, lang = 'ua'): Promise<any> {
    return await this.request.get({
      path: `tv/stream`,
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

  /** [GET] Stream | TV Stream catchup
   * https://devmegogoapi.briz.tv/apidoc/#api-Stream-GetApiTvStreamCatchup
   * https://devmegogoapi.briz.tv/api/tv/stream-catchup
   * @params params?, lang = 'ua'
   * @returns Promise
   */
  public async getTVStreamCatchup(params?, lang = 'ua'): Promise<any> {
    return await this.request.get({
      path: `tv/stream-catchup`,
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

decorateService(Stream)

export { Stream }
