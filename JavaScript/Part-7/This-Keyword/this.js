const student = {
    name:"Sourabh",
    age:20,
    Math:93,
    Science:95,
    English:90,
    
    getAvg(){
        let avg=(this.Math +this.Science + this.English)/3;
        console.log(avg);   // 92.66666666666667
        // return avg;
        console.log(this);    // all the properties are returned
        console.log(this.name);     // Sourabh
        console.log(`${this.name} got Average marks of ${this.avg}`);
    }
}
console.log(student.name);  // Sourabh  - it print first then go to getAvg function 
console.log(student.getAvg());



// if we write this keyword in outside the object (global scope) then it will return the global object (window in browser) and in node js it will return empty object
console.log(this);   // in browser it will return window object and in node js it will return empty object

function getAvg(){
        let avg=(this.Math +this.Science + this.English)/3;
        console.log(avg);   
       
        console.log(this);    
        console.log(this.name);     
        console.log(`${this.name} got Average marks of ${this.avg}`);
    }