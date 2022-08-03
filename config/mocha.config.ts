import { billing_api, user_api, webUiApi, paymentGateway_api, ott_billing_api, megogo_api } from './apps'

function getConfiguration() {
  const envList = ['uat', 'digitalOcean', 'dev02', 'qa', 'stage']
  const currentEnv = process.env.ENV || 'dev02'
  if (envList.includes(currentEnv)) {
    console.debug(`Using ${currentEnv} environment`)
    return {
      env: currentEnv,
      billing_api: billing_api[currentEnv],
      billing_ui: webUiApi[currentEnv],
      user_ip: user_api[currentEnv],
      paymentGateway_api: paymentGateway_api[currentEnv],
      ott_billing_api: ott_billing_api[currentEnv],
      megogo_api: megogo_api[currentEnv],
    }
  } else {
    throw new Error('Environment unspecified')
  }
}

export const configMocha = getConfiguration()
