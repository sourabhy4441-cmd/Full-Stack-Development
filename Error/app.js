// const express= require("express");
// const app = express();

// // const expressError = require("./ExpressError");


// const checkToken = (req,res,next)=>{
//     let {token} = req.query;
//     if(token === "giveaccess"){
//         next();
//     }
//     throw new expressError(401,"Access Denied");
// };



// app.get("/",(req,res)=>{
//     res.send("Its me Root");
// });

// app.get("/random",(req,res)=>{
//     res.send("this is Random page");
// });



// // error handling middleware
// app.get("/err",(req,res)=>{
//     acbd=acbd;
// });
// // app.use((err,req,res,next)=>{
// //     console.log(err);
// //     next(err);
// // }); 

// app.use((err,req,res,next)=>{
//     // res.status(404).send("Page Not Found");

//     // console.log("---ERROR---");
//     // res.send(err);

//     let {status=500,message="Internal Server Error"} = err;
//     res.status(status).send(message);
// });


// // Activity
// app.get("/admin",(req,res)=>{
//     throw new ExpressError(403,"Access to admin is Forbidden");
// });


// app.listen(8080,()=>{
//     console.log("server is running on port 8080");
// });