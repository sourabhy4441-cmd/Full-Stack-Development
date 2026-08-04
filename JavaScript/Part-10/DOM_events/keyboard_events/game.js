let inp=document.querySelector("input");

inp.addEventListener("keydown", function(event){
    // console.log(" code =", event.code);  // Arrowup, Arrowdown, Arrowleft, Arrowright
// for event code
    // if(event.code=="Arrowup"){
    //     console.log("character move forward");
    // }
    // else if(event.code=="Arrowdown"){
    //     console.log("character moves backward");
    // }
    // else if(event.code=="Arrowleft"){
    //     console.log("character moves left");
    // }
    // else if(event.code=="Arrowright"){
    //     console.log("character moves right");
    // }
    // else{
    //     console.log("default")
    // }


// for event key
    console.log(" code =", event.code);  // Arrowup, Arrowdown, Arrowleft, Arrowright
    if(event.code=="KeyU"){
        console.log("character move forward");
    }
    else if(event.code=="KeyD"){
        console.log("character moves backward");
    }
    else if(event.code=="KeyL"){
        console.log("character moves left");
    }
    else if(event.code=="KeyR"){
        console.log("character moves right");
    }
    else{
        console.log("default")
    }
});