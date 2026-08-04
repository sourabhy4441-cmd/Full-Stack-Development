let obj1={
    name:"Sourabh",
    Roll:43,
    Department: CSE(AIML),
};
let obj2={
    a:1,
    b:2,
    c:3,
};

let newObj=(bj1,obj2)=> ({...obj1, ...obj2});
console.log(newObj);