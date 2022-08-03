import { timeouts } from 'lib'

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))

function timer(interval: number = timeouts.xxxxl) {
  let timeLimit: boolean
  const date: number = new Date().getTime()
  const endTime = date + interval

  return {
    period: endTime,
    duration: Number(interval / 1000),
    status: () => {
      interval = new Date().getTime()
      timeLimit = interval < endTime
      return timeLimit
    },
  }
}

export { sleep, timer }
