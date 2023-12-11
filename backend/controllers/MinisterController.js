import Minister from '../models/Minister.js'

export default class MinisterController {
    static async getAll(req,res){
        try{
            const ministers = await Minister.find().exec()

            return res.status(200).json(ministers)
        }catch(err){
            return res.status(500).json({message: err.message});
        }
    }

    static async create(req,res){
        try{
            const {name, votes, image} = req.body

            const newMinister = {
                name,
                image,
                votes
            }

            await Minister.create(newMinister)

            return res.status(201).json({message: 'Minister created successfully', newMinister: newMinister})
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }

    static async deleteOne(req,res){
        try{
            const {id} = req.params

            const foundMinister = await Minister.findOne({_id:id}).exec()

            if(!foundMinister) return res.status(404).json({message: "Minister not found"})

            await Minister.deleteOne(foundMinister).exec()

            res.status(200).json({message: "Minister deleted"})
        }catch(err){
            return res.status(500).json({message: err.message})
        }
    }
}