const btns=document.querySelectorAll("button");

for(btn of btns){
    btn.addEventListener("click",(e)=>{
        console.log("btton was clicked");
});
}