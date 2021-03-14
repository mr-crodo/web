//! document.getElementById(); // po id # elementa
//! document.getElementsByClassName(); // naxodit po classu
//! document.getElementsByTagName(); // naxodit po tegam dopustim div
//! document.querySelector(); // po selectoram
//! document.querySelectorAll(); // povsem selectoram

// let x = document.getElementsByClassName('intro-li');

// document.getElementById('header').innerHTML = 'Vau bratishka teper ya moqu pisat v Js i izmenat pri etom tekst na stranice' +
// " " + x[3].innerHTML;

// console.log(document.getElementsByTagName('li')[2]);
// console.log(document.querySelector('#header').innerHTML);
// console.log(document.querySelectorAll('li'));

// let h1 = document.getElementById('header');
// // console.log(h1[0].innerHTML);
// h1.style.color = 'red';
// h1.style.fontSize = '100px';

// let image = document.getElementsByTagName('img');
// image[0].setAttribute('src',
//   'https://ae01.alicdn.com/kf/HTB1e4W8aKL2gK0jSZPhq6yhvXXan/Plastic-Tray-Transparent-Dish-Dinner-Plate-Sashimi-Plate-Boat-Multi-functional-Dragon-Boat-Salmon-Platos-Platter.jpg');

var link = document.getElementsByTagName('a');
link[0].getAttribute('href');
link[0].setAttribute('href', 'https://www.figma.com/files/drafts');