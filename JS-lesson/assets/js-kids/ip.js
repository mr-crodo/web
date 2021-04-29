'use strict';

// console.log('Zapros dannix...');

// const req = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Podqotovka dannix...');

//     const product = {
//       name: 'Tv',
//       price: 300
//     };

//     resolve(product);

//   }, 2000);
// });


// req.then((product) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = 'order';
//       resolve(product);
//     }, 2000);
//   });
// }).then(data => {
//   data.modify = true;
//   return data;
// }).then((data) => {
//   console.log(data);
// }).catch(() => {
//   console.error('Proizowla owibka');
// }).finally(() => {
//   console.log('Finall');
// });

const test = time => {
  return new Promise(resorve => {
    setTimeout(() => resorve(), time);
  });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => {
  console.log('All');
});

Promise.race([test(1000), test(2000)]).then(() => {
  console.log('Rice');
});