'use strict';

// const num = new Number(3);
// console.log(num);

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function() {
    console.log(`Hello ${this.name}, AUE bratuxa bla yobana ${this.name}`);
  }
}

User.prototype.exit = function() {
console.log(`User ${this.name} basdi bayira`);
};

const ivan = new User('Ivan');
const alex= new User('Alex', 14);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);



class USer {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
  }

  
}