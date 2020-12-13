"use strict";

//! first cicles
let num = 50;

// while (num < 55) {
//   console.log(num);
//   num++;
// }

//! second cicles
// do {
//   console.log(num);
//   num++;
// }

// while (num < 55);

// 

// sdes mi zapisali uslovie po kotoromu i poka 
// budet rasti do 8 uslovie budet vipolnatsa 
// no mi zapisali cto koqda if daydet do 6 programma doljna ostanovitsa
// nesmatra na to cto uslovie mojet vipolnatsa i dalwe
for (let i = 1; i < 10; i++) {
  if (i == 6) {
    //break; // pririvaet vse cikl posle neqo
    continue; // pririvaet emenno to mesto ili znacenoe kotoroe ukazanno
  }
  console.log(i);

}