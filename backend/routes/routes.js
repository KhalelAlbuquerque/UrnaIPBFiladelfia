import {Router} from 'express'
import MinisterRoutes from './routePaths/MinisterRoutes.js'
import UserRoutes from './routePaths/UserRoutes.js'

const router = Router()

router.use('/minister', MinisterRoutes)
router.use('/user', UserRoutes)

export default router