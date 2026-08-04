const data={
    email:"ironman@gmail.com",
    password:"abcd",
};
const dataCopy={...data, id:123 };
console.log(dataCopy);



// when we do with arrays it take indexes as the key and number of array as value
let arr=[1,2,3,4,5,6,7,8,9,0,11];
let obj1=[...arr];
console.log(obj1);

console.log(..."Hello"); 