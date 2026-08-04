const express=require("express");
const app= express();
const port=8080;


app.use(express.urlencoded({extended:true}));

app.get("/register",(req,res)=>{
    let {user,password}=req.query;
    res.send(`GET request received for user: ${user}`);
})

app.post("/register",(req,res)=>{
    // console.log(req.body);
    let {user,password}=req.body;
    res.send(`POST request received for user: ${user}`);
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});