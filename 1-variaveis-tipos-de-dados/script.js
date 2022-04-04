/* 1 - Variáveis */

console.log('Hello world!');

var nome = 'Leonardo';
let idade = 24;
const solteiro = false;

console.log('Nome:', nome, '\n', 'Idade:', idade, '\n', 'Solteiro:', solteiro);

/* Conceito DRY - Don't repeat yourself */

let a = 5;
let b = 4;

c = a * b;

console.log('A multiplicação de', a, 'por', b, 'é igual a:', c);

let cidade = 'Matão',
  estado = 'São Paulo',
  pais = 'Brasil';

console.log('Cidade:', cidade, '\n', 'Estado:', estado, '\n', 'País:', pais);

/* You can declare a variable and leave it without any value in it (undefined) */

let indefinido;

console.log(
  'O valor da variável definida sem nenhum valor atribuido é:',
  indefinido,
);

/*Variables names can begin with $, underline _ or letters, and they are case sensitive (name is different from Name). They can contain numbers, but cannot begin with it, and you also cannot use reserved words.*/

/*Hoisting (concept): is moving the declaration of all variables and functions to the top of the code! (and it only works with "VAR", it doesn't work wit "LET" and "CONST"!)*/

console.log(testing_hoisting);
var testing_hoisting = 'Testando hoisting';

/* It's possible to change the value of variables "VAR" and "LET", but you cannot change the value of a "CONST" (oh really?! you do not tell) */

var number_1 = 10;
console.log('O valor inicial da variável number_1 é:', number_1);
number_1 = 20;
console.log('O valor alterado da variável number_1 é:', number_1);

let number_2 = 30;
console.log(
  'O valor inicial da variável number_2 (declarada com LET) é:',
  number_2,
);
number_2 = 40;
console.log(
  'O valor alterado da variável number_2 (declarada com LET) é:',
  number_2,
);

/* If I use VAR, I can declare a variable twice, with the same name, and get no error! (only with var) */

var time = 'Vasco';
var time = 'Corinthians';

console.log(time);

/* 2 - Tipos de dados */

// 7 types of data - All primitive, with the exception of objects

var typeString = 'some text here'; //string
var typeNumber = 42; //number
var typeBoolean = true; //boolean
var typeUndefined; //undefined
var typeNull = null; //null
// - but actually returning type Object (?) - in the early days of JavaScript, null was an object, and remains that way for convenience
var typeSymbol = Symbol(); //symbol
var typeObject = {}; //object
var typeObjectArray = []; //object

/* The JavaScript specification says about null : null is a primitive value that represents the intentional absence of any object value. If you see null (either assigned to a variable or returned by a function), then at that place should have been an object, but for some reason, an object wasn't created. */

console.log(
  typeof typeString,
  typeof typeNumber,
  typeof typeBoolean,
  typeof typeUndefined,
  typeof typeNull,
  typeof typeSymbol,
  typeof typeObject,
  typeof typeArray,
);

/* You cannot change a primitive type of value, like you can change an Object */

var space = ' ';

var quantity1 = 100;
var phrase1 = 'The total amount of oranges in the bag is:';
var completePhrase1 = phrase1 + space + quantity1;
console.log(completePhrase1);

/* the sum of a string type var with a number type var results in a string type var */

var phrase2 = 'This is the first part of the phrase.';
var phrase3 = 'This is the second part of the phrase.';
var completePhrase2 = phrase2 + space + phrase3;
console.log(completePhrase2);

var phrase4 = 'This is a test with "quotes" inside a string';
var phrase5 = "This is a test whit 'quote' inside a string";
console.log(phrase4, '\n', phrase5);

/* Template String - JavaScript ES6 */

var phrase6 = `This is a test to add the quantity "${
  (quantity1 * 2 + 1000) * 4
}" (that's is kept inside a variable) inside a string!`;
console.log(phrase6);

// Exercices:

var phrase7 = `${phrase2} ${phrase3}`;
console.log(phrase7);
