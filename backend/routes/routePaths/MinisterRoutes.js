import {Router} from 'express'
import MinisterController from '../../controllers/MinisterController.js'

const router = Router()

router.get('/', MinisterController.getAll)
router.get('/', function(req, res){})
router.get('/', function(req, res){})
router.get('/', function(req, res){})

export default router