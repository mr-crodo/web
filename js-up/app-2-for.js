let i = 0
while(i++ < 10) {
  console.log('i : ', i);
}

let i = 10
while(i--) {
  console.log('i : ', i);
}

let i = 10
do {
  console.log('action');
  
} while (i > 0)

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let str = "Salam a kalxozz"
let res = '';

for (let i = 0; i < str.length; i++) {
  res += str[i] + '*';
}

console.log(res);



let colors = ['white', 'black', 'red', 'yellow']

for (let i = 0; i < colors.length; i++) {
  console.log('colors : ',colors[i]);
  colors[i] = colors[i].toUpperCase();
}

console.log(colors);


const user = [
  {
    name: 'Denis',
    age: 12
  },
  {
    name: 'Oleg',
    age: 122
  },
  {
    name: 'Seymur',
    age: 32
  },
  {
    name: 'Olqa',
    age: 29
  },
  {
    name: 'Guj',
    age: 32
  },
];

const userObj = {}


for (let i = 0; i < user.length; i++) {
  // console.log(user[i].age);
  userObj[user[i].name] = user[i];
}

// console.log(userObj['Denis']);

//! for in

for (let key in userObj) {
  console.log(userObj[key]);
  
}

//! for of

for (let value of user) {
  console.log(value);
  
}


