var vetor = [0, 1, 7, 4, 2, 9]
for(let i = 0; i<vetor.length; i++){
    console.log(`${i}o. índice tem o valor: ${vetor[i]}`)
}

console.log('-------------------------')

for (let i in vetor){
    console.log(`${i}o. índice tem o valor: ${vetor[i]}`)
}