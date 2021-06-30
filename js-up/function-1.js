//! function declaration
function sayHello (name, surname) {
  console.log(name + " " + surname + " Senyor Web Enginer");
  console.log(name, surname);
  return `Hello ${name} ${surname}`
}

let res = sayHello('Nasib', 'Mamadov')

console.log(res);


//! function expression
const square = function(x) {
  return x * x;
}

// ! samovizivayuwaya functioa
// (function (msg) {
//   console.log(msg);
// })('Hello qaqa');


function foo(x) {
  console.log(x);
  console.log(arguments);
}

foo(11, 'some string', [1,2,3])