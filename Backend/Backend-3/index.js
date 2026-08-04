const express=require("express");
const app=express();
const port =8080;

const path=require("path");

// app.use(express.static(path.join(__dirname,"/public")));

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

// app.get("/",(req,res)=>{
//     res.send("This is home");
// });

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/profile",(req,res)=>{
    res.send("This is profile");
});

// Passing data into EJS
app.get("/rolldice",(req,res)=>{
    //Assume that the value is send by database
    let diceval=Math.floor(Math.random()*6)+1
    res.render("rolldice.ejs",{diceval});
});



// Instagram EJS
// app.get("/ig/:username",(req,res)=>{
//     const followers=["adam","eve","john","jane","mike"];
//     let {username}=req.params;
//     res.render("instagram.ejs",{username,followers});
// });






// instagram page with EJS
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instaData=require("./data.json");
    const data=instaData[username];

    console.log(data);
    if(data){
        res.render("instaPage.ejs",{data});
    } else{
        res.render("error.ejs");
    }
    
});
 



app.listen(port,()=>{
    console.log(`Listening on Port ${port}`);
}); 
