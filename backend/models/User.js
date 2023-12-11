import mongoose from "mongoose";

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,  
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    permission:{
        type: String,
        default: 'Admin',
    }
})

export default mongoose.model('User', UserSchema)