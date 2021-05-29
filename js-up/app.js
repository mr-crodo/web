// let value = 0.6 + 0.7;
//
// value = Math.PI; // ? metod PI kotoriy pokazivaet znacenie PI iz obyekta Math
// value = Math.random(); //? kajdiy raz vidaet randomnoe cislo
// value = Math.round(2.4); //? okruqlaet libo v malu storonu esli menwe 5 libo v bolwue
// value = Math.min(3, 2, 4, 5, 2, 1); // ? vidaet minimalnoe cislo
// value = Math.max(3,2,4,1,5,23); //? vidaet maksimalnoe znacenie
// value = Math.random() * 10 + 1;
// value = Math.floor(Math.random() * 10 + 1); // ? randomna budet vidavat cisla s okruqleniem bez plavayuwey tocki
// const arr = ['black', 'orange', 'green', 'yellow', 'white', 'red', 'blue', 'pink'];
// value = Math.floor(Math.random() * arr.length); // ? takom obrazom budet vidavatsa randomno cveta iz massiva
// console.log(value, arr[value]);

// const firstName = "Nasib";
// const lastName = "Mammadov";
// const age = 30;
//
// let str;
// str = `
//         <ul>
//             <li>First name : ${firstName}</li>
//             <li>Last name : ${lastName}</li>
//             <li>Age : ${age}</li>
//             <li>Full name : ${firstName} ${lastName}</li>
//             <li>Full name and age : <i>${firstName} ${lastName} ${age}</i></li>
//         </ul>
//     `
//
//
// document.querySelector(".app").innerHTML = str;
//
// setInterval(function() {
//     let message = document.querySelector('#message');
//     const arr = ['black', 'orange', 'green', 'yellow', 'white', 'red', 'blue', 'pink'];
//     let value;
//     value = Math.floor(Math.random() * arr.length)
//     console.log(value)
//     message.style.background = arr[value];
//     // window.alert(message.value)
//
// }, 4000)
//
// let stG = document.body.createElement('div');
// document.body.stG.innerHTML = `
//     <i>Ay qa nagayrirsan</i>
// `

// let kiro = document.querySelector(".kiro");
// let hero = document.querySelector(".hero");
// let gik = "Hello qadan alem";


// hero.innerHTML = kiro.value;
// window.alert(kiro.value);

// function testA(a) { // Определение функции с названием testA. Это служебная информация, менять ее нельзя.
//   // Мы видим, что у функции есть входной параметр - переменная "a".
//   var x = ""; // Объявление переменной "x", которую мы будем возвращать в качестве результата.
//   x=a;// Тут нужно написать решение - код, который будет помещать результат в "x".
//   return x; // Команда вывода ("возврата") результата, ее тоже менять нежелательно.
// } // Закрывающая код фигурная скобка, она должна присутствовать обязательно.

// let sum = 34;
// let num = 43;

// juro = (sum < 23) ? console.log('Salay ay qa') : console.log('Qaqashim ne zdavaysa');

// var a = 3; //объявляем переменную по которой будем делать выборку
// var x = ""; //объявляем переменную в которую будем записывать результат


// switch (a) {
//   case 1: // если a равна единице то записываем 
//     x = "Переменная a равна единице!"; // в переменную x фразу "Переменная a равна единице!"
//     console.log(x);
//     break;
//   case 2:
//     x = "Переменная a равна двум!";
//     console.log(x);
//     break;
//   case 3:
//     x = "Переменная a равна трем!";
//     console.log(x);
    
//     break;
//   default:
//     x = "Переменная a не равна 1, 2 или 3!";
//     console.log(x);
// }

// switch (a) {
//   case 0:
//     a = "Ноль";
//     x = a;
//     break;
//   case 1:
//     a = "Один";
//     x = a;
//     break;
//   case 2:
//     a = "Два";
//     x = a;
//     break;
//   case 3:
//     a = "Три";
//     x = a;
//     break;
//   case 4:
//     a = "Четыре";
//     x = a;
//     break;
//   case 5:
//     a = "Пять";
//     x = a;
//     break;
//   case 6:
//     a = "Шесть";
//     x = a;
//     break;
//   case 7:
//     a = "Семь";
//     x = a;
//     break;
//   case 8:
//     a = "Восемь";
//     x = a;
//     break;
//   case 9:
//     a = "Девять";
//     x = a;
// }

function firstFactorial(num) {

  for (i = 1; i <= 7; i++) {
    num = num * i;
  }
  return num;
}

console.log(firstFactorial(7));



// function FirstFactorial(a) {
//   var x;
//   x = a;

//   for (var i = x - 1; i >= 1; i--) {
//     x = x * i;
//   }
//   return x;
// }

// console.log(FirstFactorial(7));


// var d = 5;
// do {
//   console.log(d);
//   d = d - 1;
// } while (d >= 1);


// ! В этом задании вам нужно вычислить сумму всех четных чисел, встречающихся в ряду от 1 до числа(включительно), передаваемого в нашу функцию(переменная "а").

function testWhile(a) {
  var x = 0;
  // Тут нужно написать решение
  var i = 1;
  while (i <= a) {
    if (i % 2 == 0) {
      x += i;
    }
    i++;

  }
  return x;
}

console.log(testWhile(3));


// ? В данном случае цикл прервется при достижении переменной i значения 5.
//?  До этого момента каждую итерацию будет происходить вывод в консоль значения переменной i.

for (let i = 1; i < 10; i = i + 1) {
  if (i == 5) {
    break;
  }
  console.log('i= ' + i);
}


// ? В данном случае continue помешает выполниться выводу в консоль при
// ? значении переменной равном 5, все остальные значения будут напечатаны.

for (i = 1; i < 10; i = i + 1) {
  if (i == 5) {
    continue;
  }
  console.log('i= ' + i);
}
