/* eslint-disable no-return-await */
import { urlFileParser } from 'helpers'
import { buildRequest } from 'utils'

class Selenoid {
  public request: any
  public host: string

  constructor(connectionOptions: Selenoid) {
    this.host = connectionOptions.host
    this.request = buildRequest(connectionOptions.host)
  }

  public async getFileData(session: { id: string }) {
    return await this.request.get({
      path: `/download/${session.id}`,
    })
  }

  public async getData(session: { id: string; name: string }) {
    const link = `${this.host}/download/${session.id}/${session.name}`
    return await urlFileParser(link)
  }
}

export { Selenoid }
