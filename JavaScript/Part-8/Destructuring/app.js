// without using destructuring
let names=["Sourabh","Sai","Sanket","Megh"]
let winner=names[0];        // sourabh
let runnerup=names[1];      //sai


//  with using Destructuring
let names=["Sourabh","Sai","Sanket","Megh"]
let [winner, runnerup]=names;

console.log(winner);    // sourabh
console.log(runnerup);      // sai



// Destructuring with Rest 

let names=["Sourabh","Sai","Sanket","Megh","Sarthak","Sandy","Anu","Shruti"];
let [winner, runnerup, ...others]=names;

console.log(others);     // sanket,megh,sarthak...