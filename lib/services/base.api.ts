import { buildRequest } from 'utils'

interface IAPI {
  login?: string
  password: string
  email?: string
}

export class API {
  public host: string
  public request
  public users?: {
    raven: IAPI
    default?: { grant_type: string; auth_id: number; password: number }
    maxLS?: { grant_type: string; auth_id: number; password: number }
    megogoUser?: { login: string; password: string }
  }
  public bodyUser?: IAPI
  public bodyUserMegogo?: IAPI

  constructor(configuration) {
    this.host = configuration.host
    this.request = buildRequest(configuration.host)
    this.users = configuration.users
    this.bodyUser = { email: this.users?.raven?.login, password: this.users?.raven?.password }
    this.bodyUserMegogo = { login: this.users?.megogoUser?.login, password: this.users?.megogoUser?.password }
  }

  public async getToken(): Promise<string> {
    const { body } = await this.request.post({
      path: `/api/authenticate`,
      body: this.bodyUser,
    })
    return `Bearer ${body.data.token}`
  }
}
