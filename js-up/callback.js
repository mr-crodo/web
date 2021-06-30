// function foo() {
//   console.log('Hello world');
// }
// foo();
// foo.field = "denis";
// console.log(foo.field);

// const arr = ['Denis', 'Ivan', 'Maks', 'Olga'];

let carName = "Ford"
let carYear = 2000
let personeYear = 1993

function calculateAge(year) {
  let currentYear = 2018
  let result = currentYear - year
  return result
}

function checkAngLogAge(year, name) {
  if(calculateAge(year) < 10) {
    console.log('Vozrast' + name + "menwe 10 let");
  } else {
    console.log('Vozrast' + name + 'bolwe 10 let');
  }
}

checkAngLogAge(carYear, 'Mashini')
checkAngLogAge(personeYear, 'Cheloveka')

let sayHelloTo = function(name) {
  console.log('Hello ' + name);
}

sayHelloTo("Iqoor")

