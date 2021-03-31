'use strict';

// const arr = [21, 42, 23, 4, 6, 8, 10, 1, 7];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;
// }

// arr.pop();
// arr.push(200);
// console.log(arr);

// for (let value of arr) {
//   console.log(value);
// }

// arr.forEach(function(mutem, i, arr) {
// console.log(`${i}: ${mutem} внутри массива ${arr}`);
// });

// const str = prompt('', '');
// const product = str.split(', ');
// product.sort();
// console.log(product.join('; '));

// function copy(mainObj) {
//   let objCopy = {};

//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }

//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4
//   }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// let add = {
//   d: 17,
//   e: 20
// };

// console.log(Object.assign({}, add));

const video = ['youtube', 'vimeo', 'rutube', 'yandex-video'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [video, blogs, 'vk', 'facebook'];

      console.log(internet);


function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];