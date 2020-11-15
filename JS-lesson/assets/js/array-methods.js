//! push Метод добавляет новый элемент в массив (в конце):
//? fruits.push("Kiwi"); 
//! pop Метод удаляет последний элемент из массива: oba slucaya rabotayut i cerez console.log
//! shift Метод удаляет первый элемент массива и «сдвиги» все другие элементы к более низкому индексу.
//! unshift Метод добавляет новый элемент в массиве (в начале), и «unshifts» старые элементы:
//! indexOf
//! slice // ? Метод slice () возвращает выбранные элементы в массиве как новый объект массива.
//? Метод slice () выбирает элементы, начинающиеся с заданного начального аргумента, и заканчиваются заданным конечным аргументом , но не включают его .
//todo(slice): Если указать в скобках после slice только одно число, мы получим
//todo(slice): строку-срез, которая начинается с данной позиции и длится до конца строки:
/*var longString = "Эта длинная строка такая длинная";
longString.slice(4);
"длинная строка такая длинная" */

//!delete fruits[0]; Использование delete может оставить неопределенные дыры в массиве. Вместо этого используйте pop () или shift ().
//! splice() Метод может быть использован для добавления новых элементов в массив: 
//? fruits.splice(2, 0, "Lemon", "Kiwi");
//!toString() преобразует массив в строку значений массива (разделенных запятыми).
//! join() Метод также объединяет все элементы массива в строку.
//?Он ведет себя точно так же toString(), но дополнительно можно указать разделитель fruits.join(" * ");
//! includes() Метод includes() проверяет, если в массиве присутствует строка 'ниндзя'. Так как это не так, метод возвратил false, значение boolean.
// let fruits, text;
// fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits[fruits.length] = "Lemon", "Fero","Gisko", "Marisko"; 
// fruits[1] = "Lemon"; 
// fruits.push("Fero","Gisko", "Marisko", "Hitachi");
// console.log(fruits);
// alert(fruits[fruits.length]);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.pop()); // svoystvo pop mojet udalit element s massiva
// daje pri vivedenii v console
// fruits.pop();  

console.log(fruits);

var meyve = ["Banana", "Orange", "Apple", "Mango"];
// console.log(meyve.shift())
meyve.unshift("Arbuz");
console.log(meyve);


let x, y;
x = 10;
y = 5;
x*=y;
console.log(x);