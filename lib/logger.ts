import { configure, getLogger } from 'log4js'

const logConfiguration = {
  appenders: {
    console: { type: 'console' },
  },
  categories: {
    default: { appenders: ['console'], level: 'debug' },
    debug: { appenders: ['console'], level: 'debug' },
    info: { appenders: ['console'], level: 'info' },
    trace: { appenders: ['console'], level: 'trace' },
  },
}
configure(logConfiguration)

const level = process.env.LOG_LEVEL || 'trace'
if (!Object.keys(logConfiguration.categories).includes(level)) {
  throw new Error('Unknown logging level')
}

const log = getLogger(level)
log.debug('Logging level set to ', level)

export { log }
