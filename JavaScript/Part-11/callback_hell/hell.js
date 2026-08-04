let h1=document.querySelector("h1");

// setTimeout(function(){
//     h1.style.color="red";
// },1000);
// setTimeout(function(){
//     h1.style.color="green";
// },2000);
// setTimeout(function(){
//     h1.style.color="blue";
// },4000);
// setTimeout(function(){
//     h1.style.color="pink";
// },5000);
// setTimeout(function(){
//     h1.style.color="yellow";
// },6000);


// here wwe use nesting 

function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextColorChange) nextColorChange();
    },delay);
}
changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
        changeColor("blue",1000,()=>{
            changeColor("green",1000,()=>{
                changeColor("yellow",1000,()=>{
                    changeColor("pink",1000,()=>{

                    });
                });
            });
        });
    });
});

// yaha par kabhi callback mai gadabad hoti hai isliye callback hell occur hota hai
// usiko control krne ke liye ham 1. promises, 2.await, 3.async    ka use krte hai