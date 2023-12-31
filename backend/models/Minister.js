import mongoose from "mongoose";

const Schema = mongoose.Schema

const MinisterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        // required: true
    },
    positives:{
        type: Number,
        default: 0
    },
    negatives:{
        type: Number,
        default: 0
    }
})

export default mongoose.model("Minister", MinisterSchema)