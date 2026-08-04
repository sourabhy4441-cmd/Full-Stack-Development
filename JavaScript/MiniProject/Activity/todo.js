let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click", function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");

    // li ke child mai value dalne ke liye
    // delBtn (button) uska parent li item hai
    item.appendChild(delBtn);
    // li ka parent ul hai
    ul.appendChild(item);
    // console.log(inp.value);
    // hamako input mai value add krne ke bad firse empty chahiye tab,
    inp.value="";
});


let delBtns=document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click", function(){
        // we have to delete the parent tag
        let parent=this.parentElement;
        console.log(parent);
        parent.remove();
    });
}


// yaha par sirf html mai jo list elemets hai vahi delete honge 
// jo ham add krte hai vo nahi delete honge
// tab ham EVENT DELEGATION ka use karenge