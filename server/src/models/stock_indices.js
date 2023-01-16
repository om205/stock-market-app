import mongoose from "mongoose";
import schema from './schema.js'

export const NseModel = mongoose.model('Nse', schema, 'nse')
export const BseModel = mongoose.model('Bse', schema, 'bse') 