const express= require("express");
const app = express();


app.use( (req,res,next)=>{
    req.time = new Date(Date.now());
    console.log("Middleware is running");
    console.log(req.method , req.hostname, req.path, req.time);
    next();
})

app.get("/",(req,res)=>{
    res.send("Its me Root");
});

app.get("/random",(req,res)=>{
    res.send("this is Random page");
});


// API
app.get("/api",(req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    res.send("Access Denied");
})
app.get("/api",(req,res)=>{
    res.send("data is here");
});

// Using Multiple Middleware
const checkToken = (req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    res.send("Access Denied");
}
app.get("/api",checkToken,(req,res)=>{
    res.send("data is here");
});



// error handling middleware
app.get("/err",(req,res)=>{
    acbd=acbd;
});
app.use((err,req,res,next)=>{
    console.error(err);
    res.status(500).send("Something went wrong!");
});

app.listen(8080,()=>{
    console.log("server is running on port 8080");
});