let arr1 = [1, 2, 3, 4, 5]

// FATIAMENTO COM SLICE()
console.log(arr1.slice(0, 2))
// fatia do índice 0 até < 2 (0, 1) = [1, 2]

console.log(arr1.slice(2))
// fatia do segundo índice até o final (2, 3, 4) = [3, 4, 5]

console.clear()

// ADICIONANDO ELEMENTOS COM PUSH() E UNSHIFT()
let arr2 = []

arr2.push(1, 2, 3)
arr2.push(4)          // push() adiciona no final
console.log(arr2)

arr2.unshift(-1, 0)   // unshift() adiciona no início
console.log(arr2)

console.clear()

// REMOVENDO ELEMENTOS COM POP() E SHIFT()
console.log(arr2)
let removido = arr2.pop()   // remove no final e retorna o elemento removido
console.log(arr2)
console.log(`Removido com pop() = ${removido}\n\n`)

console.log(arr2)
removido = arr2.shift()     // remove no início e retorna o elemento removido
console.log(arr2)
console.log(`Removido com shift() = ${removido}`)

console.clear()

// JUNTANDO ARRAYS COM CONCAT()
console.log(arr1.concat(arr2))
console.log(arr2.concat(arr1))

console.clear()

// BUSCANDO ELEMENTOS COM indexOf() E lastIndexOf()
console.log(arr1 + ` indexOf(3) = ${arr1.indexOf(3)}`)
// primeiro índice em que um elemento aparece

console.log(arr1 + ` indexOf(15) = ${arr1.indexOf(15)}`)
// obs: se o elemento não existir será retornado -1 (índice não existente)

arr1.push(1)
console.log(arr1 + ` lastIndexOf(1) = ${arr1.lastIndexOf(1)}`)
// último índice em que um elemento aparece

console.clear()

// VERIFICAR A EXISTÊNCIA DE UM ELEMENTO NO ARRAY COM INCLUDES()
console.log(arr1.includes(15))
console.log(arr1.includes(1))

console.clear()

// INVERTENDO UM ARRAY
console.log(arr2)

const arrInv = arr2.reverse()
console.log(arrInv)