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
if(undefined)
if('')

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

let test__1 = number__1 > number__2 && number__1 > number__3;
let test__1_less = number__1 < number__2 && number__1 < number__3;
let test__1_equal = (number__1 = number__2) && (number__1 = number__3);
let test__1__1 = number__1 > number__2 && number__1 < number__3;
let test__1__2 = number__1 < number__2 && number__1 > number__3;

console.log(!!test__1_equal);
console.log(!!0, `0 (zero) tem o valor = ${!!0}`);

// testar o valor das operações: console.log(!!test__1);

if (!!test__1) {
  console.log(
    `A variável 'number__1' é maior que a variável 'number__2' e maior que a variável 'number__3'. number__1 = ${number__1} e number__2 = ${number__2} e number__3 = ${number__3}`,
  );
} else if (!!test__1_equal) {
  console.log(
    `A variável 'number__1' é igual a variável 'number__2' e igual a variável 'number__3'. number__1 = ${number__1} e number__2 = ${number__2} e number__3 = ${number__3}`,
  );
} else if (!!test__1_less) {
  console.log(
    `A variável 'number__1' é menor que a variável 'number__2' e menor que a variável 'number__3'. number__1 = ${number__1} e number__2 = ${number__2} e number__3 = ${number__3}`,
  );
} else if (!!test__1__1) {
  console.log(
    `A variável 'number__1' é maior que a variável 'number__2' e menor que a variável 'number__3'. number__1 = ${number__1} e number__2 = ${number__2} e number__3 = ${number__3}`,
  );
} else if (!!test__1__2) {
  console.log(
    `A variável 'number__1' é menor que a variável 'number__2' e maior que a variável 'number__3'. number__1 = ${number__1} e number__2 = ${number__2} e number__3 = ${number__3}`,
  );
}

/* o teste 1 (e todas as suas variações) cobre todas as possibilidades */

/*

o sinal de = (unario) serve como atribuição
o sinal de == (binário) serve para comparação não estrita
o sinal de === (ternário) serve para comparação estrita
o sinal de != ou !== serve para verificar a negação

*/

/*
operador OU compara se um ou outro valor é verdadeiro - e retorna o primeiro valor verdadeiro
*/

var condicional__1 = 5 - 5 || undefined || NaN || 10;
var condicional__2 = 5 - 5 && undefined && NaN && 10;

console.log(
  `A variável condicional__1 tem como resultado da avaliação feita acima (5 - 5 || undefined || NaN || 10) o valor ${condicional__1} e é ${!!condicional__1} (verdadeira ou falsa). 5 - 5 = ${
    5 - 5
  } e ${!!(5 - 5)} e ${NaN} = ${!!NaN} e undefined = ${!!undefined}`,
);

console.log(
  `A variável condicional__2 tem como resultado da avaliação feita acima (5 - 5 && undefined && NaN && 10) o valor ${condicional__2} e é ${!!condicional__2} (verdadeira ou falsa). 5 - 5 = ${
    5 - 5
  } e ${!!(5 - 5)} e ${NaN} = ${!!NaN} e undefined = ${!!undefined}`,
);

// && (e) - se algum valor for false, ele retorna esse valor e para a verificação

// || (ou) - se algum valor for true, ele retorna esse valor e para a verificação

// caso switch - você pode verificar se uma mesma variável é igual a diferentes valores

var diaSemana = 'Teste default';

switch (diaSemana) {
  case 'Segunda':
    console.log(`Hoje é ${diaSemana}`);
    break;
  case 'Terça':
    console.log(`Hoje é ${diaSemana}`);
    break;
  case 'Quarta':
    console.log(`Hoje é ${diaSemana}`);
    break;
  case 'Quinta':
    console.log(`Hoje é ${diaSemana}`);
    break;
  case 'Sexta':
    console.log(`Hoje é ${diaSemana}`);
    break;
  case 'Sábado':
    console.log(`Hoje é ${diaSemana}`);
    break;
  case 'Domingo':
    console.log(`Hoje é ${diaSemana}`);
    break;
  default:
    console.log(
      `Informe um valor válido para um dos dias da semana! Atualmente você informou: ${diaSemana}`,
    );
}

// Verifique se a sua idade é maior do que a de algum parente

var minhaIdade = 51;
var idadeParente = 50;

if (minhaIdade > idadeParente) {
  console.log(
    `Minha idade é maior que a de meu parente! Minha idade: ${minhaIdade}; Idade de meu parente: ${idadeParente}`,
  );
} else if (minhaIdade < idadeParente) {
  console.log(
    `A idade de meu parente é maior que a minha! Minha idade: ${minhaIdade}; Idade de meu parente: ${idadeParente}`,
  );
} else if ((minhaIdade = idadeParente)) {
  console.log(
    `Minha idade é igual a de meu parente! Minha idade: ${minhaIdade}; Idade de meu parente: ${idadeParente}`,
  );
}

// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - ' ' && 5 - 2;

// 3

console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta,
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
if ('Gato' === 'gato' && 5 > 2) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// false

// O que irá aparecer no console?
if ('Gato' === 'gato' || 5 > 2) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

// Cão
