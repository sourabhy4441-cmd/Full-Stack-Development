// for even numbers 

let arr=[2,4,6,8];
let ans=arr.every( (el) =>{
    return el%2 ==0;
});
console.log(ans);   // true



let ans2=arr.every( (el) =>{
    return el%4 ==0;
});
console.log(ans2);  // false



//  if array containd any odd number then it will return false
let arr2=[2,4,6,7];
let ans3=arr2.every( (el) =>{
    return el%2 ==0;
});
console.log(ans3);  // false