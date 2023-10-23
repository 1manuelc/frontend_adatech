const input = require('readline-sync');

let media = 0;
for (let i = 0; i < 3; i++) // estrutura de repetição controlada
  media += Number(input.question(`Digite a ${i + 1}ª nota: `)); 
  // template string com crases (`${variavel}`)

media /= 3;
console.log(`A média do aluno foi ${media.toFixed(2)}`); 
// método toFixed para limitar casas decimais