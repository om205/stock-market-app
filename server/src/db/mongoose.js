import mongoose from 'mongoose'
const url = `mongodb://127.0.0.1:27017/stock-market`

mongoose.connect(url)
    .then(() => console.log(`Database connected`))
    .catch(e => console.log(`Database error encountered!\n${e}`)) 