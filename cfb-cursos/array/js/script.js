// array dinamico, sem tamanho especifico, aumenta e diminui automaticamente
var cor = new Array() // usando o método Array() ou simplesmente var cor = []

cor.push('Vermelho') // índice [0]// o método push() adiciona o valor na ultima posição do array
cor.push('Branco') // índice [1]
cor.push('Preto') // índice [2]
cor[3] = 'Azul' // índice [3] // adicionando manualmente
cor[4] = 'Amarelo' // índice [4]
cor[5] ='Verde' // índice [5]
document.write(`${cor[0]} `) // cor no indice [0] é a String 'Vermelho'
document.write(`${cor[6]} `) // apresentando em um indice não inicializado, ou indefinido
