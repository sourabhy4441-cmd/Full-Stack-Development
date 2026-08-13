const mongoose = require('mongoose');

main().then( () => {
    console.log("MongoDB connected successfully");
}) .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

// Create Schema

const bookSchema = new mongoose.Schema( {
    title:{
        type:String,
        required:true,
        maxLength:20,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        default:0,
        min:0,
    },
    category:{
        type:String,
        enum:["Fiction", "Non-Fiction"],
    }
});

const Book = mongoose.model("Book",bookSchema);

// let book1 = new Book({
//     title:"Marvel Comics",
//     price:100,
//     category:"Fiction",
    
// });

// book1.save().then( (res) =>{
//     console.log(res);
// }) .catch( (err) =>{
//     console.log(err);
// });


// Update Schema

Book.findByIdAndUpdate("6a78b90dee311fd8f6e4faff", {price:-150}, {runValidators:true}) .then( (res) =>{
    console.log(res);
}) .catch( (err) =>{
    console.log(err);
});