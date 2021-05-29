const user = {
    firstName: "Nasib",
    age: 30,
    isAdmin: true,
    email: 'test@mail.com',
    'user-address': {
        city: 'Baku',
    },
    skills: ["html", "css", "js", "vue"]
}
let value;
let prop = 'email';

value = user.firstName;
value = user["age"]
value = user["user-address"].city;
value = user[prop];

const person = {
    name: ["Bob", "Smith"],
    age: 32,
    gender: "male",
    interests: ["music", "skiing"],
    bio: function() {
        alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
        alert('Hi! I\'m ' + this.name[0] + '.');
    }
};

value = 'a'.charCodeAt();
console.log(value)
console.log(user)