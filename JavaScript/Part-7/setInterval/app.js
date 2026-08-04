// setInterval( () => {
//     console.log("Sourabh");
// },2000);

// it will print "Sourabh" every 2 seconds until we stop it by using clearInterval() method.

// to stop the setInterval() we need to store the interval id in a variable and then pass that variable to clearInterval() method.

const Id1 = setInterval( () => {
    console.log("Sourabh");
},2000);

setTimeout( () => {
    clearInterval(Id1);
    console.log("Interval stopped");
},10000);