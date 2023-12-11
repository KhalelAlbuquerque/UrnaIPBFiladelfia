import {Router} from 'express'
import MinisterController from '../../controllers/MinisterController.js'

const router = Router()

router.get('/', MinisterController.getAll)
router.post('/', MinisterController.create)
router.delete('/:id', MinisterController.deleteOne)

export default router