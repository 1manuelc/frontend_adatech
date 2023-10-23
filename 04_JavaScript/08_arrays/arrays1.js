let arr = ['Manuel', 19, 1.74, true]; // arrays em Js são estruturas de dados heterogêneas, ou seja, comportam variáveis de mais de um tipo

console.log(arr[0]); // acessando posições do array
console.clear();

for (let i = 0; i < arr.length; i++) 
  console.log(arr[i]); // percorrendo todo o array por índice

for (let elemento of arr) 
  console.log(elemento) // percorrendo todo o array por "for of"

for (let indice in arr) 
  console.log(indice, arr[indice]); // percorrendo os índices do array com "for in"