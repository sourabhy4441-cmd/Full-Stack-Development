let nums=[1,2,3,4,5,7,8,10,12,19,18,17];
let ans=nums.filter( (el)=>{
    return el%2==0;
});
console.log(ans);   // [2,4,8,10,12,18]  

let ans2=nums.filter( (el) =>{
    return el<8;
});

let ans3=nums.filter( (el) =>{
    return el%2 !=0;
});
