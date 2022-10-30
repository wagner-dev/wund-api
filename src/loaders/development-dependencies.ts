import { Application } from 'express';
import dotenv from 'dotenv'
import morgan from 'morgan'

const UseDevelopmentDependencies = (app: Application) => {
  dotenv.config()

  app.use(morgan('tiny'))
}

export { UseDevelopmentDependencies }
