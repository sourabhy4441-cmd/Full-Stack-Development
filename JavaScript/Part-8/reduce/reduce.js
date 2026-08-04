let nums=[1,2,3,4];
let finalVal=nums.reduce( (result,element) => {
    return result+ element;
});
console.log(finalVal);   // 10



let finalVal2=nums.reduce( (result,element) => {
    return result* element;
});
console.log(finalVal2);   // 24


let num2=[1,2,3,4,5];
let finalVal3=num2.reduce( (result,element) => {
    return result+ element;
},15);
console.log(finalVal3);   // 30


 