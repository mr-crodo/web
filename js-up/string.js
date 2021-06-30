let personName = "Valyoda"

let newMessage = "Hello World"

let message = "My name \"" + personName + "\""
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.charAt(3));
console.log(message.indexOf('name'));
console.log(message.substr(1, 4));
console.log(newMessage.substr(newMessage.indexOf('World'), 5));
console.log(newMessage.substring(1, 3));
