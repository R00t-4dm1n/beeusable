import express from 'express'
import dotenv  from 'dotenv'
import colors  from 'colors'
import connectDB from './config/db.js'
<<<<<<< HEAD

import productRoutes from './routes/productRoutes.js'
=======
import products from './data/products.js' 
>>>>>>> 25869d8e353b425cc656d5b97f0020c59b0de4a9

dotenv.config()

connectDB()

const app = express()

app.get('/', (req,res) => {
    res.send('Api is running....')
})

app.use('/api/products',productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running ${process.env.NODE_ENV} mode on port  ${PORT}`.yellow.bold))