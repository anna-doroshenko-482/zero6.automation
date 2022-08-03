/* eslint-disable @typescript-eslint/no-var-requires */
const fetchy = require('node-fetch')
import * as QS from 'querystring'
import AllureReporter from '@wdio/allure-reporter'
import { allure } from 'allure-mocha/dist/MochaAllureReporter'
import nodePath from 'path'
import { log } from 'lib'

interface IRequestParams {
  path: string
  body?: any
  headers?: Record<string, unknown>
  queries?: Record<string, unknown>
}

interface IResponse {
  body: any
  status: number
  headers: Record<string, unknown>
}

interface IRequest {
  get(arg: IRequestParams): Promise<IResponse>
  post(arg: IRequestParams): Promise<IResponse>
  put(arg: IRequestParams): Promise<IResponse>
  del(arg: IRequestParams): Promise<IResponse>
  patch(arg: IRequestParams): Promise<IResponse>
}

const methods = {
  post: 'POST',
  del: 'DELETE',
  get: 'GET',
  put: 'PUT',
  patch: 'PATCH',
}

function createReqBody(body: any, method: string) {
  if (method != methods.get) {
    if (typeof body === 'object') {
      return JSON.stringify(body)
    } else if (typeof body === 'string') {
      return body
    }
  }
  return null
}

async function _fetch(host: string, method: string, { path, body, headers, queries }) {
  queries = queries ? `?${QS.stringify(queries)}` : ''
  body = createReqBody(body, method)
  headers = headers || { 'Content-Type': 'application/json' }

  const requestUrl = new URL(host)
  requestUrl.search = new URLSearchParams(queries).toString()
  requestUrl.pathname = nodePath.join(requestUrl.pathname, path)

  log.debug(`\t${method} Request to ${requestUrl}`)
  log.trace(`\nbody: ${JSON.stringify(body, null, 2)}`)
  log.trace(`\nheaders: ${JSON.stringify(headers, null, 2)}`)

  const response = await fetchy(requestUrl, { method, headers, body })

  const responseHeaders = Array.from(response.headers.entries()).reduce((acc, [key, value]) => {
    acc[key] = value.toLowerCase()
    return acc
  }, {})

  let responseBodyMethod = null
  try {
    responseBodyMethod = responseHeaders['content-type'].includes('application/json') ? 'json' : 'text'
  } catch {
    responseBodyMethod = 'text'
  }

  const responseData = {
    body: await response[responseBodyMethod](),
    status: response.status,
    headers: responseHeaders,
  }

  const stepName = `[${responseData.status}] ${method} ${path}`
  if (typeof allure === 'undefined') {
    if (typeof responseData.body === 'string') {
      responseData.body = responseData.body.replace(/(<([^>]+)>)/gi, '')
      AllureReporter.addStep(`${method} ${requestUrl}`, responseData.body)
    } else {
      AllureReporter.addAttachment(`${method} ${requestUrl}`, eval(responseData.body), 'application/json')
    }
  } else {
    const step = allure.createStep(stepName, () => {
      if (responseData?.body) {
        allure.createAttachment(
          'JSON RESPONSE BODY',
          JSON.stringify(responseData.body, null, 2),
          'application/json' as any,
        )
      }
    })
    step()
  }

  return responseData
}

function buildRequest(host: string): IRequest {
  return {
    get: _fetch.bind(_fetch, host, methods.get),
    post: _fetch.bind(_fetch, host, methods.post),
    put: _fetch.bind(_fetch, host, methods.put),
    del: _fetch.bind(_fetch, host, methods.del),
    patch: _fetch.bind(_fetch, host, methods.patch),
  }
}

export { buildRequest, IRequest, methods }
