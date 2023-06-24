let num = [5,3,2,5] // adicionando manualmente os valores no indice 0,1,2,3
num[4] = 6 // criando e adicionando no indice 3 o valor 6 
num.push(7) // adiciona e criando um indice no final com o metodo interno .push
console.log(`o vetor é: ${num}`)
console.log (`o vetor tem ${num.length} posições`) // vendo o comprimento do array, não tem parentes pois é atributo
console.log(`o vetor ordenado é ${num.sort()}`) // metodo que organiza o array em ordem do menor para o maior
console.log(`O terceiro valor do vetor é ${num[2]}`)