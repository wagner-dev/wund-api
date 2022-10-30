import { Router } from 'express'
import psychologyRoute from './psychology.route'
const router = Router()

const defaultRoutes = [{
  route: psychologyRoute
}]

defaultRoutes.forEach(({ route }) => router.use(route))

export default router
