import { Router } from 'express'
const router = Router()

import psychology from '../../controllers/psychology/index'

router.get('/psychologists', psychology.getAll)
router.get('/psychologists/:id', psychology.get)

export default router
