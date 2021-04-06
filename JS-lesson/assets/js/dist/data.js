'use strick';

// const now = new Date();
// // console.log(now.getFullYear());
// // console.log(now.getMonth());
// // console.log(now.getDate());
// // console.log(now.getDay());


// // console.log(now.getTimezoneOffset());

// console.log(now.setHours(17));
// console.log(now);


let start = new Date();

for (let i=0; i < 1000000; i++) {
  let some = i ** 3;
}

let end = new Date();

alert(`Cikl qaqa otrabotalsa za ${end - start} sekund`);