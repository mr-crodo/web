const numArr = [2,3,4,123,637,43,1];

let value;

value = numArr.length;

console.log(value, numArr);

numArr.length = 200;
value = Array.isArray(numArr)
value = numArr[5]
value = numArr.push(123)
// value = numArr.pop();
// value = numArr.unshift(323)
// value = numArr.shift()
// value = numArr.slice(0, 2) // ne izmenaet massiv
// value = numArr.splice(2, 4, 'hud', 'hyd') // izmenaet massiv
// value = numArr.splice(2, 0, 'hud', 'hyd') // esli ne xotim udalat a xotim dobavit
// value = numArr.reverse(); // perevoracivaet massiv
// value = numArr.concat(); // konkatiniruet
value = numArr.join(" ") // prevrawaet massiv v stroku, i mojno peredavat simvol kotoriy mojno vsavit mejdu simvolami massiva
value = "Salam qaqa necesen bro".split("") // 
console.log(value, numArr);


let cars