//  EX 1
function sum(a,b=3){
    return a+b;
}
console.log(sum(1,4));        //5
console.log(sum(1));         //4
console.log(sum(1,2));      //3
console.log(sum());        //NaN



// EX 2
function multi(x=3,y=10){
    return x*y;
}

console.log(multi());            //30

console.log(multi(2,5));        //10
console.log(multi(2));           //20




// deafult case
function sub(a=5,b){
    return a-b;
}
console.log(sub(10,2));        //8
console.log(sub(10));       //NaN