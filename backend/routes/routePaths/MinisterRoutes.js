import {Router} from 'express'
import MinisterController from '../../controllers/MinisterController.js'

const router = Router()

router.get('/', MinisterController.getMinister)
router.post('/', MinisterController.create)
router.post('/computePositive', MinisterController.computePositive)
router.post('/computeNegative', MinisterController.computeNegative)
router.delete('/', MinisterController.deleteMinister)

export default router