// let form=document.querySelector("form");

// form.addEventListener("submit", function(){
//     console.log("submit the event");
//     alert("submit the event");
//     // here it redirect into action page and to avoid this 
//     // we use,
//     event.preventDefault();
// });




// let form=document.querySelector("form");

// form.addEventListener("submit", function(){

//     event.preventDefault();

//     let user=document.querySelector("#user");
//     let pass=document.querySelector("#pass");

//     alert(`hi ${user.value}, your password is set to ${pass.value}`);

// });





let form=document.querySelector("form");

form.addEventListener("submit", function(){

    event.preventDefault();
    console.dir(form);

    console.dir(elements);
    console.log(elements[0]);
    console.log(elements[1]);
    
});

// we use another method

let form=document.querySelector("form");

form.addEventListener("submit", function(){

    event.preventDefault();
    console.dir(form);
     
    let user=this.elements[0];
    let pass=this.elements[1];
    alert(`hi ${user.value}, your password is set to ${pass.value}`);
    
});