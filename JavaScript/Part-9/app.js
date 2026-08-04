// we also print source link of all 3 images
// let smallImages=document.getElementsByClassName("oldImg");

// for(let i=0;i<smallImages.length;i++){
//     console.dir(smallImages[i].src);
// }



// if we want then we also change the linnk of all 3 images
// let smallImages=document.getElementsByClassName("oldImg");

// for(let i=0;i<smallImages.length;i++){
//     smallImages[i].src="C:\Users\acer\OneDrive\Desktop\FullStack-AC\JavaScript\Part-9\Assets\spiderman_img.png";

//     console.log(`value of image no. ${i} is changed `);

// }







// getElementsByTagName

// document.getElementsByTagName("p");

// if we want to change content
// document.getElementsByTagName("p")[1].innerText="abc";





// querySelector(): used for only single element to perform task

// for elements
console.dir(document.querySelector("h1"));

// for id
console.dir(document.querySelector("#description"));

// for class
console.dir(document.querySelector(".oldImg"));

// for all objects we use 
console.dir(document.querySelectorAll("p"));

// if we want elements which are in the div tag only then
console.dir(document.querySelector("div a"));