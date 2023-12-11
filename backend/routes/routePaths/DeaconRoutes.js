import {Router} from 'express'
import DeaconController from '../../controllers/DeaconController.js'

const router = Router()

router.get('/', DeaconController.getAll)
router.post('/', DeaconController.create)
router.get('/:id', DeaconController.deleteOne)

export default router