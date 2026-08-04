let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let country=document.querySelector("input").value;
    console.log(country);

    let colArr= await getColleges(country);
    // console.log(colArr);

    show(colArr);
});

// for printing colleges through list
function show(colArr){
    let list=document.querySelector("#list");
    list.innerText=[];
    for(col of colArr){
        console.log(col.name);  // to print college name only via list

        let li=document.createElement("li");
        li.innerText=col.name;

        list.appendChild(li);
    }
}


async function getColleges(country){
    try{
        let res=await axios.get(url+country);
        // console.log(res);
        return res.data;
    }
    catch(err){
        console.log("error",err);
        return [];
    }
}
getColleges();