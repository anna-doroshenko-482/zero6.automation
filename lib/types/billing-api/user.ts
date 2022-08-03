export type tokenGenerateReqType = {
  AllowedDomains: string
}

export type tokenGenerateRespType = {
  status: string
  data: {
    AppKey: string
    AllowedDomains: string
  }
  errorCode: null
  errors: null
}
