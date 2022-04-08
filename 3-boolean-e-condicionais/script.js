// Conditional verification using if - else

let a = false;

if (a) {
  console.log(`A variável a = ${a} é verdadeira!`);
  var b = `Essa variável só vai ter o seu valor atribuido se a variável 'a' tiver o valor '${a}'`;
} else {
  console.log(`A variável a = ${a} é falsa!`);
}

console.log(b);

// elseif verification - if if is not true, if if is equal to false, elseif is tested

let c = false;
let d = false;

if (c) {
  console.log(`The variable 'c' has the following value: ${c}`);
} else if (d) {
  console.log(
    `The variable 'c' is equal to ${c}, therefore we tested the variable 'd', which is ${d}`,
  );
} else {
  console.log(
    `The variables 'c' and 'd' have the following values: c = ${c} and d = ${d}, both false (third option)`,
  );
}

// the use of "name" for variables is deprecated (depreciado)
// empty strings return false when tested
// undefined var return false when tested

var name_ = `Maurício`;

if (name_) {
  console.log(
    `O nome carregado na var name_ é: ${name_}. var name = ${name_} e seu tipo é ${typeof name_};`,
  );
} else {
  console.log(
    `A variável name_ é falsy. var name_ = ${name_} e seu tipo é ${typeof name_};`,
  );
}

/*
Falsy:

if(false)
if(0)
if(NaN)
if(null)
if(undefined)if('')

Truthy:

if(true)
if(1)
if(' ')
if('Name_')
if(-42)
if({}) ~ empty object

*/

// denial logic operator

var var__1 = true;

if (!var__1) {
  console.log(
    `var__1 tem o seguinte valor: ${var__1}. sua negação é: ${!var__1}`,
  );
} else {
  console.log(
    `var__1 tem o seguinte valor: ${var__1}. sua negação é: ${!var__1}`,
  );
}

console.log(
  `O valor de ${NaN} = ${!!NaN}`,
  `\n`,
  `O valor de ${1} = ${!!1}`,
  `\n`,
  `O valor de ${''} (string vazia) = ${!!''}`,
  `\n`,
  `O valor de ${undefined} = ${!!undefined}`,
  `\n`,
  `O valor de ${null} = ${!!null}`,
  `\n`,
  `O valor de {} (objeto vazio) = ${!!{}}`,
);

// comparison operators

let number__1 = 10;
let number__2 = 10;
let number__3 = 10;

let test__1 = (number__1 > number__2) & (number__1 > number__3);
let test__1_less = (number__1 < number__2) & (number__1 < number__3);
let test__1_equal = (number__1 = number__2) & (number__1 = number__3);
let test__1__1 = (number__1 > number__2) & (number__1 < number__3);
let test__1__2 = (number__1 < number__2) & (number__1 > number__3);

// testar o valor das operações: console.log(!!test__1);

if (test__1) {
  console.log(
    `A variável 'number__1' é maior que a variável 'number__2' e maior que a variável 'number__3'. number__1 = ${number__1} e number__2 = ${number__2} e number__3 = ${number__3}`,
  );
} else if (test__1_equal) {
  console.log(
    `A variável 'number__1' é igual a variável 'number__2' e igual a variável 'number__3'. number__1 = ${number__1} e number__2 = ${number__2} e number__3 = ${number__3}`,
  );
} else if (test__1_less) {
  console.log(
    `A variável 'number__1' é menor que a variável 'number__2' e menor que a variável 'number__3'. number__1 = ${number__1} e number__2 = ${number__2} e number__3 = ${number__3}`,
  );
} else if (test__1__1) {
  console.log(
    `A variável 'number__1' é maior que a variável 'number__2' e menor que a variável 'number__3'. number__1 = ${number__1} e number__2 = ${number__2} e number__3 = ${number__3}`,
  );
} else if (test__1__2) {
  console.log(
    `A variável 'number__1' é menor que a variável 'number__2' e maior que a variável 'number__3'. number__1 = ${number__1} e number__2 = ${number__2} e number__3 = ${number__3}`,
  );
}

/* o teste 1 cobre todas as possibilidades */
