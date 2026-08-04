const { reject } = require("async");

function getNum(){
    return new Promise( (resolve,reject)=>{
        setTimeout( ()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}
async function demo(){
    // yaha pr agar await nhi hoga tb ek hi bar sabi number print honge
    // and using await setTimeout ki property apply hogi
    await getNum();
    await getNum();
    await getNum();
} 