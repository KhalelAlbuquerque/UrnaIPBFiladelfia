import mongoose from "mongoose";

const Schema = mongoose.Schema

const MinisterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
})

export default mongoose.model("Minister", MinisterSchema)