var vetor = [0, 1, 7, 4, 2, 9]
for (let i in vetor){
    console.log(`${i}. índice tem o valor ${vetor[i]}`)
}

console.log('-------------------------')

console.log(`o valor está 4 está no índice > ${vetor.indexOf(4)}`) // usando o método indexOf para buscar algo relacionado á 4 e isso retornará o índice de onde está o 4

console.log('-------------------------')

//para deixar mais interativo
// o indexOf guarda na variável a posição se caso for encontrado, senão retorna o valor -1
var ind = vetor.indexOf(67)
if (ind == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`o valor está na posição >${vetor.indexOf(4)}`)
}

