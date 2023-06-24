var num // maximo 10

//inicio do tratamento
try{ // tentativa de capturar um erro
    num = prompt('Digite um valor:')
    if(num > 10){
        throw new Error('Valor inválido, o máximo é 10') // se maior que 10 jogado como um erro
    }
}catch(erro){ // o erro capturado será jogado na variavel erro
    console.log('Erro, o máximo permitido é 10: '+erro.message)
    num=10 // o erro foi identificado, foi tratado e agora se for > 10, será tratado para 10 e não o valor errado digitado.
}finally{ // o final, será executado de qualquer forma, dando erro, ou não.
    document.write(`<br> Valor: ${num}`)
}