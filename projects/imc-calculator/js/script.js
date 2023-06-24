var calcular = window.document.getElementById('calcular')

function verificar(){
    var nome = window.document.getElementById('nome').value
    var altura = window.document.getElementById('altura').value
    var peso = window.document.getElementById('peso').value
    var resultado = window.document.querySelector('div.resultado')
    if( nome !== '' && altura !== '' && peso !== ''){
        var imc = (peso/(altura*altura))
        var estagio = ('')
        if(imc < 18.5){
            estagio = ('Abaixo do peso!')
        }else if(imc < 25){
            estagio = ('Peso ideal. Parabéns!!!')
        }else if(imc < 30){
            estagio = ('Acima do peso (obesidade I).')
        }else if(imc < 35){
            estagio = ('Acima do peso (obesidade II).')
        }else{
            estagio = ('Acima do peso (obesidade III), Cuidado!!!')
        }
        resultado.textContent = (`${nome}, seu IMC é: ${imc.toFixed(1)} e voce está: ${estagio}`)
    }else{
        resultado.textContent = ('Preencha todos os campos*')
    }
}

calcular.addEventListener('click', verificar)