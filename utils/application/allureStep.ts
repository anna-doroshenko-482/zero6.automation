/* eslint-disable require-await */
import allureReporter from '@wdio/allure-reporter'
import { log } from 'lib'

// startStep(title) - start with a step
// title (String) - name of the step.
// endStep(status) - end with a step
// status (String, optional) - step status, passed by default. Must be "failed", "passed" or "broken"

export function step(msg: string) {
  return function stepDescriptor(target: any, propertyKey: any, descriptor: any) {
    const method = descriptor.value
    descriptor.value = async function descriptorValue(...args) {
      allureReporter.startStep(msg)
      try {
        const result = method.apply(this, args)
        allureReporter.endStep('passed')
        return result
      } catch (e) {
        try {
          await browser.takeScreenshot()
        } catch {
          log.debug(`ERROR: Cannot take screenshot for failed step ${msg} `)
        }
        if (e.toString().includes('AssertionError')) {
          allureReporter.endStep('failed')
        } else {
          allureReporter.endStep('broken')
        }
        throw e
      }
    }
    return descriptor
  }
}
