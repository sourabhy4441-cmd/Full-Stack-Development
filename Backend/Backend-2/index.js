// import express from 'express'
const express = require('express');

const app = express();
let port = 3000; 

// it listen the request 
app.listen(port, () => {
  console.log(`app is Listening on port${port}`);
});

// app.use( (req,res)=>{
//     console.log("request received");

//     // res.send("Hello Sourabh Yadav");

//     // res.send({
//     //     name: "Sourabh Yadav",
//     //     age:21,
//     //     email: "sourabh@example.com",
//     // });

//     // send html file
//     let code=" <h1> fruits </h1> <ul> <li> Apple </li> <li> Banana </li> <li> Mango </li> </ul>";
//     res.send(code);
// });



app.get("/",(req,res)=>{
  res.send("you contracted the root path ");
});

app.get("/apple",(req,res)=>{
  res.send("you contracted the apple path ");
});

app.get("/orange",(req,res)=>{
  res.send("you contracted the orange path ");
});
// app.get("*",(req,res)=>{
//   res.send("404 page not found");
// });


app.post("/",(req,res)=>{
  res.send("you contracted the post path ");
});