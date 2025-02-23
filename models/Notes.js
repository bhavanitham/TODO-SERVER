import mongoose from 'mongoose'

const notesSchema = new mongoose.Schema({
    note:
    {
    type:String,
    required:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
})

export const Notes = mongoose.model('note',notesSchema)
