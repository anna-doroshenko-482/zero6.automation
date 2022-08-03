/* eslint-disable prettier/prettier */
import chalk from 'chalk'
import { log } from 'lib'

function logger(message, ...args) {
  log.debug(chalk.green(message), ...args)
}

/**
 * @param {object} class
 */
function decorateService(initialClass) {
  const methods = Object
  .getOwnPropertyNames(initialClass.prototype)
  .filter((methodName) => methodName !== 'constructor')
  .filter((methodName) => typeof initialClass.prototype[methodName] === 'function')

methods.forEach((methodName) => {
  const originalMethod = initialClass.prototype[methodName]
  initialClass.prototype[methodName] = function(...args) {

    log.debug(chalk.green(`class ${this.constructor.name}: call method ${originalMethod.name} with arguments: `, console.debug(...args)))
    return originalMethod.call(this, ...args)
    }
  })
}

async function browserLog(): Promise<any>{
  const requestedCapabilities = <any>browser.requestedCapabilities
  if (requestedCapabilities.browserName === 'chrome') {
  const logTypes = await browser.getLogTypes()
    const logs = logTypes.map(async logType => {
      const message = await browser.getLogs(logType)
      if(message.length){
        message.map((logMessage: any) => {
          log.debug(chalk.cyan(`ERROR LEVEL`), chalk.red(`${logMessage.level}`), chalk.yellow(`called the message ${logMessage.message}`))
        })
      }
    })
    await Promise.all(logs)
  }
}

export { logger, decorateService, browserLog }
