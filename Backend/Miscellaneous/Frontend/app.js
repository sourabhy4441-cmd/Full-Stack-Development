

// let arr1=[1,2,3,4];
// let arr2=[1,2,3,4];

// arr1.sayhello=()=>{
//     console.log("Hello");
// };

// arr2.sayhello=()=>{
//     console.log("Hello");
// };

// console.log(arr1.__proto__);
// arr1.__proto__.push=(n)=>{
//     console.log("pushing number :",n);
// };
// console.log(arr1.push(5));




// 1. Factory Function

// function PersonMaker(name,age){
//     const person={
//         name:name,
//         age:age,

//         talk(){
//             console.log(`Hi, Myself ${this.name} and im ${this.age} years old `);

//         },

//     };
//     return person;
// }

// let p1=PersonMaker("Sourabh",20);
// console.log(p1.talk());

// let p2=PersonMaker("Sai",21);
// console.log(p2);




// 2. New Operator
// Constructors :- it doesn't return anything & start with capital letters

// function Person(name,age){
//     this.name= name;
//     this.age=age;
// }

// Person.prototype.talk= function(){
//     console.log(`Hi, my name is ${this.name} & im ${this.age}`);
// }

// let p1=new Person("Sourabh",20);
// let p2=new Person("Sai",21);

// console.log(p1);
// console.log(p1.talk());
// console.log(p2);




// 3. classes 

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//         console.log(`Hi, my name is ${this.name} & im ${this.age}`);
//     }
// }
// let p1=new Person("Sourabh",20);
// let p2=new Person("Sai",21);

// console.log(p1);
// console.log(p1.talk());
// console.log(p2);





// Inheritence

class Person{
    constructor(name,age){
        console.log("person class constructor");
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name} & im ${this.age}`);
    }
}

class Student extends Person{
    constructor(name,age,marks){
        console.log("student class constructor");
        super(name,age);    // Parent class constructor is being called
        this.marks=marks;
    }
}

class Teacher extends Person{
    constructor(name,age,subject){
        console.log("student class constructor");
        super(name,age);    // Parent class constructor is being called
        this.subject=subject;
    }
}

let stu1=new Student("Sourabh",20,95);
console.log(stu1);

console.log(stu1.marks);
console.log(stu1.talk());

let t1=new Teacher("Shradha",30,"FullStack");
console.log(t1);

console.log(t1.subject);
console.log(t1.talk());
