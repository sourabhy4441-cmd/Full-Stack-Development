

// let url="https://catfact.ninja/fact"; 

// async function getFacts(){
//     try{
//         let res=await axios.get(url);
//         // console.log(res);
//         // console.log(res.data);
//         console.log(res.data.fact);
//     }
//     catch(err){
//         console.log("ERROR -",err);
//         
//     }
// }
// getFacts();






let btn=document.querySelector("button");
btn.addEventListener( "click",async ()=>{
    let fact=await getFacts();
    console.log(fact);
    let p=document.querySelector("p");
    p.innerText=fact;
});



let url="https://catfact.ninja/fact"; 

async function getFacts(){
    try{
        let res=await axios.get(url);
        // console.log(res);
        // console.log(res.data);
        return res.data.fact;
    }
    catch(err){
        console.log("ERROR -",err);
        return "No fact Found";
    }
}
getFacts();