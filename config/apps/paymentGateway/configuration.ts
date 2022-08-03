const paymentGateway_api = {
  digitalOcean: {
    host: `http://${process.env.SERVER_IP}:8003`,
  },
  dev02: {
    host: 'https://dev-payments.briz.ua/',
  },
  uat: {
    host: 'https://dev-payments.briz.ua/',
  },
  stage: {
    host: 'https://dev-payments.briz.ua/',
  },
}

export { paymentGateway_api }
