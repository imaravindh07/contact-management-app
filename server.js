const express=require('express')
const errorHandler = require('./middleware/erroHandler')
const connectDB = require('./config/dbConnection')
const app=express()
const dotenv=require('dotenv').config()
const port=process.env.PORT

connectDB()
app.use(express.json())
app.use(errorHandler)
app.use('/api/contacts',require('./routes/contactRoutes'))
app.use('/api/users',require('./routes/userRoutes'))
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})