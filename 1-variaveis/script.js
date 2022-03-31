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
