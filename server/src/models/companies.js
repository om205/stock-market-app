import mongoose from "mongoose";
import schema from './schema.js'

export const relianceModel = mongoose.model('Reliance',schema,'reliance')
export const tatasteelModel = mongoose.model('Tatasteel',schema,'tatasteel')
export const eichermotModel = mongoose.model('Eichermot',schema,'eichermot')
export const ciplaModel = mongoose.model('Cipla',schema,'cipla')
export const ashokleyModel = mongoose.model('Ashokley',schema,'ashokley')