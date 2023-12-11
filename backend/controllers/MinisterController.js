import Minister from '../models/Minister.js'

export default class MinisterController {
    static async getMinister(req,res){
        try{
            const ministers = await Minister.find().exec()

            if(ministers.length == 0){
                return res.status(404).json({message: 'No minister found'})
            }

            return res.status(200).json(ministers[0])
        }catch(err){
            return res.status(500).json({message: err.message});
        }
    }

    static async create(req,res){
        try{
            const foundMinisters = await Minister.find().exec()

            if(foundMinisters.length > 0){
                return res.status(500).json({message: "Only one minister is permitted"})
            }

            const {name} = req.body

            const newMinister = {
                name,
            }

            await Minister.create(newMinister)

            return res.status(201).json({message: 'Minister created successfully', newMinister: newMinister})
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }

    static async computePositive(req, res){
        try{
            const foundMinister = await Minister.find().exec()
    
            if(foundMinister.length == 0){
                return res.status(404).json({message: "Minister not found"})
            }
    
            foundMinister[0].positives += 1
    
            await foundMinister[0].save();

             return res.status(200).json({ message: "Positive vote computed successfully" });
        }catch(err){
            return res.status(500).json({message: err.message});
        }
    }

    static async computeNegative(req, res){
        try{
            const foundMinister = await Minister.find().exec()
    
            if(foundMinister.length == 0){
                return res.status(404).json({message: "Minister not found"})
            }
    
            foundMinister[0].negatives += 1
    
            await foundMinister[0].save();

             return res.status(200).json({ message: "Negative vote computed successfully" });
        }catch(err){
            return res.status(500).json({message: err.message});
        }
    }
    

    static async deleteMinister(req,res){
        try{
            const foundMinister = await Minister.find().exec()
    
            if(foundMinister.length == 0){
                return res.status(404).json({message: "Minister not found"})
            }
    
            await Minister.deleteOne(foundMinister[0]).exec()

            res.status(200).json({message: "Minister deleted"})
        }catch(err){
            return res.status(500).json({message: err.message})
        }
    }
}