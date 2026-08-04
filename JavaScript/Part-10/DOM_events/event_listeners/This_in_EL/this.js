// let btn=document.querySelector("button");
// btn.addEventListener( "click", function(){
//     console.log(this);      // <button> click me </button>

//     // 
//     console.dir(this);
//     console.dir(this.innerText);

//     // change background color
//     this.style.backgroundColor="pink";
// });




// if we have number of tags then we create more number of evenListener 
// thats why we restured it


let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");
let p=document.querySelector("p");

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor="pink";
}
btn.addEventListener("click",changeColor);

h3.addEventListener("click",changeColor);

h1.addEventListener("click",changeColor);

p.addEventListener("click",changeColor);