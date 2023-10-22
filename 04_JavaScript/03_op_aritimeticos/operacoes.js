const mostrarParametros = (num1, num2) => "(" + num1 + ", " + num2 + ") = ";

const soma = (num1, num2) =>
	"soma" + mostrarParametros(num1, num2) + (num1 + num2);

const subtracao = (num1, num2) =>
	"subtracao" + mostrarParametros(num1, num2) + (num1 - num2);

const multiplicacao = (num1, num2) =>
	"multiplicacao" + mostrarParametros(num1, num2) + num1 * num2;

const divisao = (num1, num2) =>
	"divisao" + mostrarParametros(num1, num2) + num1 / num2;

const potenciacao = (num1, num2) =>
	"potenciacao" + mostrarParametros(num1, num2) + num1 ** num2;

const restoDaDivisao = (num1, num2) =>
	"restoDaDivisao" + mostrarParametros(num1, num2) + (num1 % num2);

console.log(soma(20, 2));
console.log(subtracao(2, 20));
console.log(multiplicacao(20, 2));
console.log(divisao(20, 2));
console.log(potenciacao(2, 4));
console.log(restoDaDivisao(20, 5));

// Precedência de operadores segue a da matemática padrão
console.log(3 + 7 * 3);
console.log((10 + 7 + 8) / 3);

// Biblioteca Math
console.log(Math.sqrt(16));

// Documentação do JavaScript no MDN