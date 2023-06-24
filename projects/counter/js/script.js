var contar = window.document.getElementById('contar')
function contador(){
    let resultado = window.document.getElementById('resultado')
    let inicio = window.document.getElementById('inicio').value
    let fim = window.document.getElementById('fim').value
    let passo = window.document.getElementById('passos').value
    if(inicio == 0 || fim == 0 || passo == 0){
        resultado.innerHTML = ('Impossível fazer a contagem')
        window.alert('Preencha os campos abaixo*')
    }else{
        resultado.innerHTML = 'Contando: '
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
        if(p <= 0){
            window.alert('Passo inválido! considerando passo 1')
            p = 1
        }
        if(i<f){
            for (let c = i; c <= f; c=c+p){
                resultado.innerHTML +=(`${c} \u{1F449}`)
            }
        }else{
            for (let c = i; c >= f; c=c-p){
                resultado.innerHTML +=(`${c} \u{1F449}`)
             }
    }   
        resultado.innerHTML += (`\u{1F3C1}`)
    }
}
contar.addEventListener('click', contador)