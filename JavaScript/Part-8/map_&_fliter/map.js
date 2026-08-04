let num =[1,2,3,4,5];

let double=num.map(function(el){
    // return el*2;    [2,4,6,8,10]
    return el*el;    // to store sqare of numbers
});
console.log(double);   // [1,4,9,16,25]


// if we don not  retur anything then it will return undefined in new array with same length as original array
let double2=num.map(function(el){});
console.log(double2);     // undefined,undefined,undefined,undefined,undefined



// for objects

let students=[
    {
        name:"Sourabh",
        age:20,
        marks:95
    },
    {
        name:"Rohit",
        age:21,
        marks:85
    },
    {
        name:"Sanket",
        age:22,
        marks:75
    }
];

let gpa=students.map( (el)=>{
    return el.marks/10;
});
console.log(gpa);