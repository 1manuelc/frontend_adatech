// conversão Explícita x Implícita

// 1. Coerção Explícita (Manual)
const numero = 10;
console.log(numero, typeof numero);

const numeroEmString = String(numero); // Number para String
console.log(numeroEmString, typeof numeroEmString);

console.log(Number("1325")); // String para Number
console.log(parseFloat("1325.75")); // String para Number(float)
console.log(parseInt("1325.75")); // String para Number (int)

console.log(Boolean(50)); // Number para Boolean (!= 0 -> true, 0 -> false)
console.log(Boolean(0));
console.clear();

// 2. Coerção Implícita
console.log("10" + 1); // Concatena, prioridade é para String com +
console.log("10" - 1); // Opera, prioridade é para Number com operações
console.log("10" * 3); // Opera, prioridade é para Number com operações

console.log(10 - "textoQualquer"); // retorna NaN, Not A Number
console.clear();

// ex01
let n = 1 + '1'; // '11' (string)
n = n - 1; // 10 (number)
console.log(n);

// ex02
console.log('5' + 2 + 3 + 4); // 5234 (string)

//ex03
console.log('10' - '4' - '3' - 2 + '5'); // 15 (string)
