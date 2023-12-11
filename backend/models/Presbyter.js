import mongoose from "mongoose";

const Schema = mongoose.Schema

const PresbyterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        // required: true
    },
    votes: {
        type: Number,
        default: 0
    },
})

export default mongoose.model("Presbyter", PresbyterSchema)