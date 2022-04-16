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

var car = {};

console.log(typeof car);

/*

dot notation - access properties and methods of an object by using dot.

*/

var guitar = {
    color: 'white',
    strings: 6,
    height: 1.8,
    brand: 'gibson',
};

/*
dot notation get: get a property(value)/method inside a object
dot notation set: set (create) a new object property/method
*/

guitar.color = 'black'; //altering object property value
guitar.age = '9 years'; //creating/adding a new object property

var guitarColor = guitar.color;
var guitarStrings = guitar.strings;
var guitarHeight = guitar.height;
var guitarBrand = guitar.brand;


console.log(guitar, guitarColor);

/*

this (keyword): references the object itself

*/