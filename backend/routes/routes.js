import {Router} from 'express'
import MinisterRoutes from './routePaths/MinisterRoutes.js'
import PresbyterRoutes from './routePaths/PresbyterRoutes.js'
import DeaconRoutes from './routePaths/DeaconRoutes.js'
import UserRoutes from './routePaths/UserRoutes.js'

const router = Router()

router.use('/user', UserRoutes)
router.use('/minister', MinisterRoutes)
router.use('/presbyter', PresbyterRoutes)
router.use('/deacon', DeaconRoutes)

export default router