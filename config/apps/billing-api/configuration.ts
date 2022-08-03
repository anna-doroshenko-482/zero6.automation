const billing_api = {
  digitalOcean: {
    host: `http://${process.env.SERVER_IP}:8001`,
    users: {
      raven: {
        login: 'raven@breezein.net',
        password: '123123',
      },
    },
  },
  dev02: {
    host: 'https://dev-bil-api.briz.ua/',
    users: {
      raven: {
        login: 'raven@breezein.net',
        password: '123123',
      },
    },
  },
  uat: {
    host: 'https://dev-bil-api.briz.ua/',
    users: {
      raven: {
        login: 'raven@breezein.net',
        password: '123123',
      },
    },
  },
  stage: {
    host: 'https://dev-bil-api.briz.ua/',
    users: {
      raven: {
        login: 'raven@breezein.net',
        password: '123123',
      },
    },
  },
}

export { billing_api }
