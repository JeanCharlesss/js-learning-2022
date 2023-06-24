var botaoAdd = window.document.getElementById('adicionar')
var num = window.document.getElementById('fnum')
var lista = window.document.getElementById('flista')
var res = window.document.getElementById('res')
var valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
    }else{
        window.alert('Numero invalido ou encontrado')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores == 0){
        window.alert('Adicione valores na lista*')
    }else{
        let total = valores.length
        res.innerHTML = ''
        res.innerHTML += (`<p> Ao todo temos ${total} números cadastrados.`)
    }
}
botaoAdd.addEventListener('click',adicionar)