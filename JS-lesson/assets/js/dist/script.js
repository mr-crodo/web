'use strict';

const box = document.querySelector('.box'),
  btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

btn.addEventListener('click', () => {
  // box.style.height = box.scrollHeight + 'px';

  if (box.scrollTop >= 600) {
    box.style.background = "#dedede"
  } else {
    box.style.background = "#9df";
  } 
  console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);

console.log(style);