/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { MegogoAPI } from './megogo.api'

class Megogo extends MegogoAPI {
  constructor(configuration: Megogo) {
    super(configuration)
  }

  /** [GET] Megogo | Configuration
   * https://devmegogoapi.briz.tv/apidoc/#api-Megogo-GetApiMggConfiguration
   * https://devmegogoapi.briz.tv/api/mgg/configuration
   * @returns Promise
   */
  public async getConfiguration(): Promise<any> {
    return await this.request.get({
      path: `mgg/configuration`,
      headers: {
        Accept: 'application/json',
      },
    })
  }
}

decorateService(Megogo)

export { Megogo }
