// Declarando funções
function saudacao() {
  console.log("Oi, como vai?")
}

saudacao()
console.clear()

// Função com passagem de parâmetro
function saudacao(nome) {
  console.log(`Oi, como vai ${nome}?`)
}

saudacao("Manuel")
console.clear()

// Função com retorno
function soma(numero1, numero2) {
  return numero1 + numero2
}

console.log(soma(10, 20))
console.clear()

// Função com retornos com desvio de fluxo
function maiorDoQue50(numero) {
  if (numero > 50) return true // fluxo do código encerra no return se a condição for satisfeita
  return false // não precisamos usar o else por conta do fluxo acabar acima
}

console.log(maiorDoQue50(25))
console.log(maiorDoQue50(51))

// Bônus: arrow functions ou funções anônimas