import mongoose from 'mongoose'

const conn = async ()=>{

    try{
        const database_url = process.env.DATABASE_URL

        await mongoose.connect(database_url)

    }catch(err){
        console.error(err.message)
    }

}


export default conn