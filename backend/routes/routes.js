import {Router} from 'express'
import MinisterRoutes from './routePaths/MinisterRoutes.js'

const router = Router()

router.use('/minister', MinisterRoutes)

export default router