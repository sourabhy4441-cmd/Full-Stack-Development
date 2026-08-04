// find max using for loop

// let num=[1,2,3,4,5,8,9,7,3,4,0];
// let max=num[0];
// // let max=[-1]
// for(let i=1;i<num.length;i++){
//     if(max<num[i]){
//         max=num[i];
//     }
// }
// console.log(max);   // 9




// using reduce method
let nums=[1,2,3,4,5,8,9,7,3,4,0];

let maxNum=nums.reduce( (max,el) => {
    if(el>max){
        return el;
    }
    else{
        return max;
    }
});
console.log(maxNum);   // 9




