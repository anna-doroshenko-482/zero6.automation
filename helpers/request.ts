import { buildRequest } from 'utils'

export async function getResponseByLink(link) {
  const url = new URL(link)
  const req = buildRequest(url.origin)
  const { body, status, ...rest } = await req.get({
    path: url.pathname + url.search,
    headers: {},
  })
  return { status, body }
}
