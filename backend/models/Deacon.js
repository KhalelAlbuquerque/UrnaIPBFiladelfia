import mongoose from "mongoose";

const Schema = mongoose.Schema

const DeaconSchema = new Schema({
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

export default mongoose.model("Deacon", DeaconSchema)