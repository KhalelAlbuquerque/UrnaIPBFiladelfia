import {Router} from 'express'
import PresbyterController from '../../controllers/PresbyterController.js'

const router = Router()

router.get('/', PresbyterController.getAll)
router.post('/', PresbyterController.create)
router.get('/:id', PresbyterController.deleteOne)

export default router