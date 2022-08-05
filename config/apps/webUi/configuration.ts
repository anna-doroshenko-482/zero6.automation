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
    host: 'http://20.0.59.108/',
    users: {
      admin: {
        login: 'admin@mailinator.com',
        password: 'test',
      },
    },
  },
}
