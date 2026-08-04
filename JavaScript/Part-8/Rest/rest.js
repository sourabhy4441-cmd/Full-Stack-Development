function sum(...args){
    for(let i=0;i<args.length;i++){
        console.log("you gave us:",args[i]);
    }
}


// with argument
function min (...args){
    return args.reduce( (min,el) => {
        if(min>el){
            return el;
        }
        else{
            return min;
        }
    })
}
console.log(min(1,2,3,4,4,5,6,7,8,8,8,9,0,1,-1));       //-1




// with both argument and paramters
function min (para,...args){
    return args.reduce( (min,el) => {
        if(min>el){
            return el;
        }
        else{
            return min;
        }
    })
}
console.log(min("hello",1,2,3,4,4,5,6,7,8,8,8,9,0,1,1));        //"hello", -1



// the first element is parameter
function min (para, ...args){
    return args.reduce( (min,el) => {
        if(min>el){
            return el;
        }
        else{
            return min;
        }
    })
}
console.log(min(10, 2,3,4,4,5,6,7,8,8,8,9,0,1,-1));       // 10 , -1