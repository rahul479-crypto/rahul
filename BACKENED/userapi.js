//import the express module
const exp=require("express");
//create mini express object
const userapi=exp.Router();
//import mongoose module
const mongoose=require("mongoose")
//import schema
const schema=require("./schema")
//import body-parser
const bodyParser=require("body-parser")
userapi.use(bodyParser.json());


//connect to database with dburl
dburl="mongodb+srv://rahul:rahul@cluster0-zbgco.mongodb.net/hybrid?=true&w=majority"


//establish connection
mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true}).then((result)=>{
    console.log("database connection established successfully")
}).catch((err)=>{
 console.log("error occured in connecting to database",err)
})

const bcrypt=require("bcrypt")

userapi.post('/register',(req,res)=>{

    console.log("its post request handler..");
    console.log(req.body);
    schema.findOne({USERNAME:req.body.username}).exec().then((result)=>{
        console.log("ani result is:",result);
        
    if (result!=null) {
    res.json({message:"Id already exists"})
    }
    else{
    bcrypt.hash(req.body.password,7).then((result)=>{
    req.body.password=result;
    let productDoc= new schema({
        NAME:req.body.name,
        USERNAME:req.body.username,
        PASSWORD:req.body.password,
        CONFIRMPASSWORD:req.body.confirmpassword,
        DATEOFBIRTH:req.body.date,
        MOBILENUMBER:req.body.number
        
    
    })
    productDoc.save();
    
    
    res.json({message:"Successfully Registered"})
    
    })
    }
    }).catch((error)=>{
    console.log("error in inserting",error);
    })
    })
    
    
    userapi.post('/login',(req,res)=>{
    console.log("req.body is",req.body);
    
    schema.findOne({Username:req.body.username}).exec().then((userObj)=>{
        console.log("user obj is",userObj);
        
    if (userObj==null) {
    res.json({message:"Invalid Username"})
    }
    else{
    console.log(userObj);
    bcrypt.compare(req.body.password,userObj.Password).then((result)=>{
    if(result==false){
    res.json({message:"Invalid Password"})
    }
    else{
    
    jwttoken({username:userObj.username},'abcde',{expiresIn:20}).then((result)=>{
    res.json({message:"LoggedIn Succesfully",
    token:result,
    username:req.body.username})
    })
    }
    })
    }
    }).catch((error)=>{
    console.log("error is",error);
    })
    })
    //for login request
    userapi.post("/login",(req,res)=>{
        schema.findOne({USERNAME:req.body.username}).exec().then(userObj=>{
            if (userObj==null) {res.json({
            message:"user name is invaid"    
            })
                
            }
            else {
                bcrypt.compare(req.body.password,userObj.PASSWORD).then(result=>{
                    if (result==true) {
                        res.json({
                            message:"logged in successfully"
                        })
                    }
                    else {res.json({message:"invalid password"})}
                })
            }
        })
        

    })
//export the userapi
module.exports=userapi
 