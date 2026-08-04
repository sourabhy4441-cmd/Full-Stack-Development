//  Inheritence

// class Person{
//     constructor(name,age){
//         console.log("person class constructor");
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//         console.log(`Hi, my name is ${this.name} & im ${this.age}`);
//     }
// }

// class Student extends Person{
//     constructor(name,age,marks){
//         console.log("student class constructor");
//         super(name,age);    // Parent class constructor is being called
//         this.marks=marks;
//     }
// }

// class Teacher extends Person{
//     constructor(name,age,subject){
//         console.log("student class constructor");
//         super(name,age);    // Parent class constructor is being called
//         this.subject=subject;
//     }
// }

// let stu1=new Student("Sourabh",20,95);
// console.log(stu1);

// console.log(stu1.marks);
// console.log(stu1.talk());

// let t1=new Teacher("Shradha",30,"FullStack");
// console.log(t1);

// console.log(t1.subject);
// console.log(t 1.talk());




// example 2

class Mammal{     // Parent class 
    constructor(name){
        this.name=name;
        this.type="warm-blooded";
    }
    eat(){
        console.log("I am Eating");
    }
}

class Dog extends Mammal{   //Child class
    constructor(name){
        super(name);
    }
    bark(){
        console.log("wooff...");
    }
}

class Cat extends Mammal{   // child class
    constructor(name){
        super(name);
    }
    meow(){
        console.log("Meooww....");
    }
}

let dog1=new Dog("Bruno");
let dog2=new Dog("tuffie");
console.log(dog1);
console.log(dog1.type);
console.log(dog2.name);
console.log(dog1.eat());
console.log(dog1.bark());


let cat1=new Cat("Marie");
console.log(cat1);
console.log(cat1.name);
console.log(cat1.type);
console.log(cat1.eat());
console.log(cat1.meow());