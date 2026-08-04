const express=require("express");
const app=express();
const port = 8080;

const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));



app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instaData=require("./data.json");
    const data=instaData[username];

    res.render("instagram.ejs",{data});
});


app.listen(port,()=>{
    console.log(`Listening on Port ${port}`);
}); 
