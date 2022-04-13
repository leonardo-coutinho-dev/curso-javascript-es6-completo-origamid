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
