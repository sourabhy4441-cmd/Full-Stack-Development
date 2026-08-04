let arr=[1,2,3,4,5,6,7,8];

let square=arr.map( (el)=>{
    return el*el;
});
console.log(square)

const sum=square.reduce( (acc,cur) => acc+cur,0);
console.log(sum);

let avg=sum/arr.length;

console.log(avg);