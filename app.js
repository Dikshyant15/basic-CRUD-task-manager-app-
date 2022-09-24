const connectDB=require('./db/connect')
const express = require('express')
const tasks = require('./routes/tasks')
require('dotenv').config()

const app = express()

//middleware
app.use(express.static('./public'))
app.use(express.json()) //to get data for the req.body

//routes 
app.use('/api/v1/tasks',tasks)


const port = 3000
const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,
            console.log(`Server listening on port ${port}`))

    }catch(error){
        console.log(error)
    }

}
start()
