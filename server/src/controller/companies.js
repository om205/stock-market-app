import { ashokleyModel, ciplaModel, eichermotModel, relianceModel, tatasteelModel } from '../models/companies.js'

export const emptyMessage = (req, res) => {
    res.status(400).send('send company name to get the data')
}

export const getAshokleyData = async (req, res) => {
    const data = await ashokleyModel.find({})
    res.send(data)
}

export const getCiplaData = async (req, res) => {
    const data = await ciplaModel.find({})
    res.send(data)
}

export const getEichermotData = async (req, res) => {
    const data = await eichermotModel.find({})
    res.send(data)
}

export const getRelianceData = async (req, res) => {
    const data = await relianceModel.find({})
    res.send(data)
}

export const getTatasteelData = async (req, res) => {
    const data = await tatasteelModel.find({})
    res.send(data)
}