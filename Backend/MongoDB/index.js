const mongoose = require('mongoose');

main().then( () => {
    console.log("MongoDB connected successfully");
}) .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age:Number,
});

const User = mongoose.model("User",userSchema);


// Insert in mongoose

// Inserting a single document in mongoose is done using the save() method. We can create a new instance of the model and then call the save() method to insert it into the database.

// const user1 = new User({
//     name:"Adam",
//     email:"adam@example.com",
//     age:30,
// });

// user1.save();  // it is a Promise, so we can use .then() and .catch() to handle the result

// we use promises here to handle the result of the save operation

// const user2 = new User({
//     name:"Eve",
//     email:"eve@example.com",
//     age:25,
// });

// user2.save().then( (res) =>{
//     console.log(res);
// }) .catch( (err) =>{
//     console.log(err);
// });


// Inserting multiple documents in mongoose is done using the insertMany() method. We can create an array of objects and then call the insertMany() method to insert them into the database.

// User.insertMany([
//     {name:"John", email:"john@example.com", age:30},
//     {name:"Jane", email:"jane@example.com", age:25},
//     {name:"Bob", email:"bob@example.com", age:35},
// ]) .then( (res) =>{
//     console.log(res);
// });



// find in mongoose

// User.find( {age: {$gte: 35}} )
// .then( (res) =>{
//     console.log(res);
//     // console.log(res[0].name);
// }) .catch( (err) =>{
//     console.log(err);
// });

// findOne() method is used to find a single document in mongoose. It returns the first document that matches the query criteria. If no document is found, it returns null.

User.findOne( {age: {$gte: 35}} )
.then( (res) =>{
    console.log(res);
    // console.log(res[0].name);
}) .catch( (err) =>{
    console.log(err);
});


// find by id in mongoose

// User.find( {_id: "6a781981cae164bb9550b9f0"} )
// .then( (res) =>{
//     console.log(res);
//     // console.log(res[0].name);
// }) .catch( (err) =>{
//     console.log(err);
// });


// User.findById("6a781981cae164bb9550b9f0")
// .then( (res) =>{
//     console.log(res);
//     // console.log(res[0].name);
// }) .catch( (err) =>{
//     console.log(err);
// });


// Update One in mongoose

// User.updateOne( {name:"John"} ,  {age: 40} )
// .then( (res) =>{
//     console.log(res);
//     // console.log(res[0].name);
// }) .catch( (err) =>{
//     console.log(err);
// });

// Update Many in mongoose

// User.updateMany( {name: "Bob"} ,  {age: 40} )
// .then( (res) =>{
//     console.log(res);
//     // console.log(res[0].name);
// }) .catch( (err) =>{
//     console.log(err);
// });


// findOneAndUpdate() method is used to find a single document and update it in mongoose. It returns the updated document. If no document is found, it returns null.

// User.findOneAndUpdate( {name: "Bob"} ,  {age: 20}, {new: true}  )
// .then( (res) =>{
//     console.log(res);
// }) .catch( (err) =>{
//     console.log(err);
// });



// findByIdAndUpdate() method is used to find a single document by its id and update it in mongoose. It returns the updated document. If no document is found, it returns null.

// User.findByIdAndUpdate( "6a781981cae164bb9550b9f0" ,  {age: 20}, {new: true}  )
// .then( (res) =>{
//     console.log(res);
// }) .catch( (err) =>{
//     console.log(err);
// });



// Delete One in mongoose

// User.deleteOne( {name:"John"}).then( (res) =>{
//     console.log(res);
// });



// Delete Many in mongoose

// User.deleteMany( {name:"Jane"}).then( (res) =>{
//     console.log(res);
// });


// findOneAndDelete() method is used to find a single document and delete it in mongoose. It returns the deleted document. If no document is found, it returns null.

// User.findOneAndDelete( {name:"Adam"}).then( (res) =>{
//     console.log(res);
// });


// findByIdAndDelete() method is used to find a single document by its id and delete it in mongoose. It returns the deleted document. If no document is found, it returns null.

User.findByIdAndDelete("6a78173128833500df9dfeb7").then( (res) =>{
    console.log(res);
});