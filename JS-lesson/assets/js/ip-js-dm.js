'use strict';

const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  circle = document.getElementsByClassName('circle'),
  hearts = document.querySelectorAll('.heart'),
  oneHeart = document.querySelector('.heart'),
  wrapper = document.querySelector('.wrapper');


box.style.backgroundColor = 'green';
box.style.backgroundColor = 'green';

btns[2].style.borderRadius = '100%';
// circle.style.cssText = 'background-color: red;';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'green';
// }

hearts.forEach(item => {
  item.style.backgroundColor = '#dede';
});


const div = document.createElement('div');
//const text = document.createTextNode('Tut bil ya');

div.classList.add('black');

document.body.append(div);



// wrapper.append(div);
// wrapper.appendChild(div);
// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[1].replaceWith(circle[0]);

// wrapper.insertBefore(div, hearts[1]);
div.innerHTML = 'Hello broo';
btns[1].innerHTML = 'Click';