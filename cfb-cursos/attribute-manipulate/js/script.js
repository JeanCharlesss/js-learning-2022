//adicionando uma classe e o valor da classe
//document.getElementById('carro').setAttribute('class','c1')
function trocaImage(c){
    var obj = document.getElementById('carro')
    if(c==1){
        obj.setAttribute('class','c1')
    }else if(c==2){
        obj.setAttribute('class','c2')
    }else if(c==3){
        obj.setAttribute('class','c3')
    }
}

function remover(){
    var obj = document.getElementById('carro')
    obj.removeAttribute('class')
}

function verificar(){
    var obj = document.getElementById('carro')
        if(obj.hasAttribute('class')){
            alert('Atributo class esta na tag')
        }else {
            alert('Sem atributo class')
        }
}