const CLIENT_HOST = process.env.CLIENT_HOST || 'http://localhost:3000'

const CONFIG_CORS = {
    methods: ["POST", 'GET', 'PUT','PATCH', 'DELETE'],
    origin: CLIENT_HOST
}

export {
  CLIENT_HOST,
  CONFIG_CORS
}
