import mongoose from "mongoose";

const todo=mongoose.Schema({
    title:String,
    description:String,
    createdate:String
})

const todoDB=mongoose.model("todoDB",todo);
export default todoDB;