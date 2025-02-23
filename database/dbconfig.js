import mongoose from 'mongoose'

function connectDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(console.log("DB-Connected Successfully"))}
    
export default connectDB;