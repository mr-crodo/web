// let isNumberOdd = function isNumberOdd(even) {
//   if (even % 2 == 0) {
//     console.log(false);
//     // return false;
//   } else {
//     console.log(true);
//     // return true;
//   }
// };
// isNumberOdd(23);
// console.log(isNumberOdd(23));


let isNumberOdd = function(even) {
  return even % 2 !== 0;
};

console.log(isNumberOdd(10));