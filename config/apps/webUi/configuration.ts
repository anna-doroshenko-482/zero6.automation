export const webUiApi = {
  digitalOcean: {
    host: `http://${process.env.SERVER_IP}:8000/`,
    users: {
      name: {
        login: '',
        password: '',
      },
    },
  },
  dev02: {
    host: 'http://20.222.119.219/',
    users: {
      admin: {
        login: 'admin@mailinator.com',
        password: 'test',
      },
    },
  },
}
