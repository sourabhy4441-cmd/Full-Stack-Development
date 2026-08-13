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
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs",{chats});
});


// New Route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});



// Create Route
app.post("/chats",(req,res)=>{
    let {from, to, message } =  req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        message: message,
        createdAt: new Date()
    });
    newChat.save().then(res =>{
        console.log("chat was saved ");
    }).catch(err =>{
        console.log(err);
    });
    res.redirect("/chats");
});



// Edit Route
app.get("/chats/:id/edit", async (req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
});



// Update Route
app.put("/chats/:id",async (req,res)=>{
    let {id} = req.params;
    let {message: newMessage} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id, 
        {message:newMessage},
        {runValidators:true, new:true },
    );
    console.log(updatedChat);
    res.redirect("/chats");
});




// Destroy ROUTE
app.delete("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let deleteChat = await Chat.findByIdAndDelete(id);
    console.log(deleteChat);
    res.redirect("/chats");
});




app.listen("8080" , ()=>{
    console.log("Server is listening on port 8080");
});