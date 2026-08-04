Math.min(1,2,3,4,5);     //1
Math.min(-1,0,5,10,1,1,2,0)     // -1

//  EX 1
const arr1 = [1,2,3,4,5];
console.log(Math.min(...arr1));     //1

// EX 2
const arr2 = [1,2,3,4,5];
const arr3 = [6,7,8,9,10];
const arr4 = [...arr1,...arr2,...arr3];
console.log(arr4);     //[1,2,3,4,5,6,7,8,9,10]


// EX 3
let arr3=[1,2,3,4,5,6,7,8,,0,-1];
console.log(...arr);        // -1


