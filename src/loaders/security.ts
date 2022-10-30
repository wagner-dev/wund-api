import { Application } from 'express';
import cors from 'cors'
import helmet from 'helmet'

const UseSecurity = (app: Application) => {
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors({ origin: '*' }))

  app.use(helmet())
}

export { UseSecurity }
