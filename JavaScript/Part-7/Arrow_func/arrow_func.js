const sum=(a,b) =>{
    console.log(a+b);
};console.log(sum(5,10));   // 15

const square=(a) =>{
    console.log(a*a);
};console.log(square(5));   // 25

const greet=() =>{
    console.log("Hello World");
};console.log(greet());   // Hello World

// if we have only one parameter then we can omit the parentheses
const double=a =>{
    console.log(a*2);
};console.log(double(5));   // 10

// if we have only one statement in the function body then we can omit the curly braces and the return keyword
const cube=a => a*a*a;
console.log(cube(5));   // 125
// single parameter and single statement mai ham without parameters ke bhi likh sakte hai
