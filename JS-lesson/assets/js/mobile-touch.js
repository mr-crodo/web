//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcansel

window.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.box');

  // box.addEventListener('touchstart', (e) => {
  //   e.preventDefault();
  //   console.log('start');
  //   console.log(e.touches);
  // });
  // box.addEventListener('touchstart', (e) => {
  //   e.preventDefault();
  //   console.log('start');
  //   console.log(e.targetTouches);
  // });
  box.addEventListener('touchmove', (e) => {
    e.preventDefault();
    // console.log('start');
    console.log(e.targetTouches[0].pageX);
  });

  // box.addEventListener('touchmove', (e) => {
  //   e.preventDefault();
  //   console.log('Move');
  // });

  // box.addEventListener('touchend', (e) => {
  //   e.preventDefault();
  //   console.log('End');
  // });
});

//touches
//targetTouches
//changedTouches