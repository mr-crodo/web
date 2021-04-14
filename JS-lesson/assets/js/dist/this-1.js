'use strict';


//! 1) Obicnaya funkciya This = windows : esli stoit 'use strict'; to budet undefined

// function showThis(a,b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }

//   console.log(sum());
// }

// showThis(2,6);

//! 2) Kontekst u metodov obyekta eto i est sam obyekt

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function () {
//     function shout() {
//       console.log(this);
//     }
//     shout();
//   }
// };

// obj.sum();

//! 3) This v konstruktorax i Classax eto noviy ekzemplar obyekta

// function User(name,id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function() {
//     console.log('Hello!' + this.name);
//   };
// }

// let ivan = new User('Ivan', 23);

//! 4) et orucnaya privazka This: u nas ets call, apply, bind
// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: 'John'
// };

// sayName.call(user, 'Svetoslav');
// sayName.apply(user, ['Nikitishna']);

// function count(num) {
//   return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

const btn = document.querySelector('button');

// a) sdes izza toqo cto eto obicnaya funciya mi mojem ssilatsa na this
btn.addEventListener('click', function(){
  this.style.backgroundColor = 'red';
});

// b) a sdes strelocnaya funciya sdes net obrabocika sobitiya, u strelocnoy funkcii
// obrabotcik sobitiy ssilatsa na roditela, a ctobi bez roditela ssilatsa na funciyu nado propisat
// event ili e i vnizu obratitsa k target
btn.addEventListener('click', (e) => {
  e.target.style.backgroundColor = 'red';
});

const obj = {
  num: 5,
  // V etom primere mi ispolzovali strelocnuyu funkciyu
  // u strelocnoy funkcii net svoeqo konteksta ili this on eqo beret u sboeqo roditela
  // a roditela kontekst ili this vseqda ssilaets na obyekt
  sayNumber: function(){
    const say =() => {
      console.log(this.num);
    };
    say();
  }
};

obj.sayNumber();

const double = a => a * 2;

console.log(double(4));