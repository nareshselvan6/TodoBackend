import todoDB from "../Models/Todolist.js";

// Post

export const createtodo=async(req,res)=>{
    try {
        const {title,description}=req.body;

        const newtodo=new todoDB({title:title,description:description})
        await newtodo.save();

        res.status(200).json({newtodo})
    } catch (error) {
        console.log(error);
    }
}

// Get

export const gettodo = async(req,res)=>{
    try {
        const gettodo=await todoDB.find();

        res.status(200).json({gettodo})
    } catch (error) {
        console.log(error);
    }
}

// Get by Id

export const gettotoid= async(req,res)=>{
    try {
        const id=req.params.id;
        console.log(id);
        const gettodoid=await todoDB.findOne({_id:id});

        res.status(200).json({gettodoid})


    } catch (error) {
        console.log(error);
    }

}

// Put

export const puttodo= async(req,res)=>{
    try {
        const {id}=req.params.id;
        const {title,description}= req.body;

        const iddata=await todoDB.findOneAndUpdate(id,{title:title,description:description})

        res.status(200).json({iddata})
        
    } catch (error) {
        console.log(error);

    }
}

// Delete

export const deletetodo= async(req,res)=>{
    try {
        const id=req.params.id;
        console.log(id);

        const deltetodo=await todoDB.findOneAndDelete({_id:id})

        
        res.status(200).send("deleted successfully")

    } catch (error) {
        console.log(error);
    }

}