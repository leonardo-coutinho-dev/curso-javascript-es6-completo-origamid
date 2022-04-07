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

// The order matters, always starting with multiplication and division, and after that the sums and subtractions

var total1 = 20 + 5 * 2;
var total2 = (20 + 5) * 2;
var total3 = (20 / 2) * 5;
var total4 = 10 + 10 * 2 + 20 / 2;

console.log(
  'The order matters, see the following examples:',
  '\n',
  'The result of the following operation 20 + 5 * 2 is equal to:',
  total1,
  '\n',
  'The result of the following operation (20 + 5) *2 is equal to:',
  total2,
  '\n',
  'The result of the following operation (20 / 2) * 5 is equal to:',
  total3,
  '\n',
  'The result of the following operation 10 + 10 * 2 + 20 / 2 is equal to:',
  total4,
);

var total5 = (((20 + 30) * 2) / 4) % 5;
console.log(total5);

// Unary Arithmetic Operators !== from Binary Arithmetic Operators (that needs two numbers to make a operation)

var increment = 1;
console.log('The initial value of increment is:', increment);
increment++;
console.log(
  "The value of the increment after the operation 'increment++' is:",
  increment,
);

console.log(
  `If I put '++' before the variable increment ${increment}, the result is:`,
  ++increment,
);
console.log(
  `If I put '++' after the variable increment ${increment}, the result is:`,
  increment++,
);
console.log(
  `The same as when u put it before the variable, because the operation was not executed yet, but now, the value of increment is: ${increment} (after the execution of the operation)`,
);

// You cannot alter the value of a const using increment.

var decrement = 0;

console.log(
  `The value of the variable decrement ${decrement} after the operation '--decrement' is: ${--decrement}.`,
);

// The + and - operators try to change the following value into a number, examples:

var stringNumber1 = '1';
var stringNumber2 = '2';

console.log(stringNumber1, typeof stringNumber1);
console.log(stringNumber2, typeof stringNumber2);

console.log(
  `The sum of stringNumber1 (${stringNumber1}) with stringNumber2 (${stringNumber2}), is: ${
    stringNumber1 + stringNumber2
  } (both being typeof string)`,
);

console.log(
  `If I put the '+' in front of both variables, we have the following: stringNumber1 + stringNumber2 = ${
    +stringNumber1 + +stringNumber2
  } (both converted to typeof number)`,
);

var number1 = +stringNumber1;
var number2 = -stringNumber2;

console.log(number1, typeof number1);
console.log(number2, typeof number2);

var string1 = 'just some random text';
var stringToNumber = +string1;
console.log(stringToNumber, typeof stringToNumber);

// How can you divide the body weight by 2? (having the following):

var weightNumber = 90;
var unity = 'kg';
var weight = weightNumber + unity;
var weightDividedByTwo = weight / 2; //wrong

console.log(weightDividedByTwo, typeof weightDividedByTwo);

var weightDividedByTwo2 = weightNumber / 2 + unity; // correct

console.log(weightDividedByTwo2, typeof weightDividedByTwo2);
