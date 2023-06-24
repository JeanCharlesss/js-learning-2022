var nota = prompt('Digite sua nota') // se a nota for menor que 4, reprovado. entre 4 e 6 esta reprovado, acima de 6 aprovado.

if(nota <= 4){
    alert('Você está reprovado!')
}else if(nota <=6){
    alert('Você está de recuperação.')
}else{
    alert('Você está aprovado!!!')
}