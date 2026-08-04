// forEach

// let arr=[1,2,3,4,5];
// let print=function(element){
//     console.log(element);
// }
// arr.forEach(print);


// or


let arr2=[9,8,7,6,5];

arr2.forEach(function(element){
    console.log(element);
});


//  using array function 

let arr3=[1,2,3,4,5];
arr3.forEach((element)=>{
    console.log(element);
});


// for objects 


let arr4=[
    {
        name:"Sourabh",
        age:20
    },{
        name:"Rohit",
        age:21
    },{
        name:"Sanket",
        age:22
    }
];
arr4.forEach((student)=>{
    console.log(student);
});
arr4.forEach((student)=>{
    console.log(student.name);
});
// we can also change the argument name in forEach function
arr4.forEach((element)=>{
    console.log(element.age);
});