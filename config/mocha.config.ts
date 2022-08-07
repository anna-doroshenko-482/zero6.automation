import { zero6,  webUiApi } from './apps'

function getConfiguration() {
  const envList = ['uat', 'digitalOcean', 'dev02', 'qa', 'stage']
  const currentEnv = process.env.ENV || 'dev02'
  if (envList.includes(currentEnv)) {
    console.debug(`Using ${currentEnv} environment`)
    return {
      env: currentEnv,
      // zero6_api: zero6[currentEnv],
      zero6_ui: webUiApi[currentEnv],
      // user_ip: user_api[currentEnv],
    }
  } else {
    throw new Error('Environment unspecified')
  }
}

export const configMocha = getConfiguration()
