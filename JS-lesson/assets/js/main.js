// Comment
// "use strict";


let answer = [],
  questions = [
    'What is you name?',
    'What is you sure name?',
    'What is you old?',
    'Where are you frome?'
  ];


for (let i = 0; i < questions.length; i++) {
  answer[i] = prompt(questions[i], '');
}

document.write(answer);
console.log("answer", answer);