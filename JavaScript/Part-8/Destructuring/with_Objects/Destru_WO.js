const student = {
    name:"karan",
    class:9,
    age:14,
    subjects:["hindi","english","math","science","social studies"],
    username:"karan123",
    password: 1234,
};
// jab hame sirf username aur password ki jarurat ho tab ham access krte 
const {username:user,password:pass, city:place="mumbai" }=student;

console.log(user);      // karan123
console.log(pass);      //1234
console.log(username);      // undefined
console.log(password);  // undefined
console.log(place)      // mumbai
console.log(city)       //undefined