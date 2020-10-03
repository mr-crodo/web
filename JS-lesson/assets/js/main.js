"use strict";


let count = 5;

function humanSayHello(user) {
  
  console.log(count);
  console.log('Hello ' + user + '!');
}

humanSayHello();
console.log(count);

// function Declaration

let calc = function(a, b) {
  return a + b;
};


console.log(calc(5,4));
console.log(calc(8,1));
console.log(calc(2,4));
console.log(calc(2,3));