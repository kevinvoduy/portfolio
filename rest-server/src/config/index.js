const url = {
  restServer: process.env.NODE_ENV === 'PRODUCTION' ?
  process.env.REST_SERVER_URL :
  process.env.DEV_REST_SERVER_URL,
}

export default url;