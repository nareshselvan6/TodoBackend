import mongoose from "mongoose";

const todo=mongoose.Schema({
    name:String,
    description:String
})

const todoDB=mongoose.model("todoDB",todo);
export default todoDB;