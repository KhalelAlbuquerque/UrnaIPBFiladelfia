import Deacon from '../models/Deacon.js'

export default class DeaconController {
    static async getAll(req,res){
        try{
            const deacons = await Deacon.find().exec()

            return res.status(200).json(deacons)
        }catch(err){
            return res.status(500).json({message: err.message});
        }
    }

    static async create(req,res){
        try{
            const {name, votes, image} = req.body

            const newDeacon = {
                name,
                image,
                votes
            }

            await Deacon.create(newDeacon)

            return res.status(201).json({message: 'Deacon created successfully', newDeacon: newDeacon})
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }

    static async deleteOne(req,res){
        try{
            const {id} = req.params

            const foundDeacon = await Deacon.findOne({_id:id}).exec()

            if(!foundDeacon) return res.status(404).json({message: "Deacon not found"})

            await Deacon.deleteOne(foundDeacon).exec()

            res.status(200).json({message: "Deacon deleted"})
        }catch(err){
            return res.status(500).json({message: err.message})
        }
    }
}