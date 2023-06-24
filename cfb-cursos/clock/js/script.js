function relogio(){
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    if(hora < 10){
        hora = '0' + hora
    }else if(minuto < 10){
        minuto = '0' + minuto
    }else if(segundo < 10){
        segundo = '0' + segundo
    }
    var relBox = `${hora}:${minuto}:${segundo}`
    document.getElementById('rel').value = relBox
}
var tempo = setInterval(relogio, 1000)