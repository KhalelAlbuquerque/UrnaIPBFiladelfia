import bcrypt from 'bcrypt'
import User from '../models/User.js'

export default class UserController{
    static async getAll(req,res){
        try{
            const users = await User.find().exec()
            return res.status(200).json(users)
        }catch(err){
            return res.status(500).json({message: err.message})
        }
    }

    static async create(req,res){
        try{
            const {name, email, password} = req.body

            const hashedPassword = await bcrypt.hashSync(password, process.env.SALT)

            const newUser = {
                name,
                email,
                password: hashedPassword
            }

            await User.create(newUser)

            return res.status(201).json({newUser: newUser})
        }catch(err){
            return res.status(500).json({message: err.message})
        }
    }

    static async deleteOne(req,res){
        try{
            const {id} = req.params

            const foundUser = await User.findOne({_id:id}).exec()

            if(!foundUser) return res.status(404).json({message: "User not found"})

            await User.deleteOne(foundUser).exec()

            res.status(200).json({message: "User deleted"})
        }catch(err){
            return res.status(500).json({message: err.message})
        }
    }
}