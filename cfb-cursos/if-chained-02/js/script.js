var nota = prompt('Digite sua nota') // se a nota for menor que 4, reprovado. entre 4 e 6 esta reprovado, acima de 6 aprovado.

if(nota <= 4){
    alert('Você está reprovado!')
}else if(nota <=6){
    alert('Você está de recuperação.')
    var nota2 = prompt('Digite a nota de Recuperação')
    if(nota2 <= 4){
        alert('Reprovado na recuperação!!')
    }else if(nota2 <= 6){
        alert('Refaça a recuperação')
    }else{
        alert('Aprovado na recuperação!!')
    }
}else{
    alert('Você está aprovado!!!')
}

// se ficar de recuperação, o indivuo tem uma segunda chance, e as condições são as mesmas para esta nota 2.