// create a function to find the min number in an array

// let nums=[1,2,3,4,5,9,0,6,9,7,-1,22,3,0];

// let minVal=nums.reduce( (min,el) =>{
//     if(el<min){
//         return el;
//     }
//     else{
//         return min;
//     }
// });
// console.log(minVal);



//  using function

function getMin(nums){
    let min=nums.reduce( (min,el) => {
        if(el<min){
            return el;
        }
        else{
            return min;
        }
    });
    return min;
}

let nums2=[1,2,3,4,5,9,0,6,9,7,-1,22,3,0];
console.log(getMin(nums2));   // -1
console.log(getMin([10,20,30,40,50]));   // 10