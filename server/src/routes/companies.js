import express from 'express'
import { emptyMessage, getAshokleyData, getCiplaData, getEichermotData, getRelianceData, getTatasteelData } from '../controller/companies.js'

const companyRouter = express.Router()

companyRouter.get('/', emptyMessage)
companyRouter.get('/ashokley', getAshokleyData)
companyRouter.get('/cipla', getCiplaData)
companyRouter.get('/eichermot', getEichermotData)
companyRouter.get('/reliance', getRelianceData)
companyRouter.get('/tatasteel', getTatasteelData)

export default companyRouter