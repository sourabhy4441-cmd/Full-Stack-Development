const mongoose = require('mongoose');
const Chat = require("./models/chat");

main().then( ()=>{
    console.log("MongoDB connected successfully");
}) .catch( err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}


let allChats=([
    {
        from:"Sourabh",
        to:"Rohit",
        message:"Hello Rohit, How are you?",
        createdAt: new Date(), // Date is special func in JS which generate a date and time , where time is in UTC 
    },
    {
        from:"Sumit",
        to:"Sai",
        message:"Hello ,Are u in Town",
        createdAt: new Date(), // Date is special func in JS which generate a date and time , where time is in UTC 
    },
    {
        from:"Megh",
        to:"Sandy",
        message:"Sandy, Are youu free tommorow",
        createdAt: new Date(), // Date is special func in JS which generate a date and time , where time is in UTC 
    },
    {
        from:"Anu",
        to:"Shruti",
        message:"Hagrii, ahe hi",
        createdAt: new Date(), // Date is special func in JS which generate a date and time , where time is in UTC 
    },
    {
        from:"Sourabh",
        to:"Shubh..",
        message:"Shall we talk ",
        createdAt: new Date(), // Date is special func in JS which generate a date and time , where time is in UTC 
    },

]);

Chat.insertMany(allChats);