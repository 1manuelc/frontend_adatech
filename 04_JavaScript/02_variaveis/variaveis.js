/* Variáveis são como espaços em uma prateleira:
São capazes de guardar informações se referenciando através de um nome */

// temos diferentes formas de declarar variáveis e constantes (operadores declarativos)
// var (antiga com problemas de escopo)
// let (formato novo de declaração)
// const (constantes)

// let idade = 19
// console.log(idade)

let numero = 30             // tipo Number
let altura = 1.74           // tipo Number
let nome = "Manuel Carlos"  // tipo String
let estouEstudando = true   // tipo Booleano
let indefinida // ou indefinida = undefined
let nula = null // tipo Object

const imprimirTipo = (variavel) =>
  variavel + " (" + typeof(variavel) + ")"

console.log(imprimirTipo(numero))
console.log(imprimirTipo(altura))
console.log(imprimirTipo(nome))
console.log(imprimirTipo(estouEstudando))
console.log(imprimirTipo(indefinida))
console.log(imprimirTipo(nula))
