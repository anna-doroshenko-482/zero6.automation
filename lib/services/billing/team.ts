/* eslint-disable no-return-await */
import { decorateService } from 'utils'
import { BillingAPI } from './billing.api'

class Team extends BillingAPI {
  constructor(configuration: Team) {
    super(configuration)
  }

  /** [GET] getTeamByUser
   * https://dev-bil-api.briz.ua/docs/#team-GETteam-user
   * @returns
   */
  public async getTeamByUser(): Promise<any> {
    return await this.request.get({
      path: `/team/user`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /** [GET] getTeamInternetBybUserID
   * https://dev-bil-api.briz.ua/docs/#team-GETbuser--buser_id--team-internet
   * buser_id - id пользователя в системе
   * @returns
   */
  public async getTeamInternetBybUserID(buser_id): Promise<any> {
    return await this.request.get({
      path: `/buser/${buser_id}/team/internet`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }

  /** [GET] getTeamByUser
   * https://dev-bil-api.briz.ua/docs/#team-GETteam--internet_team_id--members
   * internet_team_id - ID команды интернет
   * @returns
   */
  public async getMembersByTeamID(internet_team_id: string): Promise<any> {
    return await this.request.get({
      path: `/team/${internet_team_id}/members`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: await this.getToken(),
      },
    })
  }
}

decorateService(Team)

export { Team }
