const express = require('express');
const app = express();

const mongoose = require('mongoose');
const path = require('path');

// to require the model
const Chat = require("./models/chat");

// to use method-override
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.set("views",path.join(__dirname,"/views"));
app.set("view engine", "ejs");

// ExpressError
const ExpressError = require("./ExpressError");

// to require the style.css from public folder
app.use(express.static(path.join(__dirname,"public")));

// to parse the data
app.use(express.urlencoded({extended:true}));


main().then( ()=>{
    console.log("MongoDB connected successfully");
}) .catch( err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}



let Chat1 = new Chat({
    from:"Sourabh",
    to:"Rohit",
    message:"Hello Rohit, How are you?",
    createdAt: new Date(), // Date is special func in JS which generate a date and time , where time is in UTC 
});

Chat1.save().then(res => {
    console.log(res);
});

// Home Route
app.get("/",(req,res)=>{
    res.send("Working..");
});

// Index Route
app.get("/chats" , async(req,res)=>{
    try{
        let chats = await Chat.find();
        // console.log(chats);
        res.render("index.ejs",{chats});
    } catch(err){
        next(err);
    }
});


// New Route
app.get("/chats/new",(req,res)=>{
    // throw new ExpressError(404,"Page not found");
    res.render("new.ejs");
});



// Create Route
app.post("/chats",asyncWrap(async(req,res,next)=>{
    
        let {from, to, message } =  req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            message: message,
            createdAt: new Date(),
        });

        await newChat.save();
        res.redirect("/chats"); 
   

    })
);



function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err) => next(err));  
    };
}



// SHOW Route
app.get("/chats/:id", asyncWrap(async (req,res,next)=>{
    
        let {id} = req.params;
        let chat = await Chat.findById(id);
        if(!chat){
            next(new ExpressError(404,"Chat not found"));
        }
        res.render("edit.ejs", {chat});
    })
);




// Edit Route
app.get("/chats/:id/edit", async (req,res)=>{
    try{
        let {id} = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs", {chat});
    }
    catch(err){
        next(err);
    }
});



// Update Route
app.put("/chats/:id",asyncWrap(async (req,res)=>{
   
        let {id} = req.params;
        let {message: newMessage} = req.body;
        let updatedChat = await Chat.findByIdAndUpdate(
            id, 
            {message:newMessage},
            {runValidators:true, new:true },
        );
        console.log(updatedChat);
        res.redirect("/chats");
    
    })
);




// Destroy ROUTE
app.delete("/chats/:id",asyncWrap(async(req,res)=>{
    
        let {id} = req.params;
        let deleteChat = await Chat.findByIdAndDelete(id);
        console.log(deleteChat);
        res.redirect("/chats");
   })
);



// to hide name we create another middleware to handle the error
const handleValidationErr = (err)=>{
    console.log("This was a validation error. Please follow rules");
    console.dir(err.message);
    return err;

}
app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name === "ValidationError"){
        err = handleValidationErr(err);
    }
    next(err);
});



// Error Handling Middleware
app.use((err,req,res,next)=>{
    let {status=500, message="Something went wrong"} = err;
    res.send(status).send(message);
});



app.listen("8080" , ()=>{
    console.log("Server is listening on port 8080");
});