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
    `The variables 'c' and 'd' have the following values: c = ${c} and d = ${d}`,
  );
}
