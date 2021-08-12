/* console.log(Boolean(100));
console.log(Boolean(3.14));
console.log(Boolean(-15));
console.log(Boolean("hello"));
console.log(Boolean("false"));
console.log(Boolean(1 + 7 + 3.14));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(false));

let num = 5;
let anotherNum = 8;

console.log(num < anotherNum);
console.log(num == anotherNum);
console.log(num > anotherNum);
console.log(num >= anotherNum);
console.log(num <= anotherNum);

console.log(typeof(num));
console.log(typeof("5"));
console.log(num == "5");
console.log(num != 8);
console.log(num != "5");

let i = 1;         
let lastName = "Johnson";
let j = "2";
let status = true;
let hello = "hello";
let helloWorld = "hello";

console.log(typeof(i)); 
console.log(typeof(lastName)); 
console.log(typeof(j));
console.log(typeof(status));
console.log(typeof(hello));
console.log(typeof(helloWorld)); */

//lev 1_4

// console.log(typeof("John"));
// console.log(typeof(3.14));
// console.log(typeof(NaN));
// console.log(typeof(false));
// console.log(typeof([1, 2, 3, 4]));
// console.log(typeof({name: 'John', age: 34}));
// console.log(typeof(new Date()));
// console.log(typeof(function () {}));
// console.log(typeof(null));
// console.log(typeof(""));
// console.log(typeof(3+2==5));
// console.log(typeof(3 + "3"));

//lev 1_8

// let x = 20;
// let y = 30;
// let z = 10;
// let resultOne = 0;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x + y);
// console.log(resultOne = x * y / z);

// let a = 15; 
// let b = 9;
// let c = 20;
// let resultTwo = 0;
// console.log(a % b);
// resultTwo = (a + b) * 20;
// console.log(resultTwo);
// a++;
// b--;
// console.log(a);
// console.log(b);
// resultThree = b - a;
// console.log(resultThree);

function add() {
    console.log("test");
    document.getElementById("rosa").style.display = "block";
}

function send() {
    let vorname = document.getElementById("vorname").value;
    let nachname = document.getElementById("nachname").value;
    let land = document.getElementById("land").value;
    console.log("Full name: " + vorname + " " + nachname + " " + "Land: " + " " + land);
}

function randomColor() {
    let colorOne = Math.floor(Math.random() * 255);
    let colorTwo = Math.floor(Math.random() * 255);
    let colorThree = Math.floor(Math.random() * 255);
    document.body.style.background = "rgb(" + colorOne + "," + colorTwo + "," + colorThree + ")";
}

function middle() {
    element.classList.add("middle");
}

function big() {
    element.classList.add("big");
}