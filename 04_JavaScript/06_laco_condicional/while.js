const input = require('readline-sync');

const numeroSorteado = 10;
let numero = Number(input.question('Digite um número: '));

// estrutura de repetição não-controlada
while (numero !== numeroSorteado)
    numero = Number(input.question("Número diferente do sorteado\nDigite outro número: "));

if (numero == numeroSorteado) console.log("Acertou!")