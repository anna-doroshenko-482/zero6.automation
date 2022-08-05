import { zero6, selenoid } from './apps'

function getConfiguration() {
  const envList = ['uat', 'digitalOcean', 'dev02', 'qa', 'stage']
  const currentEnv = process.env.ENV || 'dev02'
  if (envList.includes(currentEnv)) {
    return {
      env: currentEnv,
      zero6: zero6[currentEnv],
      selenoid: selenoid[currentEnv],
    }
  } else {
    throw new Error('Environment unspecified')
  }
}

export const config = getConfiguration()
