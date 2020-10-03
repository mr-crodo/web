// // Comment
// // "use strict";


// let answer = [],
//   questions = [
//     'What is you name?',
//     'What is you sure name?',
//     'What is you old?',
//     'Where are you frome?'
//   ];


// for (let i = 0; i < questions.length; i++) {
//   answer[i] = prompt(questions[i], '');
// }

// document.write(answer);
// console.log("answer", answer);



// "use strict";


// let age = prompt("Сколько вам лет?", "");

// if (age < 18) {
//   alert('Ranovato esho!!');
// } else if (age > 100) {
//   alert('Pozdnovato esho');
// } else {
//   alert('Vi mojete')
// }
// // *****************

// let count = 5;

// function humanSayHello(user) {

//   console.log(count);
//   console.log('Hello ' + user + '!');
// }

// humanSayHello();
// console.log(count);

// // function Declaration

// let calc = function (a, b) {
//   return a + b;
// };


// console.log(calc(5, 4));
// console.log(calc(8, 1));
// console.log(calc(2, 4));
// console.log(calc(2, 3));


// function myFirstApp(name, age) {
//   alert(`Привет, меня зовут ${name} и это моя первая программа!`);

//   function showSkills() {
//     let skills = [],
//     questions = [
//           ' Я владею ',
//           ' Я владею ',
//           ' Я владею ',
//           ' Я владею '
//         ];

//     for (let i = 0; i < questions.length; i++) {
//       skills[i] = prompt(questions[i], '');
//       document.write(' Я владею ' + ' ' + skills[i]);


//     }
//   }

//   showSkills();

//   function chechAge() {
//     if(age >= 18 && age < 25) {
//       alert('У тебя отличные шансы стать фронтенд разработчиком');
//     } else if( age >=25) {
//       alert('Еще не все потерянно бейся до конца!!!!');
//     } else {
//       alert('У тебя уровень Марка Цукербера');
//     }
//   }

//   chechAge();

//    function calcPow(num) {
//     num = prompt('введите знасения num ', '');
//     // num**
//    document.write(' ' + num * num);
//    }

//    calcPow();


// }

// name = prompt(' Введите имя ');
// age = prompt('Введите возраст');
// myFirstApp(name, age);



// function myFirstApp(name, age) {

//   alert(`Привет, меня зовут ${name} и это моя первая программа`);
  
  
  
//   function showSkills() {
  
//   let skills = ['html', 'css', 'js'];
  
  
  
//   for(let i = 0; i < skills.length; i++) {
  
//   console.log(`Я владею: ${skills[i]}`);
  
//   }
  
  
  
//   // Я владею: html
  
//   }
  
  
  
//   showSkills();
  
  
  
//   function checkAge(age) {
  
//   if(age > 18) {
  
//   console.log('У тебя отличные шансы стать Frontend dev!')
  
//   } else {
  
//   console.log('Да ты будущий Билл Гейтс!');
  
//   }
  
  
  
//   // Age > 18
  
//   // У тебя отличные шансы стать Frontend dev!
  
//   }
  
  
  
//   checkAge(age);
  
  
  
//   function calcPow(num) {
  
//   console.log(num *= num);
  
//   }
  
  
  
//   console.log(calcPow(4));
  
//   }
  
  
  
//   myFirstApp('Nick', 33);


function myFirstApp(name, age) {
  name = prompt('Como tu chamas?');
  age = prompt('Que idade tens?');

  console.log(`Olá, meu nome é ${name} Isto é a minha promeira App`);

  function showSkills() {
      let skills = ['html', 'css', 'sass', 'js'];

      console.log('Os meus skills são:');

      for (let i = 0; i < skills.length; i++) {
          console.log(`${i+1} - ${skills[i]}`);
      }
  }
  showSkills()

  function checkAge() {
      if (age > 18) {
          console.log('Es maior do 18! Otimo')
      } else {
          console.log('Desculpe, ainda tens que crescer...')
      }
  }
  checkAge();

  function calcPow(num) {
      num = prompt('Mete um numero!'),
      calcNum = num * 3;

      console.log(`Meteste ${num}, e o resultado é ${calcNum}.`)
  }

  calcPow();
}

myFirstApp();