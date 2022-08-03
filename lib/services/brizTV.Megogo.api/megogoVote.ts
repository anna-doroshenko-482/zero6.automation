/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { MegogoAPI } from './megogo.api'

class MegogoVote extends MegogoAPI {
  constructor(configuration: MegogoVote) {
    super(configuration)
  }

  /** [POST] Megogo Vote | Vote
   * https://devmegogoapi.briz.tv/apidoc/#api-Megogo_Vote-PostApiMggVote
   * https://devmegogoapi.briz.tv/api/mgg/vote
   * params video_id: number, like?: number | string
   * @returns Promise
   */
  public async postVote(params): Promise<any> {
    const token = await this.megogoAuthToken()
    return await this.request.post({
      path: `mgg/vote`,
      headers: {
        Accept: 'application/json',
        Authorization: `${token.body.data.token_type} ${token.body.data.access_token}`,
      },
      queries: {
        ...params,
      },
    })
  }
}

decorateService(MegogoVote)

export { MegogoVote }
