require('dotenv').config()

const express = require('express');
const { default: mongoose}
const app = express();

const connect = required("./db/db")

const start = async()=>{
    try{
        mongoose.set('strictQuery',true)
        await connect(process.env.MONGO_URI),
        app.listen(PORT,()=>{
console.log('server is running on port $(PORT)...')
    })
    
}catch(err){
    console.log(err)
}
}
start()