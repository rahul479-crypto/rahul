//import express module
const exp=require("express");
//call express function
const app=exp();
//import path
const path=require("path");
//now connect the server with path module
app.use(exp.static(path.join(__dirname, "./dist/frontend")));

//import the userapi and adminapi
const adminapp=require("./BACKENED/adminapi")
const userapp=require("./BACKENED/userapi")
//inform the express to forward request object to specific routes based upon path

app.use("/user",userapp)

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server listening on portno ${PORT}...`)
})
