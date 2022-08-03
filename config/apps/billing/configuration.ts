const billing = {
  digitalOcean: {
    appLink: `${process.env.SERVER_IP}:8000/`,
    users: {
      raven: {
        login: 'raven@breezein.net',
        password: '123123',
      },
    },
  },
  dev02: {
    appLink: 'dbilling.briz.ua/',
    users: {
      raven: {
        login: 'raven@breezein.net',
        password: '123123',
      },
    },
  },
  uat: {
    appLink: 'dbilling.briz.ua/',
    users: {
      raven: {
        login: 'raven@breezein.net',
        password: '123123',
      },
    },
  },
  stage: {
    appLink: 'dbilling.briz.ua/',
    users: {
      raven: {
        login: 'raven@breezein.net',
        password: '123123',
      },
    },
  },
}

export { billing }
