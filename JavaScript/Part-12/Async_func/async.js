

// create async function
async function greet(){
    throw "404 page not found";
    return "hello";
}  // ye bhi hame promises return krta hai 

greet()
.then( (result)=>{
    console.log("promise was resolved");
    console.log(result);
})
.catch( (err)=>{
    console.log("promise was rejected",err)
});


// ham arrow function ko bhi async bana sakte hai
let demo=async()=>{
    return 5;
};
demo();