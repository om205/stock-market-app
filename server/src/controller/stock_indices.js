import { NseModel, BseModel } from "../models/stock_indices.js"

export const welcomeMessage = (req, res) => {
    res.status(200).send(`Application working well!`)
}

export const getNseData = async (req, res) => {
    const data = await NseModel.find({})
    res.send(data)
}

export const getBseData = async (req, res) => {
    const data = await BseModel.find({})
    res.send(data)
}