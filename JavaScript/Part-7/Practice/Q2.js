const Id1= setInterval( () => {
    console.log(" Hello World")
},2000);

setTimeout( () => {
    clearInterval(Id1);
    console.log("Interval stopped");
},10000);
   