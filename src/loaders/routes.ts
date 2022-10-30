import { Application } from 'express';

import routes from '../routes/v1/index'

const UseRoutes = (app: Application) => (
  app.use('/v1', routes)
)

export { UseRoutes }
