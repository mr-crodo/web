'use strick';

const options = {
  name: 'test',
  width: 1204,
  height: 1204,
  colors:{
    border: 'black',
    bg: 'red'
  }
}

// console.log(options.width);

// delete options.name;

// console.log(options);

for (let key in options) {
  console.log(`Svoystvo ${key} imeet znacenie ${options[key]}`);
}