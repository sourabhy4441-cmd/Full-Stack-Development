let url="https://catfact.ninja/fact";

fetch(url)
// .then((res)=>{
//     console.log(res);
//     // console.log(res.json());
//     // access json data
//     res.json().then( (data)=>{
//         console.log(data);
//     })
// })
// .catch( (err)=>{
//     console.log("ERROR - ",err)
// });


// compact method
.then((res)=>{
    // console.log(res);
    return res.json();
})
.then( (data) =>{
    console.log("data1 =",data.fact);
    return fetch(url);
})
.then( (res)=>{
    return res.json();
})
.then( (data2)=>{
    console.log("data2 =",data2.fact);
})
.catch( (err)=>{
    console.log("ERROR - ",err)
});
