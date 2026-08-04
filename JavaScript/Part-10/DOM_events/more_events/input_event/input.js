let form=document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
});

let user=document.querySelector("#user");

user.addEventListener("input", function(){
    console.log("input value");
    console.log("final value= ",this.value);
});