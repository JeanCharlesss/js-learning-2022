// tratamento de erros
var num 

try {
    document.writiii(`Jean Charles`) // escrevendo write errado proposital
}catch(e){ // o erro será guardado na variavel e
    document.write(`Erro: `+e.message) // apresentando o erro
    console.log('Mensagem de erro: ')
}