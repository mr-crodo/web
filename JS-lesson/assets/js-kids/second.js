// let
//   secondsInAMinute = 60,
//   minutesInAnHour = 60,
//   secondsInAnHour = secondsInAMinute * minutesInAnHour,
//   hoursInADay = 24,
//   secondsInADay = secondsInAnHour * hoursInADay,
//   daysInAYear = 365,
//   secondsInAYear = secondsInADay * daysInAYear,
//   age = 27,
//   myAgeSecond = age * secondsInAYear;

//   console.log(myAgeSecond);

//   var ballons = 100;
//   ballons /= 4;
//   console.log(ballons);

//   var codeWord1 = "обернись";
// var codeWord2 = "неужели";
// var codeWord3 = "огурцы";
// var codeWord4 = "липкие";
// var codeWord5 = "?!";
// console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] +
// codeWord5[1]);

// hightFives = 6;
// lefiTeg = '6';

// console.log(hightFives + +lefiTeg);

 let poeziya = "а было лето было лето царицынский военкомат измерить скорость интернета б чехол для асус мемо падмаринование сибаса съесть непрожаренное мясо программа телепередач как рисовать футбольный мяч доплата за багаж сверх нормы дизайн межкомнатных дверей пазл паровозик для зверей григорианские реформы как сшить из фетра ананас бразилия который час";


 //! Dannoe virajenie rabotaet v oboix slucayax
//  console.log(poeziya.slice(0, 55).toUpperCase());
//  console.log(poeziya.toUpperCase().slice(0, 55));

// let sillyString =  "эЙ, кАК деЛа?",
//     lowerString = sillyString.toLowerCase(),
//     firstCharacter = lowerString[0],
//     firstCharacterUpper = firstCharacter.toUpperCase(),
//     restOfString = lowerString.slice(1);

//     console.log(firstCharacterUpper + lowerString.slice(1));

//  console.log(slovo.toUpperCase(0).slice(0, 55));

//  var myName = "Niko";
//  console.log(myName[0]);
 

var isWeekend = false;
var hadShower = true;
var hasApple = false;
var hasOrange = true;
var shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
console.log(shouldGoToSchool);
// true

let
children = prompt('Введите свой возраст?', ''),
childrenParent = prompt('Введите возраст родителя?', '');

if(children >= 12 && ) {
  console.log('Можете проходить в кинотеатр');
} else