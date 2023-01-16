import express from 'express'
import { welcomeMessage, getNseData, getBseData } from '../controller/stock_indices.js'

const router = express.Router()

router.get('/', welcomeMessage)
router.get('/nse', getNseData)
router.get('/bse', getBseData)

export default router