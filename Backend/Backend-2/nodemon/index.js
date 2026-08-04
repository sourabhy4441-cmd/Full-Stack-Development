
const express = require('express');

const app = express();
let port = 3000; 
 
app.listen(port, () => {
  console.log(`app is Listening on port${port}`);
});





app.get("/",(req,res)=>{
  res.send("hello Im Root ");
});

// app.get("/apple",(req,res)=>{
//   res.send("you contracted the apple path ");
// });

// app.get("/orange",(req,res)=>{
//   res.send("you contracted the orange path ");
// });

// app.post("/",(req,res)=>{
//   res.send("you contracted the post path ");
// });



// path parameters

app.get("/:username",(req,res)=>{
    console.log(req.params);
//   let username=req.params.username;
//   res.send(`you contracted the path with username ${username}`);
});

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    res.send(`you contracted the path with username ${username}`);
});