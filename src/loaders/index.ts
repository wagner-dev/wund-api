import { Application } from 'express';

import { UseDatabase } from './database';
import { UseExpress } from './express';
import { UseRoutes } from './routes';
import { UseSecurity } from './security';
import { UseDevelopmentDependencies } from './development-dependencies';

const UseLoaders = async (app: Application) => {
  try {
    await UseDatabase()
    UseExpress(app)
    UseSecurity(app)
    UseRoutes(app)
    UseDevelopmentDependencies(app)
  } catch (error) {
    throw error
  }
}

export { UseLoaders }
