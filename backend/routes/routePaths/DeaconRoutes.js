import {Router} from 'express'
import DeaconController from '../../controllers/DeaconController.js'

const router = Router()

router.get('/', DeaconController.getAll)
router.post('/', DeaconController.create)
router.delete('/:id', DeaconController.deleteOne)
router.post('/compute', DeaconController.computeVotes)

export default router