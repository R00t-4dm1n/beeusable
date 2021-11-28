import mongoose from "mongoose"

<<<<<<< HEAD
const productSchema = mongoose.Schema(
=======
const prodcutSchema = mongoose.schema(
>>>>>>> 25869d8e353b425cc656d5b97f0020c59b0de4a9

    {
    
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },    
        
    name:{
        type: String,
        required: true,

    },
    image:{
        type: String,
        required: true,
    },
    brand:{
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
        default: 0

<<<<<<< HEAD
    },
    countInStock:{
        type: Number,
        required: true,
        default: 1 
=======
>>>>>>> 25869d8e353b425cc656d5b97f0020c59b0de4a9
    }

}, {
    timestamps: true

})

const Product = mongoose.model('Product', productSchema) 

export default Product