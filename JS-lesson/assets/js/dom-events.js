let h1 = document.getElementById('header');

console.log(h1.innerHTML);

h1.addEventListener('click', function () {
  this.innerHTML = "Le bratishka olee yexuuu";
  this.style.color = "#345ddd";
});

var button = document.querySelector('button');
var isBackgroundApplied = false; //0
// button.addEventListener('click', function () {
//   if (isBackgroundApplied === false) { //0
//     document.querySelector('body').style.background = '#42b983';
//     isBackgroundApplied = true; //1
//   } else {
//     document.querySelector('body').style.background = 'white';
//     isBackgroundApplied = false; //0
//   }

// });

button.addEventListener('click', function () {
document.querySelector('body').classList.toggle('blue');
});