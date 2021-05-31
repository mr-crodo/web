'use strict';

//!filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name) {
//   return name.length < 5;
// });

// console.log(shortNames);


//!map

// let answers = ['Ivan', 'AnnA', 'Hello'];

// answers = answers.map(item => item.toLowerCase());

// console.log(answers);


// ! every / some
// ? some esli xotabi odin element
// ? every esli vse elamanti

const some = [4, 'qwq', 'sfrefer'];

// console.log(some.some(item => typeof(item) === 'number'));


console.log(some.every(item => typeof(item) === 'number'));


// ! reduce

// const arr = [1, 4, 5, 7, 2, 8, 6, 3, 8, 2, 1, 6];

// const res = arr.reduce((sum, current) => sum + current);

// console.log(res);


// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(res);



const obj = {
  ivan: 'persone',
  ann: 'persone',
  dog: 'animal',
  cat: 'anmal',
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);