let eventButton = document.getElementById('eventButton');

/*

  functions are blocks of code that can be executed and reused
  values can be passed through this blocks and the function will return another value

*/

function squareArea(side) {
  return side * side;
}

console.log(squareArea(4));

function noParameters() {
  console.log('Função ativa!');
}

noParameters();

var squareAreaX2 = squareArea(4) * 2;

console.log(squareAreaX2);

/*
  parameters and arguments >

  when creating a function, you will pass the parameters to it
  when executing the function, you will pass the arguments to it

*/

function bodyAverageIndex(weight, height) {
  const bodyAverageIndex = weight / height ** 2;
  return bodyAverageIndex;
}

console.log(bodyAverageIndex(80, 2));

function function__1(parameter) {
  if (parameter === 'first') {
    return `You typed 'first'!`;
  } else if (parameter === 'second') {
    console.log(`You typed 'second'!`);
  } else if (parameter === 'third') {
    console.log(`You typed 'third'!`);
  } else {
    console.log(`You typed nothing you miserable ******`);
  }
}

console.log(function__1('first'));
function__1('second');
function__1('third');
function__1('testing');

/* parameters can be functions - you can pass any type of data as parameters of a function */

/* callback functions, usually are functions that are called after some event */

let alertFunction = () => alert('A function was passed as argument here!');

eventButton.addEventListener('click', alertFunction);

/* anonymous functions are functions in which the name of the function is not defined  */

/* The function may or may not return a value */

let triangleAreaFunction = (b, h) => {
  let area = (b * h) / 2;
  console.log(area);
};

triangleAreaFunction(4, 2);

/* when u have no 'return' inside a function, the function will return 'undefined' as default */

/* returned values: a function can return any type of data, including other functions */

let checkAge = (age) => {
  if (typeof age !== 'number') {
    return 'Please, inform us a valid value for your age!';
  } else if (age >= 60) {
    return 'You are part of the third age group!';
  } else if (age >= 24 && age < 60) {
    return 'You are part of the second age group!';
  } else if (age < 24) {
    return 'You are part of the first age group!';
  }
};

console.log(checkAge(60));

/*

  Both the switch statement and if..else statement are used to create conditionals. The rule of thumb is that the switch statement is only used when you have a precise value for the conditionals.

  This is because an if..else statement can be used to compare an expression with an imprecise value such as larger than or smaller than!

  switch ~ precise values
  if... else ~ imprecise values

  be careful, return different types of values it's not a good idea

*/

let thirdAge = (age) => {
  if (typeof age !== 'number') {
    return 'Please, inform us a valid value for your age!';
  } else if (age >= 60) {
    return true;
  } else if (age < 60) {
    return false;
  }
};

console.log(thirdAge(60));

/*

  variables and functions defined inside a block are not visible outside of it

*/

let notVisitedCountries = (visitedCoutries) => {
  var totalCountries = 193;
  return `I still have to visit ${
    totalCountries - visitedCoutries
  } countries to complete my list and travel to every single country in the world!`;
};

console.log(notVisitedCountries(90));

/*

escopo léxico ~ functions can always access variables that were created in the parent context

*/

var profession = 'Programmer';

let someData__1 = () => {
  var name = 'Leo';
  var age = 24;
  let someData__2 = () => {
    var city = 'Salvador';
    var inLove = true;
    return `${name}, ${age}, ${city}, ${inLove}`;
  };
  return someData__2();
};

console.log(someData__1());

/*

functions are also hoisted ~ JavaScipt moves all functions to the memory before they are executed

the same that happens with var

*/

// Crie uma função para verificar se um valor é Truthy

let checkValue = (value) => {
  if (!!value) {
    console.log('O valor é verdadeiro!');
  } else {
    console.log('O valor é falso!');
  }
};

checkValue('Leonardo');
checkValue(0);

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

let perimeter = (side) => {
  return side * 4;
};

console.log(perimeter(8));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

let fullName = (name, surname) => {
  return `O seu nome completo é: ${name + surname}`;
};

console.log(fullName('Leonardo', ' Coutinho dos Santos'));

// Crie uma função que verifica se um número é par

let isEven = (number) => {
  if (typeof number !== 'number') {
    return `Por favor, digite um número!`;
  } else if (number % 2 === 0) {
    return `O número ${number} é um número par!`;
  } else {
    return `O número ${number} é um número ímpar!`;
  }
};

console.log(isEven(42));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

let typeOfData = (parameter) => {
  return `O tipo do dado passado é: ${typeof parameter}`;
};

let var__1;

console.log(typeOfData(60));
console.log(typeOfData(true));
console.log(typeOfData(var__1));
console.log(typeOfData('60'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

document.addEventListener('scroll', () => {
  console.log('Leonardo Coutinho dos Santos');
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
