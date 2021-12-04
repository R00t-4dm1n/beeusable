import express from 'express'
const router = express.Router()
import {getProducts, getProductById } from '../controllers/productController.js'



<<<<<<< HEAD
=======
    const products = await Product.find({})
<<<<<<< HEAD
    
    
=======
>>>>>>> 49234f1d0e2f04d7fccb11b8b9588f73cd38c55d
    res.json(products)
}))
// @desc Fetch single product
// @route Get /api/product/:id
// @access public
>>>>>>> c2bf5f441a889544393379e1ed5eb3b2c8ee337c

 router.route('/').get(getProducts)
 router.route('/:id').get(getProductById)



export default router