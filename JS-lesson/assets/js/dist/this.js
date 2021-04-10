'use strict';
//todo 1
// function showThis(a, b) {
//   console.log(this);

//   function sum() {
//     console.log(this);
//     return a + b;
//   }

//   console.log(sum());
// }

// showThis(4, 6);


//todo 2)
// const obj = {
//   a: 20,
//   b: 15,
//   sum: function() {
//     // console.log(this);
//     function shout() {
//       console.log(this);
//     }
//     shout();
//   }
// };

// obj.sum();

//todo 3)
// function User(name, id) {
//   this.name = name;
//   this.id=id;
//   this.human=true;
//   this.hello = function() {
//     cosole.log("hello " + this.name);
//   };
// }

// let ivan = new User('Ivan', 33);

//todo 4
function sayName(surname) {
  console.log(this);
  console.log(this.name + surname);
}

const user = {
  name: 'Jone'
}

sayName.call(user, 'Ivan');
sayName.apply(user, ['Jone']);



//!1) obicnaya funciya this = window, no esli stoit 'use strict' - undefined
//! 2)kontekst u metodov - sam obyekt / no esli v nem sdelat funciyu i vizvat to eto obicnaya funciya kotoraya budet undifing
//! 3) this v konstruktorax i klassax - eto noviy ekzemplar obyekta
