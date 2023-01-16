import mongoose from "mongoose";

const stockDataSchema = new mongoose.Schema({
    date: Date,
    open: Number,
    high: Number,
    low: Number,
    close: Number,
    adjclose: Number,
    volume: Number
})

export default stockDataSchema