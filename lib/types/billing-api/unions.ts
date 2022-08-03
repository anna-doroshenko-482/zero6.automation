export type getUnionAccountsWithPaginationRequest = {
  count: number
  simple: number
}

export type UnionAccPaginationBodyDataResponse = {
  current_page: number
  first_page_url: string
  from: number
  next_page_url: string
  path: string
  per_page: number
  prev_page_url: boolean
  to: number
}
