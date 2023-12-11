import {Router} from 'express'
import PresbyterController from '../../controllers/PresbyterController.js'

const router = Router()

router.get('/', PresbyterController.getAll)
router.post('/', PresbyterController.create)
router.delete('/:id', PresbyterController.deleteOne)
router.post('/compute/:id', PresbyterController.computeVotes)

export default router