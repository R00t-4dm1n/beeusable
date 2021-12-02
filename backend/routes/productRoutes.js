import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
// @access Public

 router.get('/', asyncHandler(async(req,res) => {

    const products = await Product.find({})
<<<<<<< HEAD
    
    
=======
>>>>>>> 49234f1d0e2f04d7fccb11b8b9588f73cd38c55d
    res.json(products)
}))
// @desc Fetch single product
// @route Get /api/product/:id
// @access public

router.get('/:id', asyncHandler(async(req,res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product) 
    } 
    else {
        res.status(404)
        throw new Error('Product not found') 

    
}
})
)

export default router