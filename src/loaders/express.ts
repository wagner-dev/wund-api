import { Application } from 'express'
import bodyParser from 'body-parser'

const UseExpress = (app: Application) => {
  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json())
}

export { UseExpress }
