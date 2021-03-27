"use strict";

let num = 20;

function showFirstMessage(text) {
  console.log(text);
  let num = 50;
  console.log(num);
}

showFirstMessage("Salam Qadan alim");
console.log(num);

function calc(a, b) {
  return (a + b);
  console.log("object");
}


console.log(calc(4,5));
console.log(calc(1,30));
console.log(calc(3,15));
console.log(calc(78,23));


const fifi = (a,b) => a * b;
console.log(fifi(34, 32));

const str = 'Some fruit';
console.log(str.substring(3, 6));

let num = 12.3;
console.log(Math.round(num));

function start()