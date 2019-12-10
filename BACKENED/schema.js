const mongoose=require("mongoose")
const schema=mongoose.Schema
const registeredSchema =new schema({
    
        NAME:String,
        USERNAME:String,
        PASSWORD:String,
        CONFIRMPASSWORD:String,
        DATEOFBIRTH:Date,
        MOBILENUMBER:Number
    })
    
    //export the model for above schema
    module.exports=mongoose.model("secondcampus",registeredSchema)

