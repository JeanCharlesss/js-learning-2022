for (var i = 0; i < 5; i++){ // 3 parametros, inicializador do contador, condição de teste e o incremento
    document.write('Jean Charles<br>')
}

// trabalhando com array
var num = new Array()
var num2 = new Array()

//adicionando
for(var i = 0; i < 5; i++){
    num.push(i+1) // adicionando 1 para que não inicie do 0
}
//apresentando
for(var i = 0; i < 5; i++){
    document.write(num[i]+'<br>')
}



//adicionando através do prompt
for(var i = 0; i < 5; i++){
    num2.push(prompt(`Digite o ${i+1}o. número:`)) // adicionando 1 para que não inicie do 0
}
//apresentando os numeros digitados do prompt
for(var i = 0; i < 5; i++){
    document.write(`o ${i+1}o. numero digitado foi: ${num2[i]}<br>`)
}
