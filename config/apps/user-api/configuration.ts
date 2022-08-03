const user_api = {
  digitalOcean: {
    host: `http://${process.env.SERVER_IP}:8002`,
    users: {
      default: {
        grant_type: 'user',
        auth_id: 145888,
        password: 111111,
      },
    },
  },
  dev02: {
    host: 'https://devuapi.briz.ua/server.php/',
    users: {
      default: {
        grant_type: 'user',
        auth_id: 145888,
        password: 111111,
      },
      maxLS: {
        grant_type: 'user',
        auth_id: 144444,
        password: 10203040,
      },
    },
  },
  uat: {
    host: 'https://devuapi.briz.ua/server.php/',
    users: {
      default: {
        grant_type: 'user',
        auth_id: 145888,
        password: 111111,
      },
    },
  },
  stage: {
    host: 'https://devuapi.briz.ua/server.php/',
    users: {
      default: {
        grant_type: 'user',
        auth_id: 145888,
        password: 111111,
      },
    },
  },
}

export { user_api }
