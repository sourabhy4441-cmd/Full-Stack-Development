const express=require("express");
const app=express();
const port=8080;
const path=require("path");

// too use uuid 
const {v4:uuidv4}=require('uuid');

// to use method-override
const mehtodOverride = require("method-override");
app.use(mehtodOverride('_method'));

app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));


// to store data of all posts
let posts =[
    {
        
        id:uuidv4(),
        username:"apnacollege",
        content:"I love coding",
    },
    {
        id:uuidv4(),
        username:"Sourabh",
        content:"Hard work is imp to achieve success",
    },
    {
        id:uuidv4(),
        username:"Sai",
        content:"my 1st intership",
    },
] 


app.get("/posts",(req,res)=>{
    // res.send("server working well");
    res.render("index.ejs",{posts});
});

// it serve the form  
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

// to Add the new post
app.post("/posts",(req,res)=>{
    // console.log(req.body);
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    // res.send("post request working ");       // bar bar page change krna pdta hai
    res.redirect("/posts");     // to connect all the pages 
});

// view route
app.get("/posts/:id",(req,res)=>{
    let{id}=req.params;       // to retrieve id
    let post=posts.find((p) => id === p.id);
    // console.log(post);
    // res.send("request working");
    res.render("show.ejs",{post});

});

// patch 
app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newContent =req.body.content;
    let post=posts.find((p)=> id === p.id);
    post.content=newContent;
    console.log(post);
    res.redirect("/posts");

});

// edit route
app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let posts=posts.find((p) => id === p.id);
    res.render("edit.ejs",{ post });
});


// Destroy Route
app.delete("/posts/:id", (req,res)=>{
    let {id} = req.params;
    posts=posts.filter((p) => id !== p.id);
    res.redirect("/posts");
})


app.listen(port,()=>{
    console.log(`Listening port : ${port}`);
});