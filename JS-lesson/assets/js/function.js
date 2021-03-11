function coplExe(helloText, name, age) {
    console.log(helloText + " " + "My name is" + " " + name + " " + "my vozrast " + age)
}

function square(number) {
    return number * number;
}

let x = square(3);
console.log(x);

coplExe("Hi", "Nasib", 27);

function isSquareBig(side) {
    var squareArea = square(side);
    if(squareArea > 100) {
        return true;
    } else {
        return false;
    }
}

console.log(isSquareBig(200));