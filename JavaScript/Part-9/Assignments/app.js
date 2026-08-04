//  Create a new input and button element on the page using javascript on;y set the text of button to click me

let input=document.createElement("input");
let button=document.createElement("button");

button.innerText="Click Me ";

document.querySelector('body').append(input);
document.querySelector('body').append(button);


// add folllowing attributes to the element
//   - change placeholder value of input to "username"
//   - change the id of buttton to "btn"

button.setAttribute("id","btn");
input.setAttribute("placeholder","username");



// Access the btn using the querySelector and the button id. 
// change the button background color to blue and text color to white

let btn=document.querySelector('#btn');
btn.classList.add("btnStyle");



//  Create an h1 element on the page and set its text to "DOM Practice " underlined, change its color to purple.

let h1=document.createElement("h1");
h1.innerHTML="DOM Practice";
document.querySelector("body").append("h1");



//  create a p tag on the page and set its text to "Apna College Delta Practice", where Delta is Bold

let p=document.createElement("p");
p.innerHTML= " Apna College <b> Delta </b> Practice ";
document.querySelector("body").append(p);