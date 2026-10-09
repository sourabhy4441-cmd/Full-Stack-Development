const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    from:{
        type:String,
        required:true,
    },
    
    message:{
        type:String,
        maxLength:50,
    },
    to:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        required:true,
    }
});

const Chat = mongoose.model("Chat",chatSchema);

module.exports = Chat;