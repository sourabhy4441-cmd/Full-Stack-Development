function savetoDb(data,success,failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        success();
    }
    else{
        failure();
    }
}
// ek save hogaya(success) tabhi dusra save kro 
savetoDb( "apna college" , ()=>{  // success 1
    console.log("success: your data was saved ");
    savetoDb("hello world ", ()=>{  //success 2
        console.log("success2 : data2 saved");
        // success 3
        savetoDb("sourabh", ()=>{
            console.log("success 3: data3 saved");
        }, ()=>{    //failure 3
            console.log("failure 3: weak connection")
        });
    }, ()=>{  // failure 2
        console.log("failure2: weak connection ");
    })
},  ()=>{  // yaha se failure 1
    console.log("failure: weak connection. data not saved")
});

// agar hame success 3 add krna hai tab woh success 2 mai add krenge