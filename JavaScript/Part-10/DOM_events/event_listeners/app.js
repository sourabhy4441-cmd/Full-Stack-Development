// let btns=document.querySelectorAll("button");
// for(btn of btns){
//     btn.onclick=sayHello;
//     btn.onclick=sayName;
//     // it will perform only one function 
// }
// function sayHello(){
//     alert("Hello");
// }

// function sayName(){
//     alert("apna College");
// }




// use Event listener
// let btns=document.querySelectorAll("button");
// for(btn of btns){

//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);
//     // this will perform both the functions
// }
// function sayHello(){
//     alert("Hello");
// }

// function sayName(){
//     alert("apna College");
// }



// 
let btns=document.querySelectorAll("button");
for(btn of btns){

    btn.addEventListener("dblclick", function(){
        console.log("You Double Clicked Me");
    });
}
function sayHello(){
    alert("Hello");
}

function sayName(){
    alert("apna College");
}