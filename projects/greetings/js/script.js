window.onload = horario
function saudar(){
    var data = new Date()
    let saudar = window.document.getElementById('saudar')
    let hora = data.getHours()
    let corpo = window.document.getElementsByTagName('body')
    let img = window.document.getElementById('imagem')
        if (hora < 12){
            saudar.innerHTML = ('Bom dia!')
            window.document.body.style.backgroundColor = '#ffb862';
            img.src = ('./img/dia.png')

        }else if(hora <18){
            saudar.innerHTML = ('Boa tarde!')
            window.document.body.style.backgroundColor = '#ba4431';
            img.src = ('./img/tarde.png')
        }else {
            saudar.innerHTML = ('Boa noite!')
            window.document.body.style.backgroundColor = '#06050a';
            img.src = ('./img/noite.png')
        }
        window.setInterval('saudar()', 1000)
}
window.setInterval('saudar()', 1000)

function horario(){
    var data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    if (hora < 10){
        hora = '0'+hora
    }else if (minutos < 10){
        minutos = '0'+minutos
    }else if(segundos < 10) {
        segundos = '0'+segundos
    }

    let horario = window.document.getElementById('horario')
    horario.innerHTML = (`Agora são - ${hora}:${minutos}:${segundos}`)
    window.setInterval('horario()', 1000)
}