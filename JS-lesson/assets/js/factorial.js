// let factorialFunct = function factorialFunct(fact) {
//   if (fact == 1) return 1;
//   else return fact*factorialFunct(fact - 1);

// };
// console.log(factorialFunct(1));


function factorial(naturalNumber) {
  if(naturalNumber < 0) {
    return 0;
  }

  let result = 1;
  for (i = 1; i <= naturalNumber; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(3));