import mongoose from "mongoose"

<<<<<<< HEAD
const userSchema = mongoose.Schema({
=======
const userSchema = mongoose.schema({
>>>>>>> 25869d8e353b425cc656d5b97f0020c59b0de4a9

    name:{
        type: String,
        required: true,

    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
<<<<<<< HEAD

    phoneNumber:{
        type: Number,
        required: true,
        unique: true,
    },
=======
>>>>>>> 25869d8e353b425cc656d5b97f0020c59b0de4a9
    password:{
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    }

}, {
    timestamps: true

})

const User = mongoose.model('User', userSchema) 

export default User