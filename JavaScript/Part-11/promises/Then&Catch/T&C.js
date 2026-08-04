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
let request = savetoDb("Apna College");   // req= promise object
request.then(()=>{
    console.log("promise was resolved");
});
request.catch( ()=>{
    console.log("promise rejected");
});
 