// console.dir(window.document.body);
// console.log(window.document.body);
// document.body.childNodes[1].innerText = "Hello World";


// // getElementById

// let button = document.getElementById("myId");
// console.dir(button);


// // getElementByClassName

// let heading = document.getElementsByClassName("myClass");
// console.dir(heading);

// // getElementByTagName

// let paragraph = document.getElementsByTagName("p");
// console.dir(paragraph);

//Query Selector

// let firstEl = document.querySelector("p");             // Access Paragrpagh
// console.dir(firstEl);
// let firstEl = document.querySelector(".myClass");     // Access With Class
// console.dir(firstEl);
// let firstEl = document.querySelector("#myId");            // Access with Id
// console.dir(firstEl);

// \n

// let AllEl = document.querySelectorAll("p");            // Access Paragrpagh for all elements
// console.dir(AllEl);
// let AllEl = document.querySelectorAll(".myClass");      // Access With Class for all elements
// console.dir(AllEl);
// let AllEl = document.querySelectorAll("#myId");              // Access Id for all elements
// console.dir(AllEl);


// Properties

// InnerText

// let div = document.querySelector("div");
// console.dir(div);

//InnerHTML

// let heading = document.querySelector("h1");
// console.dir(heading);



// practise Q1

// let heading = document.querySelector("h2");
// console.dir(heading.innerText);

// heading.innerText = heading.innerText + " From Apna College";


// practise Q2

// let divs = document.querySelectorAll(".box");

// let idx = 1;
// for (div of divs) {
//     div.innerText = `New unique value ${idx}`;
//     idx++;
// }

// divs[0].innerText = "New Unique Value 1";
// divs[1].innerText = "New Unique Value 2";
// divs[2].innerText = "New Unique Value 3";

// Artibutes

// let para = document.querySelector("p");
// console.log(para.getAttribute("id"));
// console.log(para.setAttribute("id" ,"NEW-ID"));


// let div = document.querySelector("div");
// console.log(div);   

// div.style.backgroundColor = "Green";
// div.style.backgroundColor = "black";

// let button = document.createElement("button");
// console.log(button);
// button.innerText = 'Click me!';

// let div = document.querySelector("div");
// console.dir(div);


// Practise Q1


let button = document.createElement("button");

button.innerText = "Click ME!";
button.style.backgroundColor = "red";
button.style.color = "white";

document.querySelector("body").prepend(button);


// Practise Q2

let myParagraph = document.getElementById("myParagraph");

myParagraph.classList.add("additionalClass");
