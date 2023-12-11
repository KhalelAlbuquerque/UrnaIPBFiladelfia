import dotenv from 'dotenv'
dotenv.config()

import express from 'express';
import conn from './db/conn.js';
import routes from './routes/routes.js';
import mongoose from 'mongoose';
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)

conn()
mongoose.connection.once('open', ()=>{
    console.log("Conexão com DB feita")
    
    const PORT = process.env.PORT || 3001

    app.listen(PORT, ()=>{
        console.log(`Servidor local rodando na porta ${PORT}`)
    })
})