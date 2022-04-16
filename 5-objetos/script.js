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
    area: (side) => {
        return side * side;
    },
    perimeter: (side) => {
        return side * 4; 
    },
};

console.log(square.area(8), square.perimeter(8));