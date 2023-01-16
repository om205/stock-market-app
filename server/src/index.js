import express from 'express'
import './db/mongoose.js'
import stockRoutes from './routes/stock_indices.js'
import userRoutes from './routes/user.js'
import companyRoutes from './routes/companies.js'

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use('/users', userRoutes)
app.use('/companies', companyRoutes)
app.use('/stockindices', stockRoutes)

app.listen(PORT, () => console.log('The server is running on port: ', PORT)) 