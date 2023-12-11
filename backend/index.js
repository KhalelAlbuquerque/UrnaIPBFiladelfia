import dotenv from 'dotenv'
dotenv.config()

import express from 'express';
import conn from './db/conn.js';
import routes from './routes/routes.js';
import mongoose from 'mongoose';

const app = express();

app.use('/', routes)

conn()
mongoose.connection.once('open', ()=>{
    console.log("Conexão feita")
    
    const PORT = process.env.PORT || 3001

    app.listen(PORT, ()=>{
        console.log(`Servidor local rodando na porta ${PORT}`)
    })
})