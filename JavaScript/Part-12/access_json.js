// i) parse function 
let jsonRes=`{"fact":"Female cats tend to be right pawed, while male cats are more often left pawed. Interestingly, while 90% of humans are right handed, the remaining 10% of lefties also tend to be male.","length":182}`;

// to access json
let validRes=JSON.parse(jsonRes);  // it convert json data to js object
console.log(validRes);
console.log(validRes.fact);
console.log(validRes.length);


// ii) stringify function
let student={
    name:"sourabh",
    marks:95,
};
let res=JSON.stringify(student);

console.log(res);       // '{"name":"sourabh","marks":95}'
console.log(res.name);  // undefined