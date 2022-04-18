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
  profession: 'Programmer',
};

console.log(
  typeof person,
  person.name,
  person.age,
  person.city,
  person.state,
  person.country,
  person.profession,
);

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

var height = 120;

var guitar = {
  color: 'white',
  strings: 6,
  height: 1.8,
  brand: 'gibson',
  halfTheHeight() {
    return this.height / 2;
  },
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

console.log(guitar.halfTheHeight());

/*
in terms of scope, the object has access to the variables from outside the object itself, but you cannot access the variables from inside the object outside a object;

the object inherits properties and methods from the entity object that was used to creat the object itself

object is a function that creates an object?
*/

var objectEntity = Object();

console.log(
  guitar.hasOwnProperty('color'),
  guitar.hasOwnProperty('strings'),
  guitar.hasOwnProperty('height'),
  guitar.hasOwnProperty('width'),
);

/*

to know how to program well, you have to know the different properties and methods javascript has to offer so you can use it well on a daily basis

*/

var coutingString = `This is only a random string, created so I can count how many characters there is here  !`;

console.log(coutingString.length);

// exercises:

// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome

var personalData = {
  name: 'Leonardo',
  surname: 'Coutinho dos Santos',
  age: 24,
  RG: '111.222.333-2',
  CPF: '000.444.555-25',
  city: 'Salvinéia',
  state: 'Salvinéiandia',
  country: 'Salvinéialoândia',
};

// Crie um método no objeto anterior, que mostre o seu nome completo

personalData.fullName = () => {
  return `${personalData.name} ${personalData.surname}`;
};

console.log(personalData.fullName());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
};

carro.preco = 3000;

console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var blackLabrador = {
  species: 'Dog',
  breed: 'Labrador',
  color: 'Black',
  age: 10,
  bark(pessoa) {
    if (pessoa === 'man') {
      return `ROOF!`;
    } else if (pessoa === 'woman') {
      return ` ~ the sound of silence `;
    } else {
      return `Please, inform us the parameter: man or woman`;
    }
  },
};

console.log(blackLabrador.bark('woman'));

// everything is a object

/*
strings, numbers, boolean, everything in JavaScript has properties and methods, therefore, everything is a object

and u can access this properties and methods using dot notation
*/

var string__1 = 'String No. 1 > String No. 2 > String No. 3 > String No. 4';

console.log(string__1.length);
console.log(string__1.charAt(13));
let string__2 = string__1.replaceAll('>', '<');
console.log(string__2.split('<'));

// a string will inherit properties and methods from the string constructor

var number__1 = 4.8;

console.log(
  number__1.toString(),
  number__1.toFixed(),
  typeof number__1,
  typeof number__1.toString(),
);

/*
for a brief moment, the number is wrapped in a object, havin' access to it's properties and methods
*/

let function__1 = (
  parameter1,
  parameter2,
  parameter3,
  parameter4,
  parameter5,
) => {
  return;
};

console.log(
  `This function total amount of parameters is: ${function__1.length}`,
);

console.log(
  `The inner text inside the button of the page is: ${eventButton.innerText}`,
);

/*
properties and methods (like addEventListener, querySelector, ...) are called Web API's which allows interaction (comunication) between JavaScript and the Browser;
*/
