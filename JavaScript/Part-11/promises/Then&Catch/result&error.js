function savetoDb(data,resolve,reject){
    
    return new Promise( (resolve, reject) => {
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            resolve(" success: data was saved");
        }else{
            reject("failure: weak connection");
        }
    });
}
savetoDb("Apna College")   // req= promise object
    .then((result)=>{
        console.log("data1 saved. promise was resolved");
        console.log("result of promises",result);
        return savetoDb("hello world");
    })
    .then( (result)=>{
        console.log("data2 saved");
        console.log("result of promises",result);
        return savetoDb("shradha");
    })
    .then( (result)=>{
        console.log("data3 saved");
        console.log("result of promises",result);
    })

    .catch( (error)=>{
    console.log("promise was rejected");
    console.log("result of promises",error);
});