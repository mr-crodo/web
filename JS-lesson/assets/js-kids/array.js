// let landmarks = [];
// landmarks.push("Мой дом");
// landmarks.push("Дорожка к дому");
// landmarks.push("Мигающий фонарь");
// landmarks.push("Протекающий гидрант");
// landmarks.push("Пожарная станция");
// landmarks.push("Приют для кошек");
// landmarks.push("Моя бывшая школа");
// landmarks.push("Дом подруги");

// console.log('landmarks :', landmarks);

// landmarks.pop();
// console.log(landmarks);

// (last in , fi rst out)

// let randomWords = ["Взрыв", "Пещера", "Принцесса", "Карандаш"];
// let randomIndex = Math.floor(Math.random() * 4);

// console.log(randomWords[randomIndex]);


var phrases = [
  "Звучит неплохо",
  "Да, это определенно надо сделать",
  "Не думаю, что это хорошая идея",
  "Может, не сегодня?",
  "Компьютер говорит нет"
];
// Мне выпить еще молочного коктейля ?

// let giph = prompt("Мне выпить еще молочного коктейля ?", "");


// alert(giph);

// phrases[Math.floor(Math.random() * 5)];
// "Не думаю, что это хорошая идея"
// Мне пора делать домашнюю работу?
// phrases[Math.floor(Math.random() * 5)];
// "Может, не сегодня?"

// var randomBodyParts = ["глаз", "нос", "череп"];
// var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
// var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
// // Выбор случайной части тела из массива randomBodyParts:

// var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
// // Выбор случайного прилагательного из массива randomAdjectives:

// var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
// // Выбор случайного слова из массива randomWords:

// var randomWord = randomWords[Math.floor(Math.random() * 5)];
// // Соединяем случайные строки в предложение:
// var randomInsult = "У тебя " + randomBodyPart + " словно " + randomAdjective + " " + randomWord + "!!!";
// alert(randomInsult);
// "У тебя нос словно дурацкая выдра!!!

let btn = document.querySelector(".btn");


let change = () => {
  let h1Title = document.querySelector(".title");

  let manBody = ["жопка", "сиска", "киска", "глазки", "носик", "ножки"];
  let seksiPrilag = ["страстнee", "ахуительнee", "сексуальнee", "привликательнee", "притигательнee", "хорошеe", "класнee"];
  let animalsBody = ["капыта", "вымя", "лапы", "уши", "хвост", "усы"];
  let animals = ["кошки", "собаки", "курици", "кровы", "лисы", "барашки", "мартышки", "одноглахой совы", "у зайки всем давайки"];


  let randomBody = manBody[Math.floor(Math.random() * 6)];
  let randomSeksi = seksiPrilag[Math.floor(Math.random() * 7)];
  let randomAnimalsBody = animalsBody[Math.floor(Math.random() * 6)];
  let randomAnimals = animals[Math.floor(Math.random() * 6)];

  let randomResult = `У тебя ${randomBody} еще более ${randomSeksi}, чем ${randomAnimalsBody} у ${randomAnimals}`;

  h1Title.innerHTML = randomResult;
}

btn.addEventListener('click', change);
