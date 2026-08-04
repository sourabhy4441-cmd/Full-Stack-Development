let btn=document.querySelector("button");
console.dir(btn);

// btn.onclick=function(){
//     console.log("button was cilcked");
// }

// or

function sayHello(){
    alert("Hello");
};


// if we have more buttons

let btns=document.querySelectorAll("Hello");

btns.onclick=function(){
    alert("Hello");
};