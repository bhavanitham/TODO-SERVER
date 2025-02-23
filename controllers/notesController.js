import { Notes } from "../models/Notes.js";

export const getNotes = async(req,res)=>{   //Get all Notes
    try{
    const allNotes = await Notes.find({userId:req.user.id});
    res.json(allNotes)
    }
    catch(error){
        res.status(500).json({
            message:"error fetching Notes"
        })
    }
}

export const addNotes = async(req,res)=>{
    try{
        const {note} = req.body;
        if(!note){
            return res.status(400).json({
                message:"notes cannot be empty"}) 
            }
            const newNote = new Notes({note,userId:req.user.id});
            const saveNewNote = await newNote.save();
            console.log("User from auth middleware:", req.user);
            res.status(201).json({
                message:"new note created",
                note:saveNewNote
            })
        }
    catch(error){
        res.status(400).json({
            message:"Error adding Notes",
            user:req.user
        })
    }
}

export const deleteNotes = async (req, res) => {
    try {
      const { id } = req.params; // Extract the note ID from the URL parameters
  
      // Check if ID is provided
      if (!id) {
        return res.status(400).json({ message: "Note ID is required" });
      }
  
      // Find and delete the note
      const deletedNote = await Notes.findByIdAndDelete(id);
  
      // Check if a note was found and deleted
      if (!deletedNote) {
        return res.status(404).json({ message: "Note not found" });
      }
  
      res.status(200).json({
        message: "Note deleted successfully",
        note: deletedNote, // Optionally return the deleted note
      });
    } catch (error) {
      res.status(500).json({ message: "Error deleting note", error: error.message });
    }
  };
  