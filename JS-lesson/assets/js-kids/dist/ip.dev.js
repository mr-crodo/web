'use strict';

console.log('Zapros dannix...');
setTimeout(function () {
  console.log('Podqotovka dannix...');
  var product = {
    name: 'Tv',
    price: 300
  };
  setTimeout(function () {
    product.status = 'order';
    console.log(product);
  }, 2000);
}, 2000);