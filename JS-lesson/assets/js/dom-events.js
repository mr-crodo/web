let h1 = document.getElementById('header');

console.log(h1.innerHTML);

h1.addEventListener('click', function(){
  this.innerHTML = "Le bratishka olee yexuuu";
  this.style.color =  "#345ddd";
});