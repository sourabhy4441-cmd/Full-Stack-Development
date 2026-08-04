// import express from 'express'
const express = require('express');

const app = express();
let port = 3000; 

// it listen the request 
app.listen(port, () => {
  console.log(`app is Listening on port${port}`);
});


app.get("/",(req,res)=>{
  res.send("you contracted the root path ");
});

// app.get("/:username",(req,res)=>{
//     console.log(req.params);
// //   let username=req.params.username;
// //   res.send(`you contracted the path with username ${username}`);
// });

// app.get("/:username/:id",(req,res)=>{
//     let {username,id}=req.params;
//     res.send(`you contracted the path with username ${username}`);
// });



// query string 

app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("Nothing searched");
    }
    res.send(`these are my search results for ${q}`);
});