// Numbers

var age = 24;
var goals = 1000;
var pi = 3.14;
var exp = 24e1;
//output = 240 - adds zeros (how many you put it after the e) to the end of the first number (before the e)
var exp2 = 24e-2;
//output = 0.24 - turns into a decimal number when using a negative number after the e
console.log(typeof age, typeof goals, typeof pi, typeof exp, exp, exp2);

// Arithmetic Operators - (testing those functions on the console)

var sum = (a, b) => {
  return a + b;
};

var subtraction = (a, b) => {
  return a - b;
};

var division = (a, b) => {
  return a / b;
};

var multiplication = (a, b) => {
  return a * b;
};

const exponent = (a, b) => {
  return a ** b;
};

var module = (a, b) => {
  return a % b;
};

/* When using operators with strings containing only numbers, JavaScript will convert the type of the data from string to number and do the math, with the exception of the sum operator, which will still concatenate the numbers */

var sum2 = '100' + '50'; //the sum of two strings containing two numbers inside
console.log(
  sum2,
  typeof sum2,
  isNaN(sum2),
  'Sum of two strings with numbers inside',
);
var subtraction2 = '100' - '50'; //the subtraction of two strings containing two numbers inside
console.log(
  subtraction2,
  typeof subtraction2,
  isNaN(subtraction2),
  'Subtraction of two strings with numbers inside',
);
var division2 = '100' / '50';
console.log(
  division2,
  typeof division2,
  isNaN(division2),
  'Division of two strings with numbers inside',
);
var multiplication2 = '100' * '2';
console.log(
  multiplication2,
  typeof multiplication2,
  isNaN(multiplication2),
  'Multiplication of two strings with numbers inside',
);
var exponent2 = '3' ** '4';
console.log(
  exponent2,
  typeof exponent2,
  isNaN(exponent2),
  'Elevating a number to the other, but with strings',
);
var module2 = '29' % '5';
console.log(
  module2,
  typeof module2,
  isNaN(module2),
  'Module of one number related to the other, with strings',
);
var typeNaN = 'Subtrair um texto de um número' - 50;
console.log(
  typeNaN,
  typeof typeNaN,
  isNaN(typeNaN),
  'Testing NaN - isNaN should be true here',
);
