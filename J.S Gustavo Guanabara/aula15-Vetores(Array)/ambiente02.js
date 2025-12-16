

let carros = [5,2,8,9,3]

carros.length // Me informa quantos elementos eu tenho no meu Vetor

carros.sort() // Vai colocar o meu Vetor em ordem Crescente

carros [5] = 12 // Acrecentando mais um numero no Vetor

carros.push (13,18,22) // Acresentando mais um numero no Vetor e mandando ele para o ultimo lugar

console.log (carros)

/*console.log (`Nosso Vetor ou o Array é ${carros.length} elementos`)

console.log (`O 5 Valor do Vetor é ${carros[5]}`)

*/

//           Exemplo 

console.log (carros [1])
console.log (carros [4])
console.log (carros [5])
console.log (carros [6])
console.log (carros [8])

 /*Esse exemplo em cima é com o código completo ( sem o Array ) */

for (let pos= 0; pos < carros.length; pos++) {

    console.log (`A posição ${pos} tem o Valor ${carros[pos]}`)
}


/*
Esse outro exemplo é com o código resumido ultilizando o (Array)
 Ou seja:
 Criando uma variavel (pos) para informar cada posição
 ---------------------------------------------------------------------------

*/

for (let pos in carros) {

    console.log (`A posição ${pos} tem o Valor ${carros[pos]}`)
}

/* E essa ultima forma é a mais resumida e atual do ecmascript

Ou seja : mais resumida e com 2 unicas linhas de código

*/ 
