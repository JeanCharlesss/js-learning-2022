var botao = window.document.getElementById('calcular')
function taboada(){
    let seletor = window.document.getElementById('seletor')
    let numero = window.document.getElementById('numero').value
    if(numero.length == 0){
        window.alert('Por favor, insira um número.')
    }else{
        let n = Number(numero)
        let c = 1
        for (let i = 1; i <= 10; i++) {
            seletor.innerHTML += `<option value="tab${i}">${n} x ${i} = ${n * i}</option>`
        }
    }
}

botao.addEventListener('click',taboada)