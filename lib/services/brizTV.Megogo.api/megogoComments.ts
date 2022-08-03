/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { MegogoAPI } from './megogo.api'

class MegogoComments extends MegogoAPI {
  constructor(configuration: MegogoComments) {
    super(configuration)
  }
  /** [POST] Megogo Comments | Comment add
   * https://devmegogoapi.briz.tv/apidoc/#api-Megogo_Comments-PostApiMggComments
   * https://devmegogoapi.briz.tv/api/mgg/comments
   * @param token?: string, params?: any
   * @returns Promise
   */
  public async postCommentAdd(params?: any, token?: string): Promise<any> {
    return await this.request.post({
      path: `mgg/comments`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      queries: {
        ...params,
      },
    })
  }
  /** [DELETE] Megogo Comments | Comment delete
   * https://devmegogoapi.briz.tv/apidoc/#api-Megogo_Comments-DeleteApiMggComments
   * https://devmegogoapi.briz.tv/api/mgg/comments
   * @param token?: string, params?: any
   * @returns Promise
   */
  public async delCommentDelete(params?: any, token?: string): Promise<any> {
    return await this.request.del({
      path: `mgg/comments`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      queries: {
        ...params,
      },
    })
  }
  /** [GET] Megogo Comments | Comments list
   * https://devmegogoapi.briz.tv/apidoc/#api-Megogo_Comments-GetApiMggComments
   * https://devmegogoapi.briz.tv/api/mgg/comments
   * @param params?: any
   * @returns Promise
   */
  public async getListComments(params?: any): Promise<any> {
    return await this.request.get({
      path: `mgg/comments`,
      headers: {
        Accept: 'application/json',
      },
      queries: {
        ...params,
      },
    })
  }
}

decorateService(MegogoComments)

export { MegogoComments }
