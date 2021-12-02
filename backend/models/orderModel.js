import mongoose from "mongoose"

const orderSchema = mongoose.Schema({

    name:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'

    },
    orderItems:[{
        name: {type: String, required: true },
        image:{type: Number, required: true },
        price:{type: Number, required: true},
        product:{ 
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Product'
        }
    }
    ],
    totalPrice:{
        type: Number,
        required: true,
        Default: 0.0,
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false,
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false,
    }

}, {
    timestamps: true

})

const Order = mongoose.model('Order', orderSchema) 

export default Order