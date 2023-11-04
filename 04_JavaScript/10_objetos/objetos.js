// Objetos são estruturas de dados que usam a estrutura chave-valor, se assimilando às structs

let pessoa = {
  nome: 'Manuel',
  idade: 19
  // 'nomeado-com-hifen': valor
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa['nome']) // podemos acessar chaves assim também, para valores "nomeados-com-hifens"
console.log(pessoa.idade)

// Adicionando chaves
pessoa.altura = 1.74
console.log(pessoa)

// Removendo chaves
delete pessoa.altura
console.log(pessoa)

// Percorrendo o objeto com for-in
for (let chave in pessoa) {
  console.log(`${chave} = ${pessoa[chave]}`)
}