import {Router} from 'express'
import UserController from '../../controllers/userController.js'

const router = Router()

router.get('/', UserController.getAll)
router.post('/', UserController.create)
router.delete('/:id', UserController.deleteOne)

export default router