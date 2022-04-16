const eventBtn = document.querySelector('#eventButton');

let alertFunction = () => alert('You just clicked the button!');

eventBtn.addEventListener('click', alertFunction);

/*

A JavaScript object is a set of variables and functions, which are called properties and methods;

variables = properties
functions = methods

*/

var person = {
    name: 'Leo',
    age: 24,
    city: 'Salvador',
    state: 'Bahia',
    country: 'Brazil',
    profession: 'Programmer'
}

console.log(typeof person, person.name, person.age, person.city, person.state, person.country, person.profession);

/*

Method is a property that has a function passed as a value;

*/

var square = {
    sides: 4,
    area(sideSize) {
        return sideSize * sideSize;
    },
    perimeter(sideSize) {
        return this.sides * sideSize; 
    },
};

console.log(square.area(8), square.perimeter(8));


/*

with objects you can divide your code into small reusable parts (organizing it better)

*/

var piNumber = Math.PI;
var ENumber = Math.E;

console.log(piNumber);
console.log(ENumber);

var randomNumber = Math.random();

console.log(randomNumber);