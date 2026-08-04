let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click", function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");

    // delBtn (button) uska parent li item hai
    item.appendChild(delBtn);

    // li ka parent ul hai
    ul.appendChild(item);
  
    // hamako input mai value add krne ke bad firse empty chahiye tab,
    inp.value="";
});

// ham li ke parent(ul) par event listener add karenge
ul.addEventListener("click", function(event){
    // console.log(event.target)
    
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
        console.log("deleted");
    }
});