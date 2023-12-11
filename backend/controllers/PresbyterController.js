import Presbyter from '../models/Presbyter.js'

export default class PresbyterController {
    static async getAll(req,res){
        try{
            const presbyters = await Presbyter.find().exec()

            return res.status(200).json(presbyters)
        }catch(err){
            return res.status(500).json({message: err.message});
        }
    }

    static async create(req,res){
        try{
            const {name, votes, image} = req.body

            const newPresbyter = {
                name,
                image,
                votes
            }

            await Presbyter.create(newPresbyter)

            return res.status(201).json({message: 'Presbyter created successfully', newPresbyter: newPresbyter})
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }

    static async deleteOne(req,res){
        try{
            const {id} = req.params

            const foundPresbyter = await Presbyter.findOne({_id:id}).exec()

            if(!foundPresbyter) return res.status(404).json({message: "Presbyter not found"})

            await Presbyter.deleteOne(foundPresbyter).exec()

            res.status(200).json({message: "Presbyter deleted"})
        }catch(err){
            return res.status(500).json({message: err.message})
        }
    }
}