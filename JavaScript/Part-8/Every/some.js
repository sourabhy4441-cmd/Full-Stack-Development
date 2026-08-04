let nums=[1,2,3,4,5,6];
let ans=nums.some( (el) =>{
    return el%2==0;

});
console.log(ans);   // true


// if no one is true then it returns false
let ans2=nums.some( (el) =>{
    return el>10;
});
console.log(ans2);  // false


