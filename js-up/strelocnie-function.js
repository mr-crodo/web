// const rectangle = {
//   width: 20,
//   height: 30,
//   getSquare: function () {
//     return this.width * this.height
//   }
// }

// console.log(rectangle.getSquare());

const plus = (x,y) => x + y
console.log(plus(232, 3232));

const wothoutArg = () => console.log('Hello qadan alim');
const singleArg = x => x * 2;
const moreAction = (a,b) => {
  a*=2;
  b*=3;
  return a + b;
}

// const returnObj = (str = '') => {
//   return {
//     value: str,
//     length: str.length
//   }
// }

const returnObj = (str = '') => ({
  value: str,
  length: str.length
})


// U obicnoy funkcii est psevdo kollekciya arguments 
function plusFoo(x, y) {
  console.log(arguments);
  return x + y;
}

const obj = {
  firstName: 'Denis',
  age: 20,
  getFirstName () {
    console.log(this);
  },
  // getAge: () => console.log(this)
  getAgeArrow: null,
  getAge() {
    // this.getAgeArrow = () => console.log(this)
    setTimeout(() => console.log(this))
  }
}

obj.getAge()
// obj.getAgeArrow();

