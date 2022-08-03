import { Selenoid } from './apps'
import { config } from 'config/config'

const apiManager = {
  selenoid: new Selenoid(config.selenoid),
}

export { apiManager }
